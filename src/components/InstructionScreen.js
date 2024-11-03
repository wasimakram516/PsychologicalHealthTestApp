import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import BackgroundImage from '../assets/Section/Background.webp';

function InstructionScreen({ proceedToQuiz }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Overlay to improve text readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />

      {/* Content container with Paper for styling */}
      <Paper
        elevation={6}
        sx={{
          position: 'relative',
          zIndex: 2,
          padding: '30px',
          borderRadius: '12px',
          maxWidth: '600px',
          textAlign: 'right',
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          تعليمات الاختبار
          {/* Title: "Test Instructions" */}
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px', lineHeight: '1.8' }}>
          في هذا الاختبار، ستجد مجموعة من الأسئلة المتعلقة بأعراض الصحة النفسية. لكل سؤال، يرجى تقييم مدى
          شعورك بهذا العرض مؤخرًا، باستخدام المقياس من 0 إلى 4.
          {/* "In this test, you will find a series of questions related to mental health symptoms. For each question, please rate how much you've been feeling this symptom recently, using a scale from 0 to 4." */}
        </Typography>

        <Box sx={{ textAlign: 'right', marginBottom: '20px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold'}}>
            مقياس التقييم:
            {/* Rating Scale: */}
          </Typography>
          <Typography variant="body1">0 - أبداً: لم تشعر بهذا العرض إطلاقاً</Typography>
          <Typography variant="body1">1 - قليلاً: شعرت بهذا العرض قليلاً</Typography>
          <Typography variant="body1">2 - أحياناً: شعرت بهذا العرض أحياناً</Typography>
          <Typography variant="body1">3 - غالباً: شعرت بهذا العرض غالباً</Typography>
          <Typography variant="body1">4 - دائماً: شعرت بهذا العرض دائماً وبشدة</Typography>
        </Box>

        <Typography variant="body1" sx={{ marginBottom: '30px', color: '#555' }}>
          يرجى الإجابة بصدق، حيث تساعدك هذه الاختبارات على فهم حالتك النفسية بشكل أفضل.
          {/* "Please answer honestly, as these questions are meant to help you better understand your mental health status." */}
        </Typography>

        <Button
          variant="contained"
          color='primary'
          onClick={proceedToQuiz}
          sx={{
            padding: '10px 30px',
            borderRadius: '10px',
            textTransform: 'none',
            fontWeight: 'bold',
            
          }}
        >
          البدء في الاختبار
          {/* Button text: "Begin the Test" */}
        </Button>
      </Paper>
    </Box>
  );
}

export default InstructionScreen;
