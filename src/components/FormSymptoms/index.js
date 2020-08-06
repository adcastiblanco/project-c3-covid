import React, { useEffect } from 'react';
import './index.css'

const FormSymptoms = () => {
  const handleClick = (event) => {
    event.preventDefault()
    let formChecks = document.querySelectorAll('.symptoms-check')
    let questions = document.querySelectorAll('.symptoms-question')
    let buttons = document.querySelectorAll('.symptoms-send')
    formChecks.forEach(element => {
      element.classList.toggle('show')
    });
    questions.forEach(element => {
      element.style.display = 'none'
    });
    buttons.forEach(element => {
      element.classList.toggle('show')
    });
  }
  const handleClick2 = () => {
    let send = '12'
  }
  return (
    <>
      <div className="symptoms-container">
        <form>
          <div className="symptoms-question">
            <p className="question__statement">¿Ha estado a menos de 6 pies de una persona con un caso de COVID-19
            confirmado por laboratorio durante al menos 5 minutos, o ha tenido
contacto directo con su moco o saliva, en los últimos 14 días?</p>
            <div className="question__answer">
              <div>
                <input type="radio" name="contactOther" value="yes" />
                <label htmlFor="yes">Si</label>
              </div>
              <div>
                <input type="radio" name="contactOther" value="no" />
                <label htmlFor="no">No</label><br />
              </div>
            </div>
          </div>
          <div className="symptoms-question">
            <p className="question__statement">¿Le ha aconsejado un funcionario de salud pública que se haga la prueba de COVID-19?</p>
            <div className="question__answer">
              <div>
                <input type="radio" name="contactOther" value="yes" />
                <label htmlFor="yes">Si</label>
              </div>
              <div>
                <input type="radio" name="contactOther" value="no" />
                <label htmlFor="no">No</label><br />
              </div>
            </div>
          </div>
          <div className="symptoms-check show">
            <p className="symptoms__question">¿Tiene alguno de los siguientes posibles síntomas de emergencia?</p>
            <div className="symptoms__answer">
              <div className="item">
                <input type="checkbox" id="breathe" name="breathe" value="breathe" />
                <label htmlFor="breathe">Luchando por respirar o luchando por respirar incluso cuando está inactivo o cuando descansa</label><br />
              </div>
              <div className="item">
                <input type="checkbox" id="collapse" name="collapse" value="collapse" />
                <label htmlFor="collapse">Se siente a punto de colapsar cada vez que se pone de pie o se sienta (flojera o falta de respuesta en un niño menor de 2 años)</label><br />
              </div>
              <div className="item">
                <input type="checkbox" id="none" name="none" value="none" />
                <label htmlFor="none">Ninguna de las anteriores</label><br />
              </div>
            </div>
          </div>
          <div className="symptoms-check">
            <p className="symptoms__question">¿Has presentado alguno de estos síntomas recientemente (en los últimos 14 días)?</p>
            <div className="symptoms__answer">
              <div className="item">
                <input type="checkbox" id="fever" name="fever" value="fever" />
                <label htmlFor="fever">Fiebre</label><br />
              </div>
              <div className="item">
                <input type="checkbox" id="breathe" name="breathe" value="breathe" />
                <label htmlFor="breathe">Dificultad para respirar</label><br />
              </div>
              <div className="item">
                <input type="checkbox" id="throat" name="throat" value="throat" />
                <label htmlFor="throat">Dolor de garganta</label><br />
              </div>
              <div className="item">
                <input type="checkbox" id="smell" name="smell" value="smell" />
                <label htmlFor="smell">Perdida del olfato</label><br />
              </div>
              <div className="item">
                <input type="checkbox" id="cough" name="cough" value="cough" />
                <label htmlFor="cough">Tos</label><br />
              </div>
              <div className="item">
                <input type="checkbox" id="fatigue" name="fatigue" value="fatigue" />
                <label htmlFor="fatigue">Fatiga</label><br />
              </div>
              <div className="item">
                <input type="checkbox" id="taste" name="taste" value="taste" />
                <label htmlFor="taste">Disminución del sentido del gusto</label><br />
              </div>
              <div className="item">
                <input type="checkbox" id="none" name="none" value="none" />
                <label htmlFor="none">Ninguna de las anteriores</label><br />
              </div>
            </div>
          </div>
          <div className="symptoms-send show">
            <button onClick={handleClick}>Siguiente Pregunta</button>
          </div>
          <div className="symptoms-send">
            <button onClick={handleClick2}>Enviar formulario</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormSymptoms;
