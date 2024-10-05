import React from 'react';
// Types
import { AnswerObject } from '../App';

import './questionCard.css';

type Props = {
  question: string;
  answer: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  console.log('my choice >>>', userAnswer?.answer);
  console.log('Answer >>>', answer);

  return (
    <div className="question-container">
      <p className="question-number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div className="answer-container">
        {answer.map((answer) => (
          <div key={answer}>
            <button
              disabled={!!userAnswer}
              value={answer}
              onClick={callback}
              className={
                userAnswer
                  ? answer === userAnswer.correctAnswer
                    ? 'correct'
                    : ''
                  : ''
              }
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
