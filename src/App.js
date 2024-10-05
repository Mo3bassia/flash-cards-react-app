import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  // const [current, setCurrent] = useState();

  // current && current.classList.add("selected");
  // function handleCLick(e) {
  //   setCurrent(e.target);
  //   console.log(current);
  // }
  const [selectId, setSelectedId] = useState(null);

  return (
    <div className="flashcards">
      {questions.map((question, index) => {
        return (
          <div
            key={question.id}
            onClick={() =>
              setSelectedId(question.id !== selectId ? question.id : null)
            }
            className={selectId === question.id ? "selected" : ""}
          >
            {selectId === question.id ? question.answer : question.question}
          </div>
        );
      })}
    </div>
  );
}
