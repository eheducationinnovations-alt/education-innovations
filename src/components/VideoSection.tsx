import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Layers, Play } from "lucide-react";
import React, { useEffect, useState } from "react";
import { blueRadialGradient } from "../theme";

// How long each video stays featured before auto-advancing (ms)
const ROTATE_MS = 9000;

const VIDEOS = {
  overview: {
    id: "21MAHYOtgkc",
    label: "Quick Overview",
    title: "Homework Rooster Explainer",
    description:
      "Our explainer video shows how we're rethinking homework for the modern classroom.",
  },
  deep: {
    id: "XsGjGwfT1GQ",
    label: "Deep Dive",
    title: "Homework Rooster Deep Dive",
    description:
      "Go deeper with a full walkthrough of how Homeworkrooster works end to end.",
  },
} as const;

type VideoKey = keyof typeof VIDEOS;

const VIDEO_KEYS = Object.keys(VIDEOS) as VideoKey[];

const VideoSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [activeVideo, setActiveVideo] = useState<VideoKey>("overview");
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  const current = VIDEOS[activeVideo];

  // Auto-advance the featured video until the user takes control or starts playback.
  useEffect(() => {
    if (!autoRotate || isPlaying) return;

    const timer = setTimeout(() => {
      setActiveVideo((prev) => {
        const next = (VIDEO_KEYS.indexOf(prev) + 1) % VIDEO_KEYS.length;
        return VIDEO_KEYS[next];
      });
    }, ROTATE_MS);

    return () => clearTimeout(timer);
  }, [activeVideo, autoRotate, isPlaying]);

  const handlePlayVideo = () => {
    setAutoRotate(false);
    setIsPlaying(true);
  };

  const handleSelectVideo = (key: VideoKey) => {
    setAutoRotate(false);
    if (key === activeVideo) return;
    setActiveVideo(key);
    setIsPlaying(false);
  };

  return (
    <Box
      id="video-section"
      sx={{
        alignSelf: "stretch",
        px: { xs: 2.5, sm: 5, md: 12.5 }, // 20px, 40px, 100px
        py: { xs: 3, sm: 7, md: 12 }, // 24px, 56px, 96px
        position: "relative",
        background:
          "linear-gradient(179deg, #D9E7FE 37%, rgba(255, 255, 255, 0) 100%)",
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1, // 8px
        }}
      >
        {/* Demo Chip */}
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
              Demo
            </Typography>
          </Box>
        </Box>

        {/* Heading and Description */}
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "838px" },
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
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
              sx={{
                alignSelf: "stretch",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                color: "text.primary",
                fontSize: { xs: "24px", sm: "32px", md: "48px" },
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              See the Innovation in Action.
            </Typography>
          </Box>

          {/* Description */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                alignSelf: "stretch",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                color: "text.secondary",
                fontSize: { xs: "16px", sm: "16px", md: "18px" },
                fontWeight: 400,
                lineHeight: { xs: "24px", sm: "24px", md: "28px" },
                textAlign: "center",
              }}
            >
              {current.description}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Video Tab Switcher */}
      <Box
        sx={{
          padding: "6px",
          bgcolor: "surface.color1",
          borderRadius: "80px",
          display: "inline-flex",
          gap: "6px",
          border: "1px solid",
          borderColor: "surface.color2",
          boxShadow: "0px 8px 24px rgba(27, 68, 254, 0.12)",
        }}
      >
        {(Object.keys(VIDEOS) as VideoKey[]).map((key) => {
          const selected = key === activeVideo;
          const Icon = key === "overview" ? Play : Layers;
          return (
            <Box
              key={key}
              onClick={() => handleSelectVideo(key)}
              sx={{
                px: { xs: 2.5, sm: 3.5 },
                py: { xs: 1, sm: 1.25 },
                borderRadius: "999px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 1,
                background: selected ? blueRadialGradient : "transparent",
                boxShadow: selected
                  ? "0px 8px 20px rgba(27, 68, 254, 0.3)"
                  : "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: selected
                    ? blueRadialGradient
                    : "rgba(27, 68, 254, 0.06)",
                },
              }}
            >
              <Icon
                size={isMobile ? 16 : 18}
                color={selected ? "#FFFFFF" : theme.palette.primary.main}
                fill={
                  selected && key === "overview"
                    ? "#FFFFFF"
                    : key === "overview"
                    ? theme.palette.primary.main
                    : "none"
                }
              />
              <Typography
                variant="body_semibold"
                sx={{
                  color: selected ? "#FFFFFF" : "text.primary",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {VIDEOS[key].label}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* Auto-rotate progress indicator */}
      <Box
        sx={{
          width: { xs: "140px", sm: "180px" },
          height: "4px",
          mt: { xs: -1, sm: -2 },
          borderRadius: "999px",
          bgcolor: "surface.color3",
          overflow: "hidden",
          visibility: autoRotate && !isPlaying ? "visible" : "hidden",
        }}
      >
        <Box
          key={activeVideo}
          sx={{
            height: "100%",
            borderRadius: "999px",
            background: blueRadialGradient,
            animation: `videoRotateFill ${ROTATE_MS}ms linear forwards`,
            "@keyframes videoRotateFill": {
              from: { width: "0%" },
              to: { width: "100%" },
            },
          }}
        />
      </Box>

      {/* Video Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1100px",
          height: { xs: "204px", sm: "424px", md: "666px" },
          position: "relative",
          boxShadow: "0px 7.73px 42.97px rgba(0, 0, 0, 0.05)",
          overflow: "hidden",
          borderRadius: { xs: "20px", sm: "24px", md: "24px" },
          outline: "10px solid",
          outlineColor: "surface.color1",
          outlineOffset: "-10px",
          margin: "0 auto",
        }}
      >
        <Box
          component="iframe"
          key={`${activeVideo}-${isPlaying ? "playing" : "paused"}`}
          src={`https://www.youtube.com/embed/${current.id}?autoplay=${
            isPlaying ? 1 : 0
          }&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&loop=1&playlist=${
            current.id
          }`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={current.title}
          sx={{
            width: "100%",
            height: "100%",
            border: 0,
            borderRadius: "inherit",
          }}
        />
        {!isPlaying && (
          <Box
            onClick={handlePlayVideo}
            sx={{
              width: { xs: "40px", sm: "68px", md: "68px" },
              height: { xs: "40px", sm: "68px", md: "68px" },
              left: { xs: "20px", sm: "36px", md: "36px" },
              top: { xs: "20px", sm: "36px", md: "36px" },
              position: "absolute",
              bgcolor: "surface.color1",
              boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
              borderRadius: "999px",
              outline: "1px solid",
              outlineColor: "surface.color2",
              outlineOffset: "-1px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <Box
              sx={{
                width: { xs: "32.16px", sm: "54.68px", md: "54.68px" },
                height: { xs: "32.16px", sm: "54.68px", md: "54.68px" },
                bgcolor: "surface.color1",
                boxShadow: {
                  xs: "0px 0px 0px 0.48px #E6EAF4",
                  sm: "0px 0px 0px 0.81px #E6EAF4",
                  md: "0px 0px 0px 0.81px #E6EAF4",
                },
                overflow: "hidden",
                borderRadius: { xs: "556.47px", sm: "946px", md: "946px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: "13.37px", sm: "22.73px", md: "22.73px" },
                  height: { xs: "13.37px", sm: "22.73px", md: "22.73px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#1E1E1F",
                }}
              >
                <Play size={isMobile ? 13.37 : 22.73} fill="#1E1E1F" />
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      {/* Overlay */}
      <Box
        sx={{
          width: { xs: "402px", sm: "834px", md: "1440px" },
          height: { xs: "100px", sm: "114px", md: "237px" },
          left: "0px",
          top: { xs: "477px", sm: "536px", md: "728px" },
          position: "absolute",
          background:
            "linear-gradient(0deg, white 0%, rgba(255, 255, 255, 0) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Mobile Overlay */}
      <Box
        sx={{
          width: { xs: "362px", sm: "0px", md: "0px" },
          height: { xs: "114px", sm: "0px", md: "0px" },
          left: { xs: "20px", sm: "0px", md: "0px" },
          top: { xs: "326.44px", sm: "0px", md: "0px" },
          position: "absolute",
          background:
            "linear-gradient(0deg, white 0%, rgba(255, 255, 255, 0) 100%)",
          pointerEvents: "none",
          display: { xs: "block", sm: "none", md: "none" },
        }}
      />
    </Box>
  );
};

export default VideoSection;
