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
        // if (props.text.substring(cursor).startsWith("\n")) {
        //     setRenderedText(text => text + "\n")
        //     setCursor(cursor => cursor + 2)
        // }
        // else {
        setRenderedText(text => text + props.text[cursor])
        setCursor(cursor => cursor + 1)
        // }
    }, cursor >= props.text.length || props.loading || props.sender !== "bot" ? null : 40)

    return (
        <article className='flex items-start gap-x-4 p-2 rounded-md'>
            <img
                width={32} height={32}
                src={props.sender === "bot" ? "/assets/bot.png" : "/assets/user.png"}
            />
            <div
                className={" rounded-sm flex-1 " + props.sender === "user" ? "text-right" : "text-left"}>
                {props.loading ?
                    <div className='relative'>
                        <ReactLoading
                            type={"bubbles"}
                            color={"#94a3b8"}
                            height={32}
                            className="self-center relative -top-3"
                        />
                    </div> :

                    props.sender === "bot" ?
                        renderedText :
                        `${props.text}`
                }
            </div>
        </article>
    )
}

export default Message