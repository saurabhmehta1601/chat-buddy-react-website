import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import ReactLoading from 'react-loading';
import { useInterval } from "usehooks-ts"

type propTypes = ComponentPropsWithoutRef<"header"> & { text: string, sender: "bot" | "user", loading: boolean }

const Message = (props: propTypes) => {
    const [renderedText, setRenderedText] = useState('')
    const [cursor, setCursor] = useState(0)

    useInterval(() => {
        if (cursor >= props.text.length) {
            return
        }
        setRenderedText(text => text + props.text[cursor])
        setCursor(cursor => cursor + 1)
    }, cursor >= props.text.length || props.loading || props.sender !== "bot" ? null : 40)

    return (
        <article className='flex items-start gap-x-4 p-2 rounded-md'>
            <img
                width={32} height={32}
                src={props.sender === "bot" ? "/assets/bot.png" : "/assets/user.png"}
            />
            <div
                className={" rounded-sm flex-1 "}>
                {props.loading ?
                    <div className='relative'>
                        <ReactLoading
                            type={"bubbles"}
                            color={"#94a3b8"}
                            height={32}
                            className="self-center relative -top-3"
                        />
                    </div> :
                    <p style={{ whiteSpace: 'pre-line' }}
                        className={`
                    py-1 px-2  rounded-md ${props.sender === "bot" ? "bg-slate-700" : "bg-blue-700"} `
                        }
                    >
                        {props.sender === "bot" ? renderedText : props.text}
                    </p>
                }
            </div>
        </article >
    )
}

export default Message