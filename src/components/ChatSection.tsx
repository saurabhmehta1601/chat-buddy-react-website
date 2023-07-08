import { useEffect, useRef } from 'react'
import Message from './Message'
import { Paper } from '@mui/material'

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

    const chatSectionRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (chatSectionRef.current && chatSectionRef.current.lastChild) {
            (chatSectionRef.current.lastChild as HTMLDivElement).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }, [messages])
    return (
        <Paper elevation={2}>
            <div
                ref={chatSectionRef}
                className="min-h-[200px] p-4 text-white flex-1  flex flex-col gap-y-2 "
            >
                {messages.map(message => (
                    <Message
                        key={message.id}
                        text={message.text}
                        sender={message.sender}
                        loading={message.loading}
                    />
                ))}
            </div>

        </Paper>
    )
}

export default ChatSection