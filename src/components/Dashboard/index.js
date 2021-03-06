import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import DataCard from './DataCard';
import RenderAreaChart from './RenderAreaChart';
import LabelDataCovid from './LabelDataCovid';
import DropDownMenu from './DropDownMenu';
import ListLabels from './ListLabels';
import ListDataCards from './ListDataCards';

import { DashboardContainer, HeadingDashboard } from './styles';

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
        setData(
          data.map((country) => {
            // country.Date = getWeek(new Date(country.Date.slice(0, 10).split('-')));
            country.Date = format(
              new Date(country.Date.slice(0, 10).split('-')),
              'MM/dd/yyyy'
            );
            return country;
          })
        );
        setLastone(data[data.length - 1]);
      });
  };

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/lang/es')
      .then((countries) => countries.json())
      .then((countries) =>
        setCountries(
          countries.filter(
            (country) =>
              country.subregion === 'South America' ||
              country.subregion === 'Central America'
          )
        )
      );
  }, []);
  countries.forEach((item) => {
    item.name =
      item.name === 'Bolivia (Plurinational State of)'
        ? 'Bolivia'
        : item.name === 'Venezuela (Bolivarian Republic of)'
        ? 'Venezuela'
        : item.name;
  });
  return (
    <DashboardContainer>
      <HeadingDashboard>
        <h1>
          Bienvenido a <span>CovidMaster</span>
        </h1>
        <p>Selecciona un país para conocer datos sobre el COVID-19</p>
      </HeadingDashboard>
      <DropDownMenu
        title="Selecciona un país"
        items={countries}
        handleSetCountry={handleSetCountry}
        country={country}
      />
      {country && (
        <>
          <ListLabels>
            <LabelDataCovid
              title="Confirmados"
              data={lastone.Confirmed}
              color="Confirmed"
            />
            <LabelDataCovid
              title="Defunciones"
              data={lastone.Deaths}
              color="Deaths"
            />
            <LabelDataCovid
              title="Activos"
              data={lastone.Active}
              color="Active"
            />
            <LabelDataCovid
              title="Recuperados"
              data={lastone.Recovered}
              color="Recovered"
            />
          </ListLabels>
          <ListDataCards>
            <DataCard title="Confirmados vs Defunciones">
              <RenderAreaChart data={data} graph1="Confirmed" graph2="Deaths" />
            </DataCard>
            <DataCard title="Activos vs Recuperados">
              <RenderAreaChart data={data} graph1="Active" graph2="Recovered" />
            </DataCard>
          </ListDataCards>
        </>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
