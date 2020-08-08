import React from 'react'

import QuestionItem from './QuestionItem'

import { QuestionsContainer } from './styles'

const QuestionMultiAnswer = ({ questions, classNames, questionText }) => {

    return (
        <div className={classNames}>
            <p>{questionText}</p>
            <QuestionsContainer>
                {questions.map((item) =>
                    <QuestionItem attributes={item.attributes} textQuestion={item.answerText} />)}
            </QuestionsContainer>
        </div>
    );
};

export default QuestionMultiAnswer;