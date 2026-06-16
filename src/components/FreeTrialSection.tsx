import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const FreeTrialSection: React.FC = () => {
  const handleStartFreeTrial = () => {
    window.location.href = "https://homeworkrooster.com/free-trial";
  };

  return (
    <Box
      sx={{
        alignSelf: "stretch",
        pt: { xs: "48px", md: "96px" },
        pb: { xs: "48px", md: "96px" },
        background:
          "linear-gradient(179deg, #D9E7FE 37%, rgba(255, 255, 255, 0) 100%)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <Typography
            sx={{
              color: "#1E1E1F",
              fontSize: { xs: "32px", sm: "40px", md: "48px" },
              fontFamily: "Hanken Grotesk",
              fontWeight: 700,
              lineHeight: { xs: "40px", sm: "48px", md: "48px" },
              textAlign: "center",
            }}
          >
            Start Your Free Trial
          </Typography>
          <Typography
            sx={{
              color: "#6D6D6D",
              fontSize: "18px",
              fontFamily: "DM Sans",
              fontWeight: 400,
              lineHeight: "28px",
              textAlign: "center",
              maxWidth: "500px",
            }}
          >
            Create your account in minutes and start bringing AI-powered
            learning to your students today.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleStartFreeTrial}
            sx={{ mt: "8px" }}
          >
            Start Your Free Trial
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FreeTrialSection;
