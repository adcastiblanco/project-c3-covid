import React from 'react';

import QuestionOneAnswer from './InputQuestions/QuestionOneAnswer';
import QuestionMultiAnswer from './InputQuestions/QuestionMultiAnswer';

import { RegisterSymptoms, Form, ButtonSymptoms } from './styles';

const FormSymptoms = () => {
  const handleClick = (event) => {
    event.preventDefault();
    let formChecks = document.querySelectorAll('.symptoms-check');
    let questions = document.querySelectorAll('.question-container');
    let buttons = document.querySelectorAll('.symptoms-send');
    formChecks.forEach((element) => {
      element.classList.toggle('show');
    });
    questions.forEach((element) => {
      element.style.display = 'none';
    });
    buttons.forEach((element) => {
      element.classList.toggle('show');
    });
  };
  const handleClick2 = () => {
    let send = '12';
  };
  return (
    <RegisterSymptoms className="content-container">
      <Form>
        <QuestionOneAnswer
          questionText="¿Ha estado a menos de 6 pies de una persona con un caso de COVID-19 confirmado por laboratorio durante al menos 5 minutos, o ha tenido contacto directo con su moco o saliva, en los últimos 14 días?"
          inputName="contactPeople"
        />
        <QuestionOneAnswer
          questionText="¿Le ha aconsejado un funcionario de salud pública que se haga la prueba de COVID-19?"
          inputName="adviceTest"
        />
        <QuestionMultiAnswer
          classNameContainer="symptoms-check show"
          classNameSubContainer="one-SubContainer" // All questions in one array for send it trough of props
          questionText="¿Tiene alguno de los siguientes posibles síntomas de emergencia?"
          questions={[
            {
              attributes: 'breathe',
              answerText:
                'Luchando por respirar o luchando por respirar incluso cuando está inactivo o cuando descansa',
            },
            {
              attributes: 'collapse',
              answerText:
                'Se siente a punto de colapsar cada vez que se pone de pie o se sienta (flojera o falta de respuesta en un niño menor de 2 años)',
            },
            {
              attributes: 'none',
              answerText: 'Ninguna de las anteriores',
            },
          ]}
        />
        <QuestionMultiAnswer
          classNameContainer="symptoms-check"
          classNameSubContainer="two-SubContainer" // All questions in one array for send it trough of props
          questionText="¿Has presentado alguno de estos síntomas recientemente (en los últimos 14 días)?"
          questions={[
            {
              attributes: 'fever',
              answerText: 'Fiebre',
            },
            {
              attributes: 'breathe2',
              answerText: 'Dificultad para respirar',
            },
            {
              attributes: 'throat',
              answerText: 'Dolor de garganta',
            },
            {
              attributes: 'smell',
              answerText: 'Perdida del olfato',
            },
            {
              attributes: 'cough',
              answerText: 'Tos',
            },
            {
              attributes: 'fatigue',
              answerText: 'Fatiga',
            },
            {
              attributes: 'taste',
              answerText: 'Disminución del sentido del gusto',
            },
            {
              attributes: 'none2',
              answerText: 'Ninguna de las anteriores',
            },
          ]}
        />
        <ButtonSymptoms className="symptoms-send show" onClick={handleClick}>
          Siguiente pregunta
        </ButtonSymptoms>
        <ButtonSymptoms className="symptoms-send" onClick={handleClick2}>
          Enviar datos
        </ButtonSymptoms>
      </Form>
    </RegisterSymptoms>
  );
};

export default FormSymptoms;
