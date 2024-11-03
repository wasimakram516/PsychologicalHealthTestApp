import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import BackgroundImage from "../assets/Section/Background.webp";

function ResultScreen({ scores, categoryCounts, restartGame }) {
  // Calculate the percentage for each category
  const calculatePercentage = (score, count) => {
    if (count === 0) return 0; // Avoid division by zero
    const maxScore = count * 4; // Maximum score for this category based on question count
    return Math.round((score / maxScore) * 100);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "40px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          position: "relative",
          padding: 4,
          borderRadius: 2,
          textAlign: "right",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
          maxWidth: "400px",
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1976D2" }}
        >
          اكتمل الاختبار!
          {/* "Test Completed!" */}
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#333", marginBottom: 3 }}
        >
          لقد أتممت الاختبار بنجاح. فيما يلي نتائجك لكل فئة:
          {/* "You have completed the test successfully. Here are your results for each category:" */}
        </Typography>

        {/* Display scores for each category */}
        <Typography variant="h6" gutterBottom>
          الأعراض الجسدية: <strong>{calculatePercentage(scores.PhysicalSymptoms, categoryCounts.PhysicalSymptoms)}%</strong>
          {/* "Physical Symptoms" */}
        </Typography>
        
        <Typography variant="h6" gutterBottom>
          الاكتئاب: <strong>{calculatePercentage(scores.Depression, categoryCounts.Depression)}%</strong>
          {/* "Depression" */}
        </Typography>

        <Typography variant="h6" gutterBottom>
          القلق: <strong>{calculatePercentage(scores.Anxiety, categoryCounts.Anxiety)}%</strong>
          {/* "Anxiety" */}
        </Typography>

        <Typography variant="body2" sx={{ color: "#555", marginBottom: 3 }}>
          ملاحظة: كلما زادت النسبة المئوية، زادت خطورة الحالة الصحية.
          {/* "Note: The higher the percentage, the more concerning the health condition." */}
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
          onClick={restartGame}
        >
          إعادة الاختبار
          {/* "Restart Test" */}
        </Button>
      </Paper>
    </Box>
  );
}

export default ResultScreen;
