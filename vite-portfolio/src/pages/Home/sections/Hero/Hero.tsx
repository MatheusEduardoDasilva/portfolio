import { Box, Container, Typography, styled } from "@mui/material";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import Typewriter from "../../../../components/Typewriter/Typewriter";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import Open from "../../../../assets/pdfs/Open.pdf";

const StyledImg = styled("img")(({ theme }) => ({
  width: "80%",
  maxWidth: 300,
  border: `2px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "50%",
  display: "block",
  margin: "0 auto",
  position: "relative",
}));

const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      padding: "20px",
      paddingTop: "100px",
      paddingBottom: "40px",
  },

    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      paddingTop: "100px",
      height: "100vh",
  },
}));

const HeroSection: React.FC = () => {
  const handleDownload = () => {
        console.log("download")
        const link = document.createElement('a');
        link.href = Open
        link.download = 'Curriculo_Matheus.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  };

  const handleEmail = () => {
    const emailAddress = "matheus_edusilva@hotmail.com";
    const subject = "Subject";
    const body = "Hello!";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "5fr 7fr" },
            gap: 4,
            alignItems: "center",
          }}
        >

          <Box sx={{ position: "relative", textAlign: "center" }}>
            <Box
              sx={{
                width: "100%",
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 0,
              }}
            >
              <AnimatedBackground />
            </Box>
            <Box sx={{ position: "relative", zIndex: 1, pb: 3 }}>
              <StyledImg src={Avatar} />
            </Box>
          </Box>

         
          <Box>
            <Typography
              color="primary.contrastText"
              variant="h1"
              pb={2}
              textAlign={{ xs: "center"}}
              sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }}
            >
                Matheus Eduardo
            </Typography>

            <Typewriter
              text="I'm a Software Engineer"
              delay={120}
              variant="h2"
              color="primary.contrastText"
            />

            <Box mt={3} sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
              <StyledButton onClick={handleDownload}>
                <DownloadIcon />
                <Typography>Download CV</Typography>
              </StyledButton>
              <StyledButton onClick={handleEmail}>
                <EmailIcon />
                <Typography>Contact me</Typography>
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </StyledHero>
  );
};

export default HeroSection;
