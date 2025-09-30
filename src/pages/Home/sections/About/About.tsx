import { Box, Card, Container, Typography, styled } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const About: React.FC = () => {

  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px",
    textAlign: "center",
    marginBottom: "10px",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  }));

  const skillsSet = [
     "Typescript", "React", "HTML", "CSS", "Material UI"
  ];

  return (
    <Container maxWidth="lg">

      <Box id="about" pt={5} mb={3}>
        <Typography variant="h2" textAlign="center">About me</Typography>
      </Box>

      
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} pb={3}>
        <AnimationComponent moveDirection="right">
          <StyledCard variant="outlined" sx={{ width: { xs: "90%", md: "200px" } }}>
            <WorkspacePremiumIcon />
            <Typography fontWeight={600}>Experience</Typography>
            <Typography>1 Month </Typography>
            <Typography>Full-Steck Development</Typography>
          </StyledCard>
        </AnimationComponent>

        <AnimationComponent moveDirection="left">
          <StyledCard variant="outlined" sx={{ width: { xs: "90%", md: "200px" } }}>
            <SchoolIcon />
            <Typography fontWeight={600}>Education</Typography>
            <Typography>Graduate Degree</Typography>
            <Typography>Digital Games</Typography>
          </StyledCard>
        </AnimationComponent>
      </Box>

      <Box pb={1}>
        <Typography textAlign="center">My name is Matheus Eduardo da Silva, and I am based in Biguaçu, Santa Catarina, Brazil. 
            I am an IT professional with extensive experience in technical support, including the maintenance of computers, printers, 
            and mobile devices, as well as system configuration and network management.
            Throughout my career, I have worked as an IT Assistant in multiple companies, including Goedert Group, Gatte72, GRUPO REPECON, 
            Moto Store Yamaha, and Dental Speed, where I utilized tools and systems such as Microsoft Office, OneDrive, SharePoint, Dealernet, Microwork, and IBS.
            Currently, I am focusing on software development and TypeScript to enhance my programming skills and pivot my career toward roles in IT development, game 
            design, and quality assurance testing.
        </Typography>
      </Box>

      <hr />
      <Box id="skills" pt={1} mb={3}>
        <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
      </Box>

      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} mb={5}>
        {skillsSet.map((skill, index) => (
          <StyledCard
            key={index}
            variant="outlined"
            sx={{ width: { xs: "40%", sm: "30%", md: "120px" }, textAlign: "center" }}
          >
            {skill}
          </StyledCard>
        ))}
      </Box>
    </Container>
  );
};

export default About;
