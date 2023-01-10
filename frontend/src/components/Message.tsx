import React, { ComponentPropsWithoutRef } from 'react'
import ReactLoading from 'react-loading';

type propTypes = ComponentPropsWithoutRef<"header"> & { text: string, sender: "bot" | "user", loading: boolean }

const Message = (props: propTypes) => {
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
                    </div> : props.text}
            </div>
        </article>
    )
}

export default Message