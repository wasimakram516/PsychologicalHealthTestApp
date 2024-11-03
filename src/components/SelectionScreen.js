import React from 'react';
import { Box, Typography, Grid, Button, Paper } from '@mui/material';
import BackgroundImage from '../assets/Section/Background.webp';

function SelectionScreen({ startQuiz, goToTeam }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // Center the content vertically
        minHeight: '100vh',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '40px',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: '30px',
          borderRadius: '15px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'right', // Align text to the right
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          اختبار الصحة النفسية
          {/* Title: "Psychological Health Test" */}
        </Typography>

        <Typography 
          variant="body1" 
          sx={{
            marginBottom: '20px',
          }}
        >
          يرجى اختيار إحدى الخيارات أدناه. عند الضغط على "بدء الاختبار"، ستنتقل إلى التعليمات قبل بدء الاختبار. بالضغط على "الفريق"، سترى معلومات عن الفريق ويمكنك اختيار المتابعة للاختبار أو العودة.
          {/* Instruction: "Please select one of the options below. Pressing 'Start Quiz' will take you to the instructions before starting the test. Pressing 'The Team' will show information about the team, with options to proceed to the test or go back." */}
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={startQuiz} // Go to quiz
              sx={{
                backgroundColor: 'primary.main',
                color: '#fff',
                fontWeight: 'bold',
                padding: '12px',
                textTransform: 'none',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: 'primary.light',
                },
              }}
            >
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                بدء الاختبار
                {/* Button text: "Start Quiz" */}
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={goToTeam} // Go to team screen
              sx={{
                backgroundColor: 'primary.main',
                color: '#fff',
                fontWeight: 'bold',
                padding: '12px',
                textTransform: 'none',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: 'primary.light',
                },
              }}
            >
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                الفريق
                {/* Button text: "The Team" */}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default SelectionScreen;
