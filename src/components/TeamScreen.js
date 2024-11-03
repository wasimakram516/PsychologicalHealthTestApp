import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import teamImage from "../assets/Team/Team Members.webp"; // Import the team image
import BackgroundImage from '../assets/Section/Background.webp';

function TeamScreen({ proceedToQuiz, goBack }) {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center', // Center vertically
      minHeight: '100vh',
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '40px',
      textAlign: 'right', // Align text to the right
    }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          borderRadius: "15px",
          maxWidth: "600px",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1976D2" }}
        >
          الفريق
          {/* "The Team" */}
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "20px", color: "#555" }}>
          تعرف على أعضاء الفريق الذين ساهموا في تطوير هذا الاختبار.
          {/* "Meet the team members who contributed to developing this test." */}
        </Typography>

        <Box
          component="img"
          src={teamImage}
          alt="Team"
          sx={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        />

        <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={proceedToQuiz}
            sx={{ padding: "10px 20px", fontWeight: "bold" }}
          >
            بدء الاختبار
            {/* "Proceed to Test" */}
          </Button>

          <Button
            variant="outlined"
            color="primary"
            onClick={goBack}
            sx={{ padding: "10px 20px", fontWeight: "bold" }}
          >
            العودة
            {/* "Go Back" */}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default TeamScreen;
