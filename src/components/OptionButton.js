import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function OptionButton({ optionValue, handleAnswer }) {
  // Define color styles for each option value (0 to 4)
  const optionStyles = {
    0: {
      backgroundColor: "#E0F7FA", // Light color for 0
      color: "#000000",
    },
    1: {
      backgroundColor: "#B2EBF2", // Slightly darker for 1
      color: "#000000",
    },
    2: {
      backgroundColor: "#4DD0E1", // Medium color for 2
      color: "#FFFFFF",
    },
    3: {
      backgroundColor: "#00ACC1", // Darker color for 3
      color: "#FFFFFF",
    },
    4: {
      backgroundColor: "#00796B", // Darkest color for 4
      color: "#FFFFFF",
    },
  };

  return (
    <Box
      sx={{
        width: '80px',
        height: '80px',
        display: 'inline-block',
        margin: '10px',
      }}
    >
      <Button
        onClick={() => handleAnswer(optionValue)}
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: optionStyles[optionValue].backgroundColor,
          color: optionStyles[optionValue].color,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Soft shadow
          transition: 'transform 0.2s ease-in-out',
          "&:hover": {
            transform: 'scale(1.1)', // Slightly enlarge on hover
          },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {optionValue}
        </Typography>
      </Button>
    </Box>
  );
}

export default OptionButton;
