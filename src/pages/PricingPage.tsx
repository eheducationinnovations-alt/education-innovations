import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Building2, GraduationCap, Sparkles } from "lucide-react";
import React from "react";
import { blueRadialGradient } from "../theme";

const PricingPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleFreeTrial = () => {
    window.location.href = "https://homeworkrooster.com/free-trial";
  };

  const cardBaseSx = {
    position: "relative" as const,
    borderRadius: "28px",
    backgroundColor: "surface.color1",
    border: "1px solid",
    borderColor: "surface.color2",
    px: { xs: 4, sm: 5 },
    py: { xs: 5, sm: 6 },
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: 2.5,
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, rgba(225, 235, 255, 0.45) 0%, rgba(255, 255, 255, 0) 55%)",
        pt: { xs: 15, sm: 18 },
        pb: { xs: 10, sm: 12 },
      }}
    >
      {/* Decorative background glows */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "6%",
          left: "-8%",
          width: { xs: 280, md: 460 },
          height: { xs: 280, md: 460 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27, 68, 254, 0.18) 0%, rgba(27, 68, 254, 0) 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: { xs: 300, md: 520 },
          height: { xs: 300, md: 520 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(82, 233, 179, 0.22) 0%, rgba(82, 233, 179, 0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 3, md: 4 },
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: "999px",
              border: "1px solid",
              borderColor: "primary.main",
              backgroundColor: "surface.color1",
              boxShadow: "0px 8px 24px rgba(27, 68, 254, 0.12)",
            }}
          >
            <Sparkles size={18} color={theme.palette.primary.main} />
            <Typography variant="body_semibold" color="primary.main">
              Plans that grow with your classroom
            </Typography>
          </Box>

          <Typography
            variant={isMobile ? "h4" : "h2"}
            sx={{
              maxWidth: "820px",
              color: "text.primary",
              fontWeight: 700,
            }}
          >
            Pricing that{" "}
            <Box
              component="span"
              sx={{
                background: blueRadialGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              pays for itself
            </Box>
          </Typography>

          <Typography
            variant="paragraph_regular"
            sx={{
              maxWidth: "760px",
              color: "text.secondary",
            }}
          >
            Give every student an AI-powered learning experience, without the
            enterprise price tag. Start today, scale as you grow, and only pay
            for what you need.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={handleFreeTrial}
            sx={{ mt: 1 }}
          >
            Get started free
          </Button>
        </Box>

        <Box
          sx={{
            mt: { xs: 7, md: 9 },
            mx: "auto",
            maxWidth: "1000px",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 5 },
            alignItems: "stretch",
          }}
        >
          {/* Institutions */}
          <Box
            sx={{
              ...cardBaseSx,
              boxShadow: "0px 24px 64px rgba(27, 68, 254, 0.08)",
              "&:hover": {
                transform: { md: "translateY(-8px)" },
                borderColor: "primary.main",
                boxShadow: "0px 32px 80px rgba(27, 68, 254, 0.16)",
              },
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: blueRadialGradient,
                boxShadow: "0px 12px 28px rgba(27, 68, 254, 0.3)",
              }}
            >
              <Building2 size={30} color="#FFFFFF" />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Typography
                variant="h4"
                sx={{ color: "text.primary", fontWeight: 700 }}
              >
                For Institutions
              </Typography>
              <Typography
                variant="body_regular"
                sx={{ color: "text.secondary" }}
              >
                Schools, districts & language centers
              </Typography>
            </Box>

            <Typography
              variant="body_semibold"
              sx={{
                color: "#0F9D6B",
                backgroundColor: "rgba(82, 233, 179, 0.2)",
                px: 2,
                py: 0.75,
                borderRadius: "999px",
              }}
            >
              ✨ Early adopter offer · free 2-month trial
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {[
                {
                  label: "First year",
                  note: "September–June",
                  price: "$1,500",
                },
                { label: "Second year", note: "", price: "$2,500" },
                {
                  label: "Years 3–4",
                  note: "per student",
                  price: "$1.5",
                },
              ].map((tier, index, tiers) => (
                <Box
                  key={tier.label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    py: 1.75,
                    borderBottom:
                      index < tiers.length - 1 ? "1px solid" : "none",
                    borderColor: "divider",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="body_semibold"
                      sx={{ color: "text.primary" }}
                    >
                      {tier.label}
                    </Typography>
                    {tier.note && (
                      <Typography
                        variant="body_regular"
                        sx={{ color: "text.secondary", fontSize: "14px" }}
                      >
                        {tier.note}
                      </Typography>
                    )}
                  </Box>
                  <Typography
                    variant={isMobile ? "h4" : "h3"}
                    sx={{ color: "primary.main", fontWeight: 700 }}
                  >
                    {tier.price}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Typography
              variant="body_regular"
              sx={{
                color: "text.secondary",
                backgroundColor: "surface.color3",
                borderRadius: "16px",
                px: { xs: 3, sm: 3.5 },
                py: { xs: 2, sm: 2.5 },
              }}
            >
              Pricing for institutions established upon agreement of
              cooperation, based on region, student count, and courses
              supported.
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={handleFreeTrial}
              sx={{ mt: "auto", width: "100%" }}
            >
              Register your institution
            </Button>
          </Box>

          {/* Individual teachers */}
          <Box
            sx={{
              ...cardBaseSx,
              boxShadow: "0px 24px 64px rgba(27, 68, 254, 0.08)",
              "&:hover": {
                transform: { md: "translateY(-8px)" },
                borderColor: "primary.main",
                boxShadow: "0px 32px 80px rgba(27, 68, 254, 0.16)",
              },
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(82, 233, 179, 0.2)",
              }}
            >
              <GraduationCap size={30} color="#0F9D6B" />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Typography
                variant="h4"
                sx={{ color: "text.primary", fontWeight: 700 }}
              >
                For Individual Teachers
              </Typography>
              <Typography
                variant="body_regular"
                sx={{ color: "text.secondary" }}
              >
                Solo teachers & private tutors
              </Typography>
            </Box>

            <Typography
              variant="body_semibold"
              sx={{
                color: "#0F9D6B",
                backgroundColor: "rgba(82, 233, 179, 0.2)",
                px: 2,
                py: 0.75,
                borderRadius: "999px",
              }}
            >
              ✨ Start with a free 1-month trial
            </Typography>

            <Typography
              variant="body_regular"
              sx={{ color: "text.secondary" }}
            >
              USD per month, based on your number of students.
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {[
                { label: "Up to 10 students", price: "$3.33" },
                { label: "Up to 20 students", price: "$5.55" },
                { label: "Up to 30 students", price: "$7.77" },
                { label: "31+ students", price: "$9.99" },
              ].map((tier, index, tiers) => (
                <Box
                  key={tier.label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    py: 1.75,
                    borderBottom:
                      index < tiers.length - 1 ? "1px solid" : "none",
                    borderColor: "divider",
                  }}
                >
                  <Typography
                    variant="body_semibold"
                    sx={{ color: "text.primary" }}
                  >
                    {tier.label}
                  </Typography>
                  <Typography
                    variant={isMobile ? "h4" : "h3"}
                    sx={{ color: "primary.main", fontWeight: 700 }}
                  >
                    {tier.price}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              size="large"
              onClick={handleFreeTrial}
              sx={{ mt: "auto", width: "100%" }}
            >
              Start teaching today
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            mx: "auto",
            maxWidth: "900px",
            borderRadius: "28px",
            overflow: "hidden",
            position: "relative",
            background: blueRadialGradient,
            boxShadow: "0px 32px 80px rgba(27, 68, 254, 0.3)",
            px: { xs: 4, sm: 6 },
            py: { xs: 6, sm: 7 },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{ fontWeight: 700, color: "#FFFFFF", maxWidth: "640px" }}
          >
            Ready to bring AI-powered learning to your students?
          </Typography>
          <Typography
            variant="paragraph_regular"
            sx={{ color: "rgba(255, 255, 255, 0.88)", maxWidth: "620px" }}
          >
            Honest, transparent pricing with no hidden fees. Join the
            institutions and teachers already transforming how their students
            learn.
          </Typography>
          <Button
            size="large"
            onClick={handleFreeTrial}
            sx={{
              backgroundColor: "#FFFFFF",
              color: "primary.main",
              "&:hover": {
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 12px 28px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            Get started free
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingPage;
