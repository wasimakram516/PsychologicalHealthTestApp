import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl", // Enable Right-to-Left text direction
  palette: {
    primary: {
      main: "#0093B4", 
      light: "#A1C5FF",
    },
    secondary: {
      main: "#C99B2D",
    },
    success: {
      main: "#32CD32", // Lime Green for correct answers or success
    },
    error: {
      main: "#DC143C", // Crimson Red for wrong answers or errors
    },
    warning: {
      main: "#FFD700", // Soft Yellow for warning or highlights
    },
  },
  typography: {
    fontFamily: "'Tajawal', 'Arial', sans-serif",
    fontSize: 20,
    h1: { fontSize: "3rem", fontWeight: 700 },
    h2: { fontSize: "2.5rem", fontWeight: 700 },
    h3: { fontSize: "2rem" },
    h4: { fontSize: "1.75rem" },
    h5: { fontSize: "1.5rem" },
    h6: { fontSize: "1.25rem" },
    body1: { fontSize: "1.25rem" },
    body2: { fontSize: "1rem" },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "startButton" },
          style: {
            position: "absolute",
            bottom: "10%",
            right: "10%",
            zIndex: 100,
            padding: "20px",
            borderRadius: "20px",
          },
        },
      ],
    },
  },
});

export default theme;
