import { Box, Container, IconButton, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
                        
                        <IconButton onClick={() => window.open("https://wa.me/5548999015337")}>
                            <WhatsAppIcon />
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
