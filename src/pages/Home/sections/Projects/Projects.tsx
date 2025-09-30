import { Box, Container, Typography, styled } from "@mui/material";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {
  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const projects: ProjectCardProps[] = [
    {
      title: "Coming Soon",
      subtitle: "2025",
      srcImg: "/src/assets/images/Breve.png",
      description: "Coming Soon",
      technologies: "Coming Soon",
      websiteURL: "Coming Soon",
      codeURL: "Coming Soon",
    },
    {
      title: "Coming Soon",
      subtitle: "2025",
      srcImg: "/src/assets/images/Breve.png",
      description: "Coming Soon",
      technologies: "Coming Soon",
      websiteURL: "Coming Soon",
      codeURL: "Coming Soon",
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
              flex={{ xs: "1 1 100%", md: "1 1 48%" }} // responsivo: 100% mobile, 48% desktop
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
