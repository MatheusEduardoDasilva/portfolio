import { Box, Container, IconButton, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {

    return (
        <>
            <Box pt={2} pb={2}>
                <Container maxWidth="sm">
                    <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                        <IconButton onClick={() => window.open("https://github.com/MatheusEduardoDasilva")}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/matheus-eduardo-da-silva-516453198")}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton href="matheus_edusilva@hotmail.com" target="_blank">
                            <EmailIcon />
                        </IconButton>
                    </Box>
                    <Typography textAlign="center">
                        © 2025 Matheus Eduardo da Silva - All rights reserved
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer
