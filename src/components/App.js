import React, { useState } from 'react';
import StartScreen from './StartScreen';
import SelectionScreen from './SelectionScreen';
import TeamScreen from './TeamScreen';
import InstructionScreen from './InstructionScreen';
import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';
import quizData from '../data/quizData';

function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'selection', 'team', 'instructions', 'quiz', 'result'
  const [scores, setScores] = useState({
    PhysicalSymptoms: 0,
    Depression: 0,
    Anxiety: 0,
  });

  // Calculate question counts per category dynamically from quizData
  const categoryCounts = quizData.reduce((counts, question) => {
    counts[question.category] = (counts[question.category] || 0) + 1;
    return counts;
  }, {});

  // Start the game from Start Screen
  const startGame = () => {
    setScores({ PhysicalSymptoms: 0, Depression: 0, Anxiety: 0 }); // Reset scores for each category
    setGameState('selection');
  };

  // Go to the instructions screen for the quiz
  const startQuiz = () => {
    setGameState('instructions');
  };

  // Go to the quiz screen
  const proceedToQuiz = () => {
    setGameState('quiz');
  };

  // Go to the Team screen
  const goToTeam = () => {
    setGameState('team');
  };

  // End the quiz and show results
  const endGame = () => {
    setGameState('result');
  };

  // Restart the game from the start
  const restartGame = () => {
    setScores({ PhysicalSymptoms: 0, Depression: 0, Anxiety: 0 });
    setGameState('start');
  };

  // Increment the score based on the category of the question
  const incrementScore = (category, score) => {
    setScores(prevScores => ({
      ...prevScores,
      [category]: prevScores[category] + score,
    }));
  };

  return (
    <div className="App">
      {/* Start Screen */}
      {gameState === 'start' && <StartScreen startGame={startGame} />}

      {/* Selection Screen */}
      {gameState === 'selection' && (
        <SelectionScreen startQuiz={startQuiz} goToTeam={goToTeam} />
      )}

      {/* Team Screen */}
      {gameState === 'team' && (
        <TeamScreen goBack={() => setGameState('selection')} proceedToQuiz={startQuiz} />
      )}

      {/* Instruction Screen */}
      {gameState === 'instructions' && (
        <InstructionScreen proceedToQuiz={proceedToQuiz} />
      )}

      {/* Quiz Screen */}
      {gameState === 'quiz' && (
        <QuizScreen
          endGame={endGame}
          incrementScore={incrementScore} // Pass the incrementScore function
          quizData={quizData}
          restartGame={restartGame}
        />
      )}

      {/* Result Screen */}
      {gameState === 'result' && (
        <ResultScreen
          scores={scores} // Pass scores for each category
          categoryCounts={categoryCounts} // Pass category question counts
          restartGame={restartGame}
        />
      )}
    </div>
  );
}

export default App;
