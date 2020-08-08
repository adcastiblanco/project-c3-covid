import React from 'react'

import { ContainerAnswer } from './styles'

const QuestionOneAnswer = ({ questionText, inputName }) => (
    <div className="question-container">
        <p className="question__statement">{questionText}</p>
        <ContainerAnswer>
            <div>
                <input type="radio" name={inputName} value="yes" />
                <label htmlFor="yes">Si</label>
            </div>
            <div>
                <input type="radio" name={inputName} value="no" />
                <label htmlFor="no">No</label><br />
            </div>
        </ContainerAnswer>
    </div>
)

export default QuestionOneAnswer