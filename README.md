# Psychological Health Test App

This project is a **Psychological Health Test** application built with **React** and bootstrapped using [Create React App](https://github.com/facebook/create-react-app). It allows users to answer questions on various mental health topics and receive results based on their responses.

## App Features

- **Multi-category psychological quiz** with questions on **Physical Symptoms**, **Depression**, and **Anxiety**.
- **Responsive design** using Material UI, ensuring accessibility across various devices.
- **Dynamic question selection** with randomized display to provide a fresh experience on each test.
- **Result calculation** showing percentages for each category, providing insights into mental health status.
- **Right-to-Left (RTL) support** for Arabic language, with customized styling for a better user experience.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/wasimakram516/PsychologicalHealthTestApp.git
   cd PsychologicalHealthTestApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm start
   ```

   This will start the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. The page will automatically reload if you make edits.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode. This can be used to write unit tests for the components of the app.

### `npm run build`

Builds the app for production to the `build` folder. It bundles the app for the best performance and minifies the code.

### `npm run eject`

If you need to customize the configuration further, you can run `npm run eject`. **Note that this action is irreversible**.

## App Structure

- **Start Screen**: Provides the initial entry point with a start button.
- **Selection Screen**: Allows users to choose between starting the quiz or viewing the team information.
- **Instruction Screen**: Displays instructions on how to take the test.
- **Quiz Screen**: Shows questions and options, records responses, and moves to the next question.
- **Result Screen**: Calculates and displays percentages for each category based on user responses.
- **Team Screen**: Displays information about the team behind the app.

## Customization

You can modify the questions and categories by editing the `quizData` objects in the `data` folder of this project. Here’s an example:

```javascript
const quizData = [
  {
    question: "هل تشعر بالتعب المتكرر؟",
    category: "PhysicalSymptoms",
    // "Do you feel frequent fatigue?"
  },
  {
    question: "هل تشعر بالحزن أو الكآبة معظم الوقت؟",
    category: "Depression",
    // "Do you feel sad or down most of the time?"
  },
  // Add more questions here
];
```

### Dynamic Question Shuffle

The app uses a shuffle algorithm to select and randomize questions each time the quiz is loaded, giving users a unique experience with every attempt.

## Technologies Used

- **React**: For building the interactive UI.
- **Material UI**: For styling and responsive design components.
- **JavaScript**: For app logic and user interaction.
- **HTML5 & CSS3**: For the app structure and styling.
- **Webpack**: For bundling the project.

## Learn More

To learn more about React, check out the [React documentation](https://reactjs.org/). For information on how Create React App works, refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

