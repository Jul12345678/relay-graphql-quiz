import react from 'react';
import { PropsQuestions } from '../types/types';

const Questions: React.FC<PropsQuestions> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p>
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Questions;
