import React, { useState } from "react";
import { Box, Typography, Grid, Button, useTheme } from "@mui/material";
import OptionButton from "./OptionButton";
import BackgroundImage from "../assets/QuestionAnswerSection/Background.webp"; // Import the background image

function QuizScreen({ quizData, endGame, incrementScore, restartGame }) {
  const theme = useTheme();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswer = (optionValue) => {
    incrementScore(currentQuestion.category, optionValue);

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < quizData.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      endGame();
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        backgroundImage: `url(${BackgroundImage})`, // Set background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Restart Button - Fixed to the top-right corner */}
<Button
  onClick={restartGame}
  sx={{
    position: "fixed",
    top: "20px",
    right: "20px", // Changed from left to right for top-right alignment
    fontSize: "1.5rem", // Increased font size for visibility
    backgroundColor: theme.palette.secondary.main,
    color: "#FFFFFF",
    padding: "12px 24px", // Increased padding for a larger button
    borderRadius: "8px",
    fontWeight: "bold",
    zIndex: 1000,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  }}
>
  إعادة
  {/* "Restart" */}
</Button>


      {/* Display Question Number */}
      <Typography
        variant="h4" // Increased variant for larger text
        sx={{
          fontWeight: "bold",
          color: theme.palette.primary.main,
          marginBottom: "10px",
          direction: "ltr", // Force LTR for question number format
        }}
      >
        {currentQuestionIndex + 1} / {quizData.length}
      </Typography>

      {/* Display Question */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#333",
          marginBottom: "20px",
          maxWidth: "80%",
        }}
      >
        {currentQuestion.question}
      </Typography>

      {/* Display Answer Options in a 2x2 Grid */}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {[0, 1, 2, 3, 4].map((value, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <OptionButton
              optionValue={value}
              handleAnswer={() => handleAnswer(value)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default QuizScreen;
