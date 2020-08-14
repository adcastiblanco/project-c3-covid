import React, { useState } from 'react';

import QuestionOneAnswer from './InputQuestions/QuestionOneAnswer';
import QuestionMultiAnswer from './InputQuestions/QuestionMultiAnswer';

import { CreateTest } from '../../services/TestServices';

import { RegisterSymptoms, Form, ButtonSymptoms } from './styles';
import loader from '../../assets/images/loader.gif';

const FormSymptoms = () => {
  /**UseState */
  const [form, setForm] = useState({
    question_1: false,
    question_2: false,
    question_3: {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    },
    question_4: {
      a: false,
      b: false,
    },
  });

  /**Onchage inputs */
  const handleInputRadioChange = (event) => {
    const target = event.target;
    setForm({
      ...form,
      [target.name]: target.value === 'true' ? true : false,
    });
  };

  const handleQuestion_4Change = (event) => {
    const target = event.target;
    setForm({
      ...form,
      question_4: {
        ...form.question_4,
        [target.name]: target.checked ? true : false,
      },
    });
  };

  const handleQuestion_3Change = (event) => {
    const target = event.target;
    setForm({
      ...form,
      question_3: {
        ...form.question_3,
        [target.name]: target.checked ? true : false,
      },
    });
  };

  const handleInputNoneChange = (event) => {
    const target = event.target;
    const parent = target.parentElement.parentElement;
    if (parent.classList[3] === 'question_3') {
      const inputs = parent.querySelectorAll('input');

      /** Uncheked all inputs of container */
      inputs.forEach((element) => {
        if (element.checked && element.id != 'none2') {
          element.checked = false;
        }
      });

      /**Modify state questions  */
      setForm({
        ...form,
        question_3: {
          a: false,
          b: false,
          c: false,
          d: false,
          e: false,
          f: false,
          g: false,
          h: false,
          i: false,
        },
      });
    } else if (parent.classList[3] === 'question_4') {
      const inputs = parent.querySelectorAll('input');

      /** Uncheked all inputs of container */
      inputs.forEach((element) => {
        if (element.checked && element.id != 'none') {
          element.checked = false;
        }
      });

      /**Modify state questions  */
      setForm({
        ...form,
        question_4: {
          a: false,
          b: false,
        },
      });
    }
  };

  /**Onclick */

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

  const handleClick2 = async () => {
    event.preventDefault();
    const id_user = localStorage.getItem('id_user');
    swal({
      title: 'Estamos verificando tus sintomas',
      icon: loader,
      button: false,
    });
    try {
      const response = await CreateTest(id_user, form);
      if (response.status === 201) {
        swal({
          title:
            response.data.alert === 'Roja'
              ? '¡Tu salud puede estar en peligro!'
              : response.data.alert === 'Amarilla'
              ? '¡Cuida tu salud!'
              : response.data.alert === 'Verde'
              ? '¡Sigue así!'
              : '',
          text: response.data.message,
          icon:
            response.data.alert === 'Roja'
              ? 'error'
              : response.data.alert === 'Amarilla'
              ? 'warning'
              : response.data.alert === 'Verde'
              ? 'success'
              : '',
          button: '¡OK!',
        }).then((response) => {
          location.href = '/';
        });
      } else {
        console.log(response);
        swal({
          title: 'Error',
          text: response.message,
          icon: 'error',
          button: '¡OK!',
        }).then((response) => {
          location.href = '/';
        });
      }
    } catch (error) {
      swal({
        title: 'Error',
        text: error,
        icon: 'error',
      });
    }
  };

  return (
    <RegisterSymptoms className="content-container">
      <Form>
        <QuestionOneAnswer
          questionText="¿Ha estado a menos de 6 pies de una persona con un caso de COVID-19 confirmado por laboratorio durante al menos 5 minutos, o ha tenido contacto directo con su moco o saliva, en los últimos 14 días?"
          inputName="question_1"
          onChange={handleInputRadioChange}
        />
        <QuestionOneAnswer
          questionText="¿Le ha aconsejado un funcionario de salud pública que se haga la prueba de COVID-19?"
          inputName="question_2"
          onChange={handleInputRadioChange}
        />
        <QuestionMultiAnswer
          classNameContainer="symptoms-check show"
          classNameSubContainer="one-SubContainer question_4" // All questions in one array for send it trough of props
          questionText="¿Tiene alguno de los siguientes posibles síntomas de emergencia?"
          questions={[
            {
              name: 'a',
              attributes: 'breathe',
              onChange: handleQuestion_4Change,
              answerText:
                'Luchando por respirar o luchando por respirar incluso cuando está inactivo o cuando descansa',
            },
            {
              name: 'b',
              attributes: 'collapse',
              onChange: handleQuestion_4Change,
              answerText:
                'Se siente a punto de colapsar cada vez que se pone de pie o se sienta (flojera o falta de respuesta en un niño menor de 2 años)',
            },
            {
              attributes: 'none',
              onChange: handleInputNoneChange,
              answerText: 'Ninguna de las anteriores',
            },
          ]}
        />
        <QuestionMultiAnswer
          classNameContainer="symptoms-check"
          classNameSubContainer="two-SubContainer question_3" // All questions in one array for send it trough of props
          questionText="¿Has presentado alguno de estos síntomas recientemente (en los últimos 14 días)?"
          questions={[
            {
              name: 'a',
              onChange: handleQuestion_3Change,
              attributes: 'fever',
              answerText: `Fiebre de 100 F (37.8 C) o más, o posibles síntomas de fiebre como
              escalofríos y sudoración alternantes`,
            },
            {
              name: 'c',
              onChange: handleQuestion_3Change,
              attributes: 'throat',
              answerText:
                'Problemas para respirar, falta de aliento o sibilancias severas',
            },

            {
              name: 'g',
              onChange: handleQuestion_3Change,
              attributes: 'taste',
              answerText:
                'Pérdida del olfato o del gusto, o un cambio en el gusto.',
            },
            {
              name: 'd',
              onChange: handleQuestion_3Change,
              attributes: 'smell',
              answerText: 'Escalofríos o temblores repetidos con escalofríos.',
            },
            {
              name: 'e',
              onChange: handleQuestion_3Change,
              attributes: 'pain',
              answerText: 'Dolores musculares',
            },
            {
              name: 'f',
              onChange: handleQuestion_3Change,
              attributes: 'fatigue',
              answerText: 'Dolor de garganta',
            },
            {
              name: 'g',
              onChange: handleQuestion_3Change,
              attributes: 'cough',
              answerText: 'Tos',
            },
            {
              name: 'h',
              onChange: handleQuestion_3Change,
              attributes: 'vomit',
              answerText: 'Náuseas, vómitos o diarrea.',
            },
            {
              name: 'i',
              onChange: handleQuestion_3Change,
              attributes: 'painHead',
              answerText: 'Dolor de cabeza.',
            },
            {
              attributes: 'none2',
              onChange: handleInputNoneChange,
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
