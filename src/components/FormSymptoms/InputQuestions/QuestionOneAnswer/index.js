import React from 'react';

import { ContainerAnswer } from './styles';

const QuestionOneAnswer = ({ questionText, inputName, onChange }) => (
  <div className="question-container">
    <p className="question__statement">{questionText}</p>
    <ContainerAnswer>
      <div>
        <input
          type="radio"
          name={inputName}
          onChange={onChange}
          value={true}
          id={inputName}
        />
        <label htmlFor={inputName}>Si</label>
      </div>
      <div>
        <input
          type="radio"
          name={inputName}
          onChange={onChange}
          value={false}
          id={inputName + 'No'}
        />
        <label htmlFor={inputName + 'No'}>No</label>
        <br />
      </div>
    </ContainerAnswer>
  </div>
);

export default QuestionOneAnswer;
