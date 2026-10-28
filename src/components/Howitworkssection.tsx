import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const HowItWorksSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const steps = [
    {
      id: 1,
      title: "Teacher selects topic + level",
      description: 
        "Teacher chooses the subject, CEFR level, time, topics, and exercise types. They can even upload text, pictures or documents to create from workbooks or material they used in class!",
      bgColor: "surface.color3",
      textColor: "text.primary",
      icon: "/icons/teacher.svg",
    },
    {
      id: 2,
      title: "Platform generates targeted homework",
      description:
        "AI instantly creates quality personalized assignments for Reading, Writing/Typing, Grammar, Vocabulary, and Listening.",
      bgColor: "secondary.main",
      textColor: "text.primary",
      icon: "/icons/book_pen.svg",
    },
    {
      id: 3,
      title:
        "Students complete → get feedback → teacher sees insights on gaps and progress",
      description:
        "Students receive feedback, while teachers can see learning gaps at individual and class levels, minus the grading time! Teachers have full editability on assignments, and full access to completed work to change grades if they fit.",
      bgColor: "text.primary",
      textColor: "surface.color1",
      icon: "/icons/student.svg",
    },
  ];

  return (
    <Box
      id="how-it-works-section"
      sx={{
        alignSelf: "stretch",
        px: { xs: 2.5, sm: 5, md: 12.5 }, // 20px, 40px, 100px
        py: { xs: 3, sm: 7, md: 12 }, // 24px, 56px, 96px
        bgcolor: "surface.color1",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 2.5, sm: 4, md: 5 }, // 20px, 32px, 40px
      }}
    >
      {/* Title + Description */}
      <Box
        sx={{
          alignSelf: "stretch",
          height: { xs: "180px", sm: "auto", md: "auto" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1, // 8px
        }}
      >
        {/* Journey Chip */}
        <Box
          sx={{
            padding: "6px",
            position: "relative",
            bgcolor: "surface.color3",
            borderRadius: "80px",
            display: "inline-flex",
            border: "1px solid",
            borderColor: "surface.color1",
          }}
        >
          <Box
            sx={{
              px: 2.5,
              py: 1,
              position: "relative",
              bgcolor: "surface.color1",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: "1px solid",
              borderColor: "primary.main",
            }}
          >
            <Typography
              variant="body_regular"
              sx={{
                color: "text.primary",
                textAlign: "center",
              }}
            >
              Journey
            </Typography>
          </Box>
        </Box>

        {/* Title + Description Container */}
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5, // 12px
          }}
        >
          {/* Heading */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
              sx={{
                color: "text.primary",
                textAlign: "center",
                alignSelf: "stretch",
              }}
            >
              How it works
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            variant={
              isMobile || isTablet ? "body_regular" : "paragraph_regular"
            }
            sx={{
              color: "text.secondary",
              textAlign: "center",
              alignSelf: "stretch",
            }}
          >
            Create to your specifications and classroom needs, skip the grading,
            and get easy to understand feedback on your students gaps in
            learning.
          </Typography>
        </Box>
      </Box>

      {/* Content - Steps */}
      <Box
        sx={{
          width: { xs: "362px", sm: "auto", md: "auto" },
          alignSelf: { xs: "center", sm: "stretch", md: "stretch" },
          pt: { xs: 4, sm: 4, md: 8 }, // 32px, 32px, 64px
          pb: { xs: 4, sm: 4, md: 8 }, // 32px, 32px, 64px
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: {
            xs: "surface.color1",
            sm: "transparent",
            md: "transparent",
          },
          overflow: "hidden",
        }}
      >
        {/* Timeline Lines */}
        <Box
          sx={{
            width: { xs: "362px", sm: "754px", md: "1240px" },
            position: "absolute",
            top: 0,
            bottom: 0,
            left: { xs: "0", sm: "0", md: "0" },
            right: { xs: "0", sm: "0", md: "0" },
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* Timeline columns for mobile */}
          {isMobile ? (
            // Mobile: 4 columns with lines at 44px
            [1, 2, 3, 4].map((_, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 0",
                  height: "100%",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                {/* Timeline line */}
                <Box
                  sx={{
                    width: "1px",
                    height: "100%",
                    left: "44px",
                    top: "0px",
                    position: "absolute",
                    bgcolor: "divider",
                  }}
                />
              </Box>
            ))
          ) : (
            // Tablet/Desktop: 6 columns with spacers
            <>
              {/* Left spacer */}
              <Box sx={{ width: "24px" }} />

              {/* Timeline columns */}
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: "1 1 0",
                    height: "100%",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Timeline line */}
                  <Box
                    sx={{
                      width: "1px",
                      height: "100%",
                      left: { xs: "93px", sm: "52px", md: "93px" },
                      top: 0,
                      position: "absolute",
                      bgcolor: "divider",
                    }}
                  />

                  {/* Step numbers for middle columns */}
                  {index === 2 && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "surface.color1",
                        fontSize: "14.30px",
                        fontWeight: 400,
                        lineHeight: "24px",
                      }}
                    >
                      03
                    </Box>
                  )}
                  {index === 4 && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "surface.color1",
                        fontSize: "14.30px",
                        fontWeight: 400,
                        lineHeight: "24px",
                      }}
                    >
                      04
                    </Box>
                  )}
                  {index === 5 && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "surface.color1",
                        fontSize: "14.30px",
                        fontWeight: 400,
                        lineHeight: "24px",
                      }}
                    >
                      05
                    </Box>
                  )}
                </Box>
              ))}

              {/* Right spacer */}
              <Box sx={{ width: "24px" }} />
            </>
          )}
        </Box>

        {/* Steps Cards */}
        <Box
          sx={{
            width: { xs: "362px", sm: "auto", md: "auto" },
            alignSelf: { xs: "center", sm: "stretch", md: "stretch" },
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, sm: 2, md: 2 }, // 16px
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={step.id}
              sx={{
                width: {
                  xs: "100%",
                  sm: index === 2 ? "450px" : "auto",
                  md: "615px",
                },
                maxWidth: {
                  xs: "100%",
                  sm: index === 2 ? "600px" : "100%",
                  md: "615px",
                },
                ml: {
                  xs: 0,
                  sm: index === 0 ? "0px" : index === 1 ? "146px" : "264px",
                  md: index === 0 ? "11%" : index === 1 ? "32%" : "50%",
                },
                minHeight: { xs: "148px", sm: "154px", md: "154px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  flex: "1 1 auto",
                  p: { xs: 2.5, sm: 3, md: 3 }, // 20px, 24px, 24px
                  bgcolor: step.bgColor,
                  overflow: "hidden",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: { xs: 2, sm: 2, md: 2 }, // 24px, 16px, 16px
                }}
              >
                {/* Header with icon and title */}
                <Box
                  sx={{
                    alignSelf: "stretch",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: 1.5, sm: 2, md: 2 }, // 12px, 16px, 16px
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      bgcolor: "surface.color1",
                      borderRadius: "9999px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1.25, // 10px
                    }}
                  >
                    <img
                      src={step.icon}
                      alt={`Step ${step.id} icon`}
                      style={{
                        width: 24,
                        height: 24,
                        filter:
                          step.id === 1 || step.id === 3
                            ? "brightness(0) saturate(100%) invert(27%) sepia(96%) saturate(1456%) hue-rotate(213deg) brightness(98%) contrast(101%)" // #1B44FE
                            : "brightness(0) saturate(100%) invert(8%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)", // #1E1E1F
                      }}
                    />
                  </Box>

                  {/* Title */}
                  <Box
                    sx={{
                      flex: "1 1 0",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant={isMobile ? "h5" : isTablet ? "h6" : "h4"}
                      sx={{
                        alignSelf: "stretch",
                        color: step.textColor,
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        fontSize: { xs: "18px", sm: "18px", md: "24px" },
                        fontWeight: { xs: 600, sm: 600, md: 700 },
                        lineHeight: { xs: "28px", sm: "28px", md: "32px" },
                      }}
                    >
                      {step.title}
                    </Typography>
                  </Box>
                </Box>

                {/* Description */}
                <Box
                  sx={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant={
                      isMobile || isTablet
                        ? "body_regular"
                        : "paragraph_regular"
                    }
                    sx={{
                      alignSelf: "stretch",
                      color: step.textColor,
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      fontSize: { xs: "16px", sm: "16px", md: "18px" },
                      fontWeight: 400,
                      lineHeight: { xs: "24px", sm: "24px", md: "28px" },
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
