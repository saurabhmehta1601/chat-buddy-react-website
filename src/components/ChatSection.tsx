import { useEffect, useRef } from 'react'
import Message from './Message'
import { Box, Paper, colors } from '@mui/material'

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
        <Paper elevation={2} sx={{ width: "min(90vw, 960px)", height: "100%", margin: "0.5em auto" }}>
            <Box ref={chatSectionRef} m={2}>
                {messages.map(message => (
                    <Message
                        key={message.id}
                        text={message.text}
                        sender={message.sender}
                        loading={message.loading}
                    />
                ))}
            </Box>
        </Paper>
    )
}

export default ChatSection