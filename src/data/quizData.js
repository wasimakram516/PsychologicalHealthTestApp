// quizData.js

// Original quiz data with equal weight across categories
const quizData = [
  // Physical Symptoms (الأعراض الجسدية)
  { question: "هل تشعر بالتعب المتكرر؟", category: "PhysicalSymptoms" },
  { question: "هل تعاني من صداع متكرر؟", category: "PhysicalSymptoms" },
  { question: "هل لديك مشاكل في الهضم أو الشهية؟", category: "PhysicalSymptoms" },
  { question: "هل تشعر بالتوتر أو الألم في العضلات؟", category: "PhysicalSymptoms" },
  { question: "هل تشعر بألم بدون سبب واضح؟", category: "PhysicalSymptoms" },
  { question: "هل تعاني من خفقان القلب؟", category: "PhysicalSymptoms" },
  { question: "هل تشعر بالدوخة أو الإغماء في بعض الأحيان؟", category: "PhysicalSymptoms" },

  // Depression (الاكتئاب)
  { question: "هل تشعر بالحزن أو الكآبة معظم الوقت؟", category: "Depression" },
  { question: "هل تفتقد إلى الحافز أو الاهتمام بالأنشطة؟", category: "Depression" },
  { question: "هل تشعر باليأس تجاه المستقبل؟", category: "Depression" },
  { question: "هل لديك صعوبة في النوم أو النوم الزائد؟", category: "Depression" },
  { question: "هل تعاني من صعوبة في التركيز؟", category: "Depression" },
  { question: "هل تشعر بالذنب أو الشعور بالذنب بدون سبب؟", category: "Depression" },

  // Anxiety (القلق)
  { question: "هل تشعر بالتوتر أو القلق بشكل متكرر؟", category: "Anxiety" },
  { question: "هل تعاني من مشاعر مفاجئة من الذعر؟", category: "Anxiety" },
  { question: "هل تجد صعوبة في الاسترخاء أو الهدوء؟", category: "Anxiety" },
  { question: "هل تقلق بشكل مفرط حول أشياء مختلفة؟", category: "Anxiety" },
  { question: "هل تشعر بالانزعاج أو التوتر بسهولة؟", category: "Anxiety" },
  { question: "هل تشعر بأفكار مستمرة وسريعة تدور في ذهنك؟", category: "Anxiety" },
  { question: "هل تشعر بالخوف من الأشياء التي قد تحدث في المستقبل؟", category: "Anxiety" },
];

// Shuffle function using Fisher-Yates algorithm
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Export a shuffled selection of quiz data
export default shuffleArray(quizData);
