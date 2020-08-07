import React, { useState, useEffect } from 'react';
import DataCard from './DataCard';
import RenderAreaChart from './RenderAreaChart';
// import RenderStackedBarChart from './RenderStackedBarChart';
import Label from './Label';
import DropDownMenu from './DropDownMenu';

const Dashboard = () => {

  const [data, setData] = useState([]);
  const [lastone, setLastone] = useState({});
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();

  const handleSetCountry = (item) => {
    setCountry(item);
    fetch(`https://api.covid19api.com/dayone/country/${item}`)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setLastone(data[data.length - 1]);
      });
  };

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/lang/es')
      .then((countries) => countries.json())
      .then((countries) => setCountries(
        countries.filter((country) => (country.subregion === 'South America' || country.subregion === 'Central America')),
      ));
  }, []);

  return (
    <section className='dashboard'>
      <div className='title'>
        <h1>Bienvenido a nuestra Sitio Web</h1>
        <p> Selecciona un páis para conocer la situación actual</p>
      </div>
      <DropDownMenu title='Selecciona un país' items={countries} handleSetCountry={handleSetCountry} country={country} />
      {country && (
        <>
          <div className='item'>
            <Label title='Confirmados' data={lastone.Confirmed} />
          </div>
          <div className='item'>
            <Label title='Defunciones' data={lastone.Deaths} />
          </div>
          <div className='item'>
            <Label title='Activos' data={lastone.Active} />
          </div>
          <div className='item'>
            <Label title='Recuperados' data={lastone.Recovered} />
          </div>
          <div className='graphContainer one'>
            <DataCard title='Casos y Muertes'>
              <RenderAreaChart data={data} />
            </DataCard>
          </div>
          <div className='graphContainer two'>
            <DataCard title='Casos Hombres y Mujeres'>
              {/* <RenderStackedBarChart data={API} /> */}
            </DataCard>
          </div>
        </>
      )}
    </section>
  );
};

export default Dashboard;
