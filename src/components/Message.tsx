import { ComponentPropsWithoutRef, useState } from 'react'
import ReactLoading from 'react-loading';
import { useInterval } from "usehooks-ts"
import { Box, colors, Typography } from "@mui/material"
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Person4Icon from '@mui/icons-material/Person4';
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
        <Box sx={{ display: "flex", alignItems: "start", columnGap: 1 }}>
            <Box sx={{ position: "relative", top: 1, color: props.sender === "bot" ? colors.grey['700'] : colors.blue['800'] }}>
                {props.sender === "bot" ? <SmartToyIcon fontSize='large' /> : <Person4Icon fontSize='large' />}
            </Box>
            <Box flex={1}>
                {props.loading ?
                    <Box className='relative'>
                        <ReactLoading
                            type={"bubbles"}
                            color={colors.grey['300']}
                            height={32}
                            className="self-center relative -top-3"
                        />
                    </Box> :
                    <Typography
                        variant='body2'
                        sx={{
                            whiteSpace: 'pre-line',
                            color: props.sender === "bot" ? colors.grey['800'] : colors.grey['300'],
                            bgcolor: props.sender === "bot" ?
                                colors.grey['300'] : colors.blue['600'],
                            borderRadius: 1,
                            paddingInline: 2,
                            paddingBlock: 1
                        }}
                    >
                        {props.sender === "bot" ? renderedText : props.text}
                    </Typography>
                }
            </Box>
        </Box>
    )
}

export default Message