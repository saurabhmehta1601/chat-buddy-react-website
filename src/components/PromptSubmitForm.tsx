import React from 'react'
import { Box, TextField, InputAdornment, colors } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

interface IProps {
    prompt: string,
    setPrompt: React.Dispatch<React.SetStateAction<string>>
    onSubmit: () => void
}

const PromptSubmitForm = (props: IProps) => {
    return (
        <Box component="form"
            onSubmit={(e) => {
                e.preventDefault()
                props.onSubmit()
            }}
            sx={{ width: "min(90vw, 960px)", m: "1em auto", backgroundColor: "#fff", px: 2, py: 1, borderRadius: 1 }}>
            <TextField
                value={props.prompt}
                onChange={(e) => props.setPrompt(e.target.value)}
                label="Enter a prompt here"
                variant="standard"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" onClick={props.onSubmit} sx={{ ":hover": { cursor: "pointer" } }}>
                            <SendIcon sx={{ color: colors.blue['600'] }} />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    )
}

export default PromptSubmitForm