import { ComponentPropsWithoutRef } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { colors, IconButton, Typography, Link, Box } from '@mui/material';

const Header = (props: ComponentPropsWithoutRef<"header">) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2, py: 1 }} {...props}>
            <Typography variant="h5">AI BUDDY</Typography>
            <Link target="_blank" href="https://github.com/saurabhmehta1601/OPENAI-GPT3-CHAT-BOT">
                <IconButton sx={{ color: colors.grey['100'] }}>
                    <GitHubIcon fontSize={'large'} />
                </IconButton>
            </Link>
        </Box>
    )
}

export default Header