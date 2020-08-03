import React from 'react';

const FormSymptoms = () => {
  return (
    <>
      <section className="symptoms-container">
        <form>
          <div className="contact-other">
            <p className="contact-other__question">¿Has estado en contacto estrecho (cercano), sin usar elementos de protección, por más de 15 minutos con una persona con diagnóstico confirmado de COVID-19? o ¿has estado compartiendo el mismo lugar por más de 120 minutos con una persona con diagnóstico confirmado de COVID-19?</p>
            <div className="contact-other__answer">
              <input type="radio" id="yes" name="contact-other" value="yes" />
              <label for="yes">Si</label><br />
              <input type="radio" id="no" name="contact-other" value="no" />
              <label for="no">No</label><br />
            </div>
            <div className="symptoms">
              <p className="symptoms__question">¿Has presentado alguno de estos síntomas recientemente (en los últimos 14 días)?</p>
              <div className="symptoms__answer">
                <input type="radio" id="fever" name="fever" value="fever" />
                <label for="fever">Fiebre</label><br />
                <input type="radio" id="breathe" name="breathe" value="breathe" />
                <label for="breathe">Dificultad para respirar</label><br />
                <input type="radio" id="throat" name="throat" value="throat" />
                <label for="throat">Dolor de garganta</label><br />
                <input type="radio" id="smell" name="smell" value="smell" />
                <label for="smell">Perdida del olfato</label><br />
                <input type="radio" id="cough" name="cough" value="cough" />
                <label for="cough">Tos</label><br />
                <input type="radio" id="fatigue" name="fatigue" value="fatigue" />
                <label for="fatigue">Fatiga</label><br />
                <input type="radio" id="taste" name="taste" value="taste" />
                <label for="taste">Disminución del sentido del gusto</label><br />
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default FormSymptoms;
