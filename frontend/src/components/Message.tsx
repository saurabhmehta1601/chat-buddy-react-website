import React, { ComponentPropsWithoutRef } from 'react'

type propTypes = ComponentPropsWithoutRef<"header"> & { text: string, sender: "bot" | "user" }

const Message = (props: propTypes) => {
    return (
        <article className='flex items-start gap-x-4  p-2 rounded-md'>
            <img
                width={32} height={32}
                src={props.sender === "bot" ? "/assets/bot.png" : "/assets/user.png"}
            />
            <div
                className={" rounded-sm flex-1 " + props.sender === "user" ? "text-right" : "text-left"}>
                {props.text}
            </div>
        </article>
    )
}

export default Message