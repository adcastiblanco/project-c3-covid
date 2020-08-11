import React from 'react'

import { ContainerAnswer } from './styles'

const QuestionOneAnswer = ({ questionText, inputName }) => (
    <div className="question-container">
        <p className="question__statement">{questionText}</p>
        <ContainerAnswer>
            <div>
                <input type="radio" name={inputName} value="yes" id={inputName} />
                <label htmlFor={inputName}>Si</label>
            </div>
            <div>
                <input type="radio" name={inputName} value="no" id={inputName + "No"} />
                <label htmlFor={inputName + "No"}>No</label><br />
            </div>
        </ContainerAnswer>
    </div>
)

export default QuestionOneAnswer