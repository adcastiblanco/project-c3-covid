import React from 'react';

const FormSymptoms = () => {
  var onclick = () => {
    document.getElementById('foo').checked = false
  }
  return (
    <>
      <div className="symptoms-container">
        <form>
          <div className="contact-other">
            <p className="contact-other__question">¿Has estado en contacto estrecho (cercano), sin usar elementos de protección, por más de 15 minutos con una persona con diagnóstico confirmado de COVID-19? o ¿has estado compartiendo el mismo lugar por más de 120 minutos con una persona con diagnóstico confirmado de COVID-19?</p>
            <div className="contact-other__answer">
              <div>
                <input type="radio" id="yes" name="contact-other" value="yes" />
                <label htmlFor="yes">Si</label>
              </div>
              <div>
                <input type="radio" id="no" name="contact-other" value="no" />
                <label htmlFor="no">No</label><br />
              </div>
            </div>
          </div>
          <div className="symptoms">
            <p className="symptoms__question">¿Has presentado alguno de estos síntomas recientemente (en los últimos 14 días)?</p>
            <div className="symptoms__answer">
              <div className="item">
                <input type="radio" id="fever" name="fever" value="fever" />
                <label htmlFor="fever">Fiebre</label><br />
              </div>
              <div className="item">
                <input type="radio" id="breathe" name="breathe" value="breathe" />
                <label htmlFor="breathe">Dificultad para respirar</label><br />
              </div>
              <div className="item">
                <input type="radio" id="throat" name="throat" value="throat" />
                <label htmlFor="throat">Dolor de garganta</label><br />
              </div>
              <div className="item">
                <input type="radio" id="smell" name="smell" value="smell" />
                <label htmlFor="smell">Perdida del olfato</label><br />
              </div>
              <div className="item">
                <input type="radio" id="cough" name="cough" value="cough" />
                <label htmlFor="cough">Tos</label><br />
              </div>
              <div className="item">
                <input type="radio" id="fatigue" name="fatigue" value="fatigue" />
                <label htmlFor="fatigue">Fatiga</label><br />
              </div>
              <div className="item">
                <input type="radio" id="taste" name="taste" value="taste" />
                <label htmlFor="taste">Disminución del sentido del gusto</label><br />
              </div>
            </div>
            <div className="symptoms-send">
              <button>Ninguno</button>
              <button>Enviar sintomas</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormSymptoms;
