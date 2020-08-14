import React from 'react';

import QuestionItem from './QuestionItem';

import { QuestionsContainer } from './styles';

const QuestionMultiAnswer = ({
  questions,
  classNameContainer,
  classNameSubContainer,
  questionText,
}) => {
  return (
    <div className={classNameContainer}>
      <p>{questionText}</p>
      <QuestionsContainer className={classNameSubContainer}>
        {questions.map((item) => {
          return (
            <QuestionItem
              attributes={item.attributes}
              textQuestion={item.answerText}
              onChange={item.onChange === undefined ? () => {} : item.onChange}
              name={item.name}
            />
          );
        })}
      </QuestionsContainer>
    </div>
  );
};

export default QuestionMultiAnswer;
