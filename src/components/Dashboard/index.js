import React, { useState, useEffect } from 'react';
import DataCard from './DataCard';
import RenderAreaChart from './RenderAreaChart';
import RenderStackedBarChart from './RenderStackedBarChart';
import Label from './Label';
import DropDownMenu from './DropDownMenu';

const Dashboard = () => {
  const API = [
    {
      label: 'Muertes', value: 4000, pv: 2400, amt: 2400,
    },
    {
      label: 'Page B', value: 3000, pv: 1398, amt: 2210,
    },
    {
      label: 'Page C', value: 2000, pv: 9800, amt: 2290,
    },
    {
      label: 'Page D', value: 2780, pv: 3908, amt: 2000,
    },
    {
      label: 'Page E', value: 1890, pv: 4800, amt: 2181,
    },
    {
      label: 'Page F', value: 2390, pv: 3800, amt: 2500,
    },
    {
      label: 'Page G', value: 3490, pv: 4300, amt: 2100,
    },
  ];

  const [data, setData] = useState({
    info: '',
    lastone: '',
    countries: '',
  });

  useEffect(async () => {
    fetch('https://restcountries.eu/rest/v2/lang/es')
      .then((data) => data.json())
      .then((data) => setData({
        countries: data.filter((country) => (country.subregion === 'South America' || country.subregion === 'Central America')),
      }));

    // fetch('https://api.covid19api.com/dayone/country/Mexico')
      // .then((data) => data.json())
      // .then((data) => setData({ ...data, info: data, lastone: data[data.length - 1] }));

  }, []);

  return (
    <section className='dashboard'>
      <div className='menu'>
        <DropDownMenu title='Selecciona un país' items={data.countries} />
      </div>
      <div className='item'>
        <Label title='Confirmados'
          // data={ data.lastone.Confirmed }
        />
      </div>
      <div className='item'>
        <Label title='Defunciones'
          // data={data.lastone.Deaths}
        />
      </div>
      <div className='item'>
        <Label title='Activos'
          // data={data.lastone.Active} color='yellow'
        />
      </div>
      <div className='item'>
        <Label title='Recuperados'
          // data={data.lastone.Recovered}
        />
      </div>
      <div className='graphContainer one'>
        <DataCard title='Casos y Muertes'>
          <RenderAreaChart data={data.info} />
        </DataCard>
      </div>
      <div className='graphContainer two'>
        <DataCard title='Casos Hombres y Mujeres'>
          <RenderStackedBarChart data={API} />
        </DataCard>
      </div>
    </section>
  );
};

export default Dashboard;
