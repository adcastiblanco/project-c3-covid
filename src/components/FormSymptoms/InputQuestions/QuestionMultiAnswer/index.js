import React from 'react'

import QuestionItem from './QuestionItem'

import { QuestionsContainer } from './styles'

const QuestionMultiAnswer = ({ questions, classNameContainer, classNameSubContainer, questionText }) => {

    return (
        <div className={classNameContainer}>
            <p>{questionText}</p>
            <QuestionsContainer className={classNameSubContainer}>
                {questions.map((item) =>
                    <QuestionItem attributes={item.attributes} textQuestion={item.answerText} />)}
            </QuestionsContainer>
        </div>
    );
};

export default QuestionMultiAnswer;