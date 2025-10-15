import { Box, Container, Typography, styled } from "@mui/material";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import Portfolio from "../../../../assets/images/Portfolio.png";
import Audiobook from "../../../../assets/images/Audiobook.png";
const ProjectsSection: React.FC = () => {
  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const projects: ProjectCardProps[] = [
    {
      title: "Web Developer Portfolio",
      subtitle: "2025",
      srcImg: Portfolio,
      description: "A personal portfolio showcasing my projects and skills in web development",
      technologies: "Built with TypeScript, React, and Material UI.",
      websiteURL: "https://portfolio-silk-seven-61.vercel.app",
      codeURL: "https://github.com/MatheusEduardoDasilva/portfolio",
    },
    {
      title: "Aduio-book",
      subtitle: "2025",
      srcImg: Audiobook,
      description: "An audiobook of Dom Casmurro, the classic novel by Machado de Assis.",
      technologies: "Built with HTML, CSS, and JavaScript",
      websiteURL:"https://audio-book-sigma.vercel.app" ,
      codeURL: "https://github.com/MatheusEduardoDasilva/Audio-book",
    },
  
  ];

  return (
    <StyledExperience>
      <Container maxWidth="lg">
        <Box id="projects" pt={5} pb={3}>
          <Typography variant="h2" textAlign="center" color="primary.contrastText">
            Projects
          </Typography>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          gap={5}
          pb={3}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              flex={{ xs: "1 1 100%", md: "1 1 48%" }} 
            >
              <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  srcImg={project.srcImg}
                  description={project.description}
                  technologies={project.technologies}
                  websiteURL={project.websiteURL}
                  codeURL={project.codeURL}
                />
              </AnimationComponent>
            </Box>
          ))}
        </Box>
      </Container>
    </StyledExperience>
  );
};

export default ProjectsSection;
