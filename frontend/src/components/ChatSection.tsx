import React, { useState } from 'react'
import Message from './Message'

interface IMessage {
    id: string
    sender: "bot" | "user"
    text: string
    loading: boolean
}

interface IProps {
    messages: IMessage[]
}

const ChatSection = ({ messages }: IProps) => {
    return (
        <main
            className=" max-w-2xl bg-slate-800 rounded-md flex-1 flex flex-col sm:mb-4 self-center w-full overflow-y-scroll"
        >
            <section className="min-h-[200px] p-4 text-white flex-1  flex flex-col gap-y-2">
                {messages.map(message => (
                    <Message
                        key={message.id}
                        text={message.text}
                        sender={message.sender}
                        loading={message.loading}
                    />
                ))}
            </section>

        </main>
    )
}

export default ChatSection