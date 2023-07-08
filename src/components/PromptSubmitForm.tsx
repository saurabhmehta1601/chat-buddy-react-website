import React from 'react'
import { Box, TextField, InputAdornment, colors } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

interface IProps {
    prompt: string,
    setPrompt: React.Dispatch<React.SetStateAction<string>>
    onSubmit: (e: React.FormEvent) => void
}

const PromptSubmitForm = (props: IProps) => {
    return (
        <Box component="form"
            sx={{ width: "min(90vw, 960px)", m: "1em auto", backgroundColor: "#fff", px: 2, py: 1, borderRadius: 1 }}>
            <TextField
                value={props.prompt}
                onChange={(e) => props.setPrompt(e.target.value)}
                label="Enter a prompt here"
                variant="standard"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" onClick={props.onSubmit}>
                            <SendIcon sx={{ color: colors.blue['600'] }} />
                        </InputAdornment>
                    ),
                }}
            />
            {/* <input
                type="text"
                name="prompt"
                value={props.prompt}
                onChange={(e) => props.setPrompt(e.target.value)}
                className="w-full outline-none p-2 bg-transparent "
                autoComplete='off'
            />
            <button
                className="p-2 "
                type='submit'
                name="submit"
            >
                <img src="/assets/icon-send-message.png" width={32} height={32} />
            </button> */}
        </Box>
    )
}

export default PromptSubmitForm