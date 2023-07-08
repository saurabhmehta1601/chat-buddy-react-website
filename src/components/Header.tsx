import { ComponentPropsWithoutRef } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'; 
import Box  from '@mui/material/Box';
import Link  from '@mui/material/Link';
import Typography  from '@mui/material/Typography';
import IconButton  from '@mui/material/IconButton';
import colors  from '@mui/material/colors';

const Header = (props: ComponentPropsWithoutRef<"header">) => {
    return (
        <Box className="p-4 flex justify-between " {...props}>
            <Typography variant="h5">AI BUDDY</Typography>
            <Link target="_blank">
                <IconButton href="https://github.com/saurabhmehta1601/OPENAI-GPT3-CHAT-BOT">
                    <GitHubIcon fontSize={'large'}/>
                </IconButton>
            </Link>
        </Box>
    )
}

export default Header