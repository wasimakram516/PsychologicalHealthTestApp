import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "../App.css"; // Import global styles

function StartScreen({ startGame }) {
  return (
    <Box
      className="start-screen"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        position: 'relative', // For positioning the button
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" className="game-title" sx={{ marginBottom: 3 }}>
        اختبار الصحة النفسية
        {/* App title: "Psychological Health Test" */}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={startGame}
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          padding: '10px 20px',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          borderRadius: '8px',
        }}
      >
        بدء الاختبار
        {/* "Start the Test" */}
      </Button>
    </Box>
  );
}

export default StartScreen;
