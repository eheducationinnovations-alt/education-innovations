import {
    Box,
    Divider,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { EXTERNAL_URLS } from "../config/constants";

// Logo component for footer
const FooterLogo: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: "6.83px", sm: "2.93px", md: "6.83px" },
      }}
    >
      <Box
        component="img"
        src="/logo.svg"
        alt="Logo"
        sx={{
          height: "32px",
          width: "auto",
        }}
      />
      <Box
        sx={{
          width: "62.44px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "surface.color1",
            fontSize: "11.71px",
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          Education
        </Typography>
        <Typography
          sx={{
            color: "surface.color1",
            fontSize: "11.71px",
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          Innovations
        </Typography>
      </Box>
    </Box>
  );
};

// Contact Item component
const ContactItem: React.FC<{
  iconSrc: string;
  text: string;
  isMobile?: boolean;
  isTablet?: boolean;
}> = ({ iconSrc, text, isMobile, isTablet }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Box
        component="img"
        src={iconSrc}
        alt="Contact icon"
        sx={{
          width: "24px",
          height: "24px",
          filter: "brightness(0) invert(1)",
        }}
      />
      <Typography
        variant={isMobile || isTablet ? "body_regular" : "paragraph_regular"}
        sx={{
          color: "surface.color1",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

const Footer: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 644px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 644px - 834px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // >= 834px

  const handleContactUs = () => {
    navigate("/contact-us");
  };

  const handlePrivacyTerms = () => {
    window.open(EXTERNAL_URLS.TERMS_CONDITIONS, "_blank");
  };

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2.5, sm: 5, md: 12.5 },
        bgcolor: "text.primary",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10,
      }}
    >
      <Box
        sx={{
          flex: "1 1 0",
          pt: { xs: 3, sm: 5, md: 8 },
          pb: { xs: 3, sm: 5, md: 2.5 },
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {/* Top Section */}
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {/* Headline and Contact Info */}
          <Box
            sx={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: isMobile ? 3 : 0,
            }}
          >
            {/* Left Column: Logo + Headline (Tablet/Mobile) or just Headline (Desktop) */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {/* Logo - Only show on Tablet and Mobile */}
              {!isDesktop && <FooterLogo />}

              {/* Headline */}
              <Box sx={{ width: "52%" }}>
                <Typography
                  variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
                  component="span"
                  sx={{
                    color: "surface.color1",
                  }}
                >
                  Built by{" "}
                </Typography>
                <Typography
                  variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
                  component="span"
                  sx={{
                    color: "primary.main",
                  }}
                >
                  educators
                </Typography>
                <Typography
                  variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
                  component="span"
                  sx={{
                    color: "surface.color1",
                  }}
                >
                  {" "}
                  for{" "}
                </Typography>
                <Typography
                  variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
                  component="span"
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  better
                </Typography>
                <Typography
                  variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
                  component="span"
                  sx={{
                    color: "surface.color1",
                  }}
                >
                  {" "}
                  education.
                </Typography>
              </Box>
            </Box>

            {/* Contact Information */}
            <Box
              sx={{
                pt: { xs: 0, sm: 0, md: 2.5 },
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 2, md: 3 },
              }}
            >
              <ContactItem
                iconSrc="/icons/sms.svg"
                text="ethangiles@educationinnovations.net"
                isMobile={isMobile}
                isTablet={isTablet}
              />
              <ContactItem
                iconSrc="/icons/call.svg"
                text="+420 228 880 699"
                isMobile={isMobile}
                isTablet={isTablet}
              />
              <ContactItem
                iconSrc="/icons/location.svg"
                text="Prague, Czech Republic"
                isMobile={isMobile}
                isTablet={isTablet}
              />
            </Box>
          </Box>

          {/* Divider */}
          <Divider
            sx={{
              alignSelf: "stretch",
              borderColor: "divider.main",
            }}
          />

          {/* Bottom Section */}
          {isDesktop && (
            <Box
              sx={{
                alignSelf: "stretch",
                height: "54px",
                pb: 3,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Copyright */}
              <Box
                sx={{
                  width: "345px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography
                  variant="paragraph_regular"
                  sx={{
                    color: "surface.color2",
                  }}
                >
                  © 2025 Company. All Rights Reserved
                </Typography>
              </Box>

              {/* Footer Logo */}
              <FooterLogo />

              {/* Footer Links */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 3,
                }}
              >
                <Typography
                  variant="paragraph_regular"
                  onClick={handleContactUs}
                  sx={{
                    color: "surface.color1",
                    textAlign: "center",
                    cursor: "pointer",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  Contact us
                </Typography>
                <Typography
                  variant="paragraph_regular"
                  onClick={handlePrivacyTerms}
                  sx={{
                    color: "surface.color1",
                    textAlign: "center",
                    cursor: "pointer",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  Privacy
                </Typography>
                <Typography
                  variant="paragraph_regular"
                  onClick={handlePrivacyTerms}
                  sx={{
                    color: "surface.color1",
                    textAlign: "center",
                    cursor: "pointer",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  Terms
                </Typography>
              </Box>
            </Box>
          )}

          {/* Tablet Bottom Section */}
          {isTablet && (
            <Box
              sx={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  alignSelf: "stretch",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* Copyright */}
                <Typography
                  variant="body_regular"
                  sx={{
                    color: "surface.color2",
                  }}
                >
                  © 2025 Company. All Rights Reserved
                </Typography>

                {/* Footer Links */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                  }}
                >
                  <Typography
                    variant="body_regular"
                    onClick={handleContactUs}
                    sx={{
                      color: "surface.color1",
                      textAlign: "center",
                      cursor: "pointer",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    Contact us
                  </Typography>
                  <Typography
                    variant="body_regular"
                    onClick={handlePrivacyTerms}
                    sx={{
                      color: "surface.color1",
                      textAlign: "center",
                      cursor: "pointer",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    Privacy
                  </Typography>
                  <Typography
                    variant="body_regular"
                    onClick={handlePrivacyTerms}
                    sx={{
                      color: "surface.color1",
                      textAlign: "center",
                      cursor: "pointer",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    Terms
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}

          {/* Mobile Bottom Section */}
          {isMobile && (
            <Box
              sx={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2.5,
              }}
            >
              <Box
                sx={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {/* Footer Links */}
                <Box
                  sx={{
                    alignSelf: "stretch",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant="body_regular"
                    onClick={handleContactUs}
                    sx={{
                      color: "surface.color1",
                      textAlign: "center",
                      cursor: "pointer",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    Contact us
                  </Typography>
                  <Typography
                    variant="body_regular"
                    onClick={handlePrivacyTerms}
                    sx={{
                      color: "surface.color1",
                      textAlign: "center",
                      cursor: "pointer",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    Privacy
                  </Typography>
                  <Typography
                    variant="body_regular"
                    onClick={handlePrivacyTerms}
                    sx={{
                      color: "surface.color1",
                      textAlign: "center",
                      cursor: "pointer",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    Terms
                  </Typography>
                </Box>

                {/* Copyright */}
                <Box
                  sx={{
                    alignSelf: "stretch",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body_regular"
                    sx={{
                      color: "surface.color2",
                      textAlign: "center",
                    }}
                  >
                    © 2025 Company. All Rights Reserved
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
