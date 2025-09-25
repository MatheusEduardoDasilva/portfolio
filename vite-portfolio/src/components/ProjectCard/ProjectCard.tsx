import {  Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";
import { Box } from "@mui/material";


export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string
    websiteURL: string;
    codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "80vw",
        padding: "10px 0",
        [theme.breakpoints.up('md')]: {
            height: "45vh",
        },
    }));

    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: `0.5px solid  ${theme.palette.primary.contrastText}`,
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        padding: "20px",
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    }));

    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography >
                {subtitle}
            </Typography>
            <StyledImg src={srcImg} />
            <Typography>
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
            <Box display="flex" pt={2} gap={1}>
                <Box flex={1}>
                    <StyledButton onClick={() => window.open(websiteURL)}>
                    View Project
                    </StyledButton>
                </Box>
                <Box flex={1}>
                    <StyledButton onClick={() => window.open(codeURL)}>
                    View Code
                    </StyledButton>
                </Box>
            </Box>
        </StyledCard>
    )
}

export default ProjectCard
