import React from "react";

const Questionnaire = ({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white text-blue-800 p-10 rounded shadow-md">
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {answers.map((answer, idx) => {
          const textColor = showAnswers
            ? answer === correct_answer
              ? "text-green-500"
              : "text-red-500"
            : "text-blue-700";
          //const textColor = showAnswers ? 'text-white' : 'text-blue-800';
          return (
            <button
              key={idx}
              className={`  ${textColor} bg-white p-4  font-semibold rounded shadow`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}       
      </div>
      {showAnswers && (
        <button
          onClick = {handleNextQuestion}
          className = {`text-white bg-blue-800 p-4 font-semibold rounded shadow mt-6`}
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default Questionnaire;
