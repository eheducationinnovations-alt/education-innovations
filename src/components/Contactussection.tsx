import {
    Alert,
    Box,
    Button,
    Snackbar,
    TextField,
    Typography,
} from "@mui/material";
import { Mail, Phone } from "lucide-react";
import React, { useState } from "react";
import { API_ENDPOINTS } from "../config/constants";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const ContactUsSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(API_ENDPOINTS.CONTACT_EMAIL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Message sent successfully! We'll get back to you soon.",
          severity: "success",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again later.",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      sx={{
        alignSelf: "stretch",
        pt: "24px",
        pb: "96px",
        background:
          "linear-gradient(179deg, #D9E7FE 37%, rgba(255, 255, 255, 0) 100%)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "flex-start",
          alignItems: { xs: "stretch", md: "flex-end" },
          gap: { xs: "48px", md: "64px" },
          padding: { md: "240px 100px 96px 100px", xs: "100px 20px 48px 20px" },
        }}
      >
        {/* Left Side - Contact Info */}
        <Box
          sx={{
            alignSelf: "stretch",
            flex: { xs: "1", md: "1 1 0" },
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          {/* Title + Description */}
          <Box
            sx={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Typography
              sx={{
                alignSelf: "stretch",
                color: "#1E1E1F",
                fontSize: { xs: "32px", sm: "40px", md: "48px" },
                fontFamily: "Hanken Grotesk",
                fontWeight: 700,
                lineHeight: { xs: "40px", sm: "48px", md: "48px" },
              }}
            >
              Get in touch <br />
              with us today!
            </Typography>
            <Typography
              sx={{
                alignSelf: "stretch",
                color: "#6D6D6D",
                fontSize: "18px",
                fontFamily: "DM Sans",
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              Whatever you need, whenever you need it, our team is here to help
              dedicated to supporting you every step of the way.
            </Typography>
          </Box>

          {/* Contact Info Cards */}
          <Box
            sx={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "24px",
            }}
          >
            {/* Message Us Card */}
            <Box
              sx={{
                flex: "1 1 0",
                borderRadius: "31px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {/* Title + Description */}
              <Box
                sx={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {/* Icon + Title */}
                <Box
                  sx={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      background:
                        "radial-gradient(88% 75% at 50% 50%, #1B44FE 37%, #5375FE 100%)",
                      boxShadow:
                        "0px 6.86px 20.59px -1.23px rgba(28, 70, 255, 0.24)",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Mail size={24} color="#FFFFFF" />
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      alignSelf: "stretch",
                      color: "#1E1E1F",
                      fontSize: "18px",
                      fontFamily: "DM Sans",
                      fontWeight: 600,
                      lineHeight: "28px",
                    }}
                  >
                    Message us
                  </Typography>
                </Box>

                {/* Description */}
                <Typography
                  sx={{
                    alignSelf: "stretch",
                    color: "#6D6D6D",
                    fontSize: "16px",
                    fontFamily: "DM Sans",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                >
                  Use our online chat system to message us and get support.
                </Typography>
              </Box>

              {/* Email */}
              <Typography
                sx={{
                  color: "#1E1E1F",
                  fontSize: "16px",
                  fontFamily: "DM Sans",
                  fontWeight: 600,
                  lineHeight: "24px",
                }}
              >
                ethangiles@educationinnovations.net
              </Typography>
            </Box>

            {/* Call Us Card */}
            <Box
              sx={{
                flex: "1 1 0",
                borderRadius: "31px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {/* Title + Description */}
              <Box
                sx={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {/* Icon + Title */}
                <Box
                  sx={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      background:
                        "radial-gradient(88% 75% at 50% 50%, #1B44FE 37%, #5375FE 100%)",
                      boxShadow:
                        "0px 6.86px 20.59px -1.23px rgba(28, 70, 255, 0.24)",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Phone size={24} color="#FFFFFF" />
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      alignSelf: "stretch",
                      color: "#1E1E1F",
                      fontSize: "18px",
                      fontFamily: "DM Sans",
                      fontWeight: 600,
                      lineHeight: "28px",
                    }}
                  >
                    Call us
                  </Typography>
                </Box>

                {/* Description */}
                <Typography
                  sx={{
                    alignSelf: "stretch",
                    color: "#6D6D6D",
                    fontSize: "16px",
                    fontFamily: "DM Sans",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                >
                  Let's chat - nothing better than talking to another human
                  being.
                </Typography>
              </Box>

              {/* Phone */}
              <Typography
                sx={{
                  color: "#1E1E1F",
                  fontSize: "16px",
                  fontFamily: "DM Sans",
                  fontWeight: 600,
                  lineHeight: "24px",
                }}
              >
                +420 228 880 699
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Side - Contact Form */}
        <Box sx={{ position: "relative" }}>
          <ContactIcon />
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: { xs: "100%", md: "580px" },
              px: "24px",
              py: "32px",
              position: "relative",
              background:
                "linear-gradient(0deg, white 0%, rgba(255, 255, 255, 0.30) 100%)",
              boxShadow: "0px 6.86px 20.59px -1.23px rgba(219, 225, 255, 0.48)",
              borderRadius: "24px",
              outline: "3px solid #FFFFFF",
              outlineOffset: "-3px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Frame 2147224432 */}
            <Box
              sx={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {/* Frame 2147224431 */}
              <Box
                sx={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {/* Name & Mail Row */}
                <Box
                  sx={{
                    alignSelf: "stretch",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  {/* First Name Input */}
                  <TextField
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    fullWidth
                    sx={{
                      flex: "1 1 0",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "999px",
                        backgroundColor: "#FFFFFF",
                        "& fieldset": {
                          borderColor: errors.firstName ? "#d32f2f" : "#E3E3E3",
                          borderWidth: "1px",
                        },
                        "&:hover fieldset": {
                          borderColor: errors.firstName ? "#d32f2f" : "#1B44FE",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: errors.firstName ? "#d32f2f" : "#1B44FE",
                          borderWidth: "1px",
                        },
                      },
                      "& .MuiInputBase-input": {
                        padding: "14px 20px",
                        fontSize: "16px",
                        fontFamily: "DM Sans",
                        fontWeight: 400,
                        lineHeight: "24px",
                        "&::placeholder": {
                          color: "#A4A4A4",
                          opacity: 1,
                        },
                      },
                      "& .MuiFormHelperText-root": {
                        marginLeft: "20px",
                        fontSize: "12px",
                        color: "#d32f2f",
                      },
                    }}
                  />

                  {/* Last Name Input */}
                  <TextField
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    fullWidth
                    sx={{
                      flex: "1 1 0",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "999px",
                        backgroundColor: "#FFFFFF",
                        "& fieldset": {
                          borderColor: errors.lastName ? "#d32f2f" : "#E3E3E3",
                          borderWidth: "1px",
                        },
                        "&:hover fieldset": {
                          borderColor: errors.lastName ? "#d32f2f" : "#1B44FE",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: errors.lastName ? "#d32f2f" : "#1B44FE",
                          borderWidth: "1px",
                        },
                      },
                      "& .MuiInputBase-input": {
                        padding: "14px 20px",
                        fontSize: "16px",
                        fontFamily: "DM Sans",
                        fontWeight: 400,
                        lineHeight: "24px",
                        "&::placeholder": {
                          color: "#A4A4A4",
                          opacity: 1,
                        },
                      },
                      "& .MuiFormHelperText-root": {
                        marginLeft: "20px",
                        fontSize: "12px",
                        color: "#d32f2f",
                      },
                    }}
                  />
                </Box>

                {/* Email Input */}
                <TextField
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  fullWidth
                  sx={{
                    alignSelf: "stretch",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "999px",
                      backgroundColor: "#FFFFFF",
                      "& fieldset": {
                        borderColor: errors.email ? "#d32f2f" : "#E3E3E3",
                        borderWidth: "1px",
                      },
                      "&:hover fieldset": {
                        borderColor: errors.email ? "#d32f2f" : "#1B44FE",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: errors.email ? "#d32f2f" : "#1B44FE",
                        borderWidth: "1px",
                      },
                    },
                    "& .MuiInputBase-input": {
                      padding: "14px 20px",
                      fontSize: "16px",
                      fontFamily: "DM Sans",
                      fontWeight: 400,
                      lineHeight: "24px",
                      "&::placeholder": {
                        color: "#A4A4A4",
                        opacity: 1,
                      },
                    },
                    "& .MuiFormHelperText-root": {
                      marginLeft: "20px",
                      fontSize: "12px",
                      color: "#d32f2f",
                    },
                  }}
                />

                {/* Text Area */}
                <Box
                  sx={{
                    alignSelf: "stretch",
                    height: "140px",
                    position: "relative",
                  }}
                >
                  <TextField
                    name="message"
                    placeholder="Leave us a message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    fullWidth
                    multiline
                    rows={4}
                    sx={{
                      height: "100%",
                      "& .MuiOutlinedInput-root": {
                        height: "100%",
                        borderRadius: "20px",
                        backgroundColor: "#FFFFFF",
                        alignItems: "flex-start",
                        "& fieldset": {
                          borderColor: errors.message ? "#d32f2f" : "#E3E3E3",
                          borderWidth: "1px",
                        },
                        "&:hover fieldset": {
                          borderColor: errors.message ? "#d32f2f" : "#1B44FE",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: errors.message ? "#d32f2f" : "#1B44FE",
                          borderWidth: "1px",
                        },
                      },
                      "& .MuiInputBase-input": {
                        padding: "14px 20px",
                        fontSize: "16px",
                        fontFamily: "DM Sans",
                        fontWeight: 400,
                        lineHeight: "24px",
                        "&::placeholder": {
                          color: "#A4A4A4",
                          opacity: 1,
                        },
                      },
                      "& .MuiFormHelperText-root": {
                        marginLeft: "20px",
                        fontSize: "12px",
                        color: "#d32f2f",
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                fullWidth
                sx={{
                  alignSelf: "stretch",
                  height: "50px",
                  px: "24px",
                  py: "12px",
                  background: isSubmitting
                    ? "#cccccc"
                    : "radial-gradient(88% 75% at 50% 50%, #1B44FE 37%, #5375FE 100%)",
                  borderRadius: "68px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "18px",
                  fontFamily: "DM Sans",
                  fontWeight: 600,
                  lineHeight: "28px",
                  textTransform: "none",
                  color: "#FFFFFF",
                  "&:hover": {
                    color: "#FFFFFF",
                    background: isSubmitting
                      ? "#cccccc"
                      : "radial-gradient(88% 75% at 50% 50%, #1B44FE 37%, #5375FE 100%)",
                    boxShadow: isSubmitting
                      ? "none"
                      : "0px 8px 24px 0px rgba(27, 68, 254, 0.3)",
                  },
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </Box>

            {/* Border - Decorative */}
            <Box
              sx={{
                width: "580px",
                height: "430px",
                left: 0,
                top: 0,
                position: "absolute",
                borderRadius: "24px",
                pointerEvents: "none",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

const ContactIcon: React.FC = () => {
  return (
    <Box
      sx={{
        width: { xs: "64px", md: "150px" },
        height: { xs: "64px", md: "150px" },
        padding: "20px",
        transform: "rotate(32deg)",
        transformOrigin: "top left",
        background: "#FFFFFF",
        boxShadow: "0px 6.86px 20.59px -1.23px rgba(28, 70, 255, 0.24)",
        borderRadius: { xs: "8px", md: "32px" },
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        position: "absolute",
        top: { md: "-90px", xs: "-33px" },
        right: { md: "70px", xs: "20px" },
      }}
    >
      <Box
        component="img"
        src="/icons/notification-status.svg"
        alt="Contact notification"
        sx={{
          width: { xs: "46px", md: "110.24px" },
          height: { xs: "46px", md: "110.24px" },
          transform: "rotate(-35deg)",
        }}
      />
    </Box>
  );
};

export default ContactUsSection;
