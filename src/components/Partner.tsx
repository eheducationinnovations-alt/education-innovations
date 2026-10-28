import AddIcon from "@mui/icons-material/Add";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const Partner: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 644px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 644px - 834px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // >= 834px

  return (
    <Box
      sx={{
        alignSelf: "stretch",
        py: { xs: 3, sm: 7, md: 12 }, // 24px, 56px, 96px
        px: { xs: 2.5, sm: 5, md: 12.5 }, // 20px, 40px, 100px
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Container */}
      <Box
        sx={{
          alignSelf: "stretch",
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "flex-start",
            md: "space-between",
          },
          alignItems: { xs: "flex-start", sm: "center", md: "center" },
          flexDirection: { xs: "column", sm: "row", md: "row" },
          gap: { xs: 3, sm: 7.5, md: 0 },
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            width: { xs: "100%", sm: "393px", md: "724px" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, sm: 3, md: 5 },
          }}
        >
          {/* Title + Description */}
          <Box
            sx={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {/* Partner Chip */}
            <Box
              sx={{
                padding: "6px",
                position: "relative",
                bgcolor: "surface.color3",
                borderRadius: "80px",
                display: "inline-flex",
                alignSelf: "flex-start",
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
                  Partner
                </Typography>
              </Box>
            </Box>

            {/* Title + Description Container */}
            <Box
              sx={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              {/* Heading */}
              <Box
                sx={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
                  sx={{
                    color: "text.primary",
                    lineHeight: isDesktop ? "1.3125" : undefined, // 63px / 48px = 1.3125 for proper height
                  }}
                >
                  In partnership with Czech University of Life Sciences Prague
                </Typography>
              </Box>

              {/* Description */}
              <Box
                sx={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 2, sm: 1.5, md: 2 },
                }}
              >
                <Typography
                  variant={
                    isMobile || isTablet ? "body_regular" : "paragraph_regular"
                  }
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  We're proud to collaborate with Czech University of Life
                  Sciences Prague (Česká zemědělská univerzita v Praze) — a
                  leading institution shaping the future of education and
                  technology.
                </Typography>
                <Typography
                  variant={
                    isMobile || isTablet ? "body_regular" : "paragraph_regular"
                  }
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  Together, we explore new ways to make learning smarter, more
                  adaptive, and truly engaging for over 10K students.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Avatar Group + Student Count */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "17px",
            }}
          >
            {/* Avatar Group */}
            <Box
              sx={{
                width: { xs: "192px", sm: "160px", md: "192px" },
                height: { xs: "48px", sm: "40px", md: "48px" },
                position: "relative",
              }}
            >
              {/* Avatar 1 */}
              <Box
                sx={{
                  width: { xs: "48px", sm: "40px", md: "48px" },
                  height: { xs: "48px", sm: "40px", md: "48px" },
                  left: "0px",
                  position: "absolute",
                  bgcolor: "surface.color1",
                  borderRadius: { xs: "24px", sm: "20px", md: "24px" },
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="/student_1.png"
                  alt="Student 1"
                  sx={{
                    width: { xs: "44px", sm: "36.67px", md: "44px" },
                    height: { xs: "44px", sm: "36.67px", md: "44px" },
                    position: "absolute",
                    left: { xs: "2px", sm: "1.67px", md: "2px" },
                    top: { xs: "2px", sm: "1.67px", md: "2px" },
                    borderRadius: { xs: "44px", sm: "36.67px", md: "44px" },
                  }}
                />
              </Box>

              {/* Avatar 2 */}
              <Box
                sx={{
                  width: { xs: "48px", sm: "40px", md: "48px" },
                  height: { xs: "48px", sm: "40px", md: "48px" },
                  left: { xs: "35.52px", sm: "29.6px", md: "35.52px" },
                  position: "absolute",
                  bgcolor: "surface.color1",
                  borderRadius: { xs: "24px", sm: "20px", md: "24px" },
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="/student_2.png"
                  alt="Student 2"
                  sx={{
                    width: { xs: "44px", sm: "36.67px", md: "44px" },
                    height: { xs: "44px", sm: "36.67px", md: "44px" },
                    position: "absolute",
                    left: { xs: "2px", sm: "1.67px", md: "2px" },
                    top: { xs: "2px", sm: "1.67px", md: "2px" },
                    borderRadius: { xs: "44px", sm: "36.67px", md: "44px" },
                  }}
                />
              </Box>

              {/* Avatar 3 */}
              <Box
                sx={{
                  width: { xs: "48px", sm: "40px", md: "48px" },
                  height: { xs: "48px", sm: "40px", md: "48px" },
                  left: { xs: "72px", sm: "60px", md: "72px" },
                  position: "absolute",
                  bgcolor: "surface.color1",
                  borderRadius: { xs: "24px", sm: "20px", md: "24px" },
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="/student_3.png"
                  alt="Student 3"
                  sx={{
                    width: { xs: "44px", sm: "36.67px", md: "44px" },
                    height: { xs: "44px", sm: "36.67px", md: "44px" },
                    position: "absolute",
                    left: { xs: "2px", sm: "1.67px", md: "2px" },
                    top: { xs: "2px", sm: "1.67px", md: "2px" },
                    borderRadius: { xs: "44px", sm: "36.67px", md: "44px" },
                  }}
                />
              </Box>

              {/* Avatar 4 */}
              <Box
                sx={{
                  width: { xs: "48px", sm: "40px", md: "48px" },
                  height: { xs: "48px", sm: "40px", md: "48px" },
                  left: { xs: "108.47px", sm: "90.39px", md: "108.47px" },
                  position: "absolute",
                  bgcolor: "surface.color1",
                  borderRadius: { xs: "24px", sm: "20px", md: "24px" },
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="/student_4.png"
                  alt="Student 4"
                  sx={{
                    width: { xs: "44px", sm: "36.67px", md: "44px" },
                    height: { xs: "44px", sm: "36.67px", md: "44px" },
                    position: "absolute",
                    left: { xs: "2px", sm: "1.67px", md: "2px" },
                    top: { xs: "2px", sm: "1.67px", md: "2px" },
                    borderRadius: { xs: "44px", sm: "36.67px", md: "44px" },
                  }}
                />
              </Box>

              {/* Plus Icon */}
              <Box
                sx={{
                  width: { xs: "48px", sm: "40px", md: "48px" },
                  height: { xs: "48px", sm: "40px", md: "48px" },
                  left: { xs: "144px", sm: "120px", md: "144px" },
                  position: "absolute",
                  bgcolor: "divider",
                  borderRadius: { xs: "24px", sm: "20px", md: "24px" },
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "44px", sm: "36px", md: "44px" },
                    height: { xs: "44px", sm: "36px", md: "44px" },
                    left: { xs: "2px", sm: "2px", md: "2px" },
                    top: { xs: "2px", sm: "2px", md: "2px" },
                    position: "absolute",
                    bgcolor: "surface.color2",
                    borderRadius: { xs: "44px", sm: "36.67px", md: "44px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AddIcon
                    sx={{
                      color: "primary.main",
                      fontSize: { xs: "24px", sm: "20px", md: "24px" },
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Student Count */}
            <Typography
              variant={isMobile || isTablet ? "paragraph_semibold" : "h4"}
              sx={{
                color: "text.primary",
                textAlign: "center",
              }}
            >
              10K Students
            </Typography>
          </Box>
        </Box>

        {/* Right Image Section */}
        <Box
          sx={{
            width: { xs: "301px", sm: "301px", md: "432px" },
            height: { xs: "267px", sm: "267.56px", md: "384px" },
            borderRadius: { xs: "16.72px", sm: "16.72px", md: "24px" },
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="/partner_1.png"
            alt="University Partner"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Partner;
