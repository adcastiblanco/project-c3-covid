import React, { useState, useEffect } from 'react'
import DataCard from './DataCard';
import RenderAreaChart from './RenderAreaChart';
import RenderStackedBarChart from './RenderStackedBarChart';
import Label from './Label';

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

  const [statisticsCovid, setStatisticsCovid] = useState({})

	useEffect(() => {
      window.fetch('https://api.covid19api.com/world/total')
          .then(response => response.json())
          .then(data => setStatisticsCovid(data))
  }, [])

  return (
    <section className='dashboard'>
      <div className='item'>
				<Label title='Confirmados' data='450505' color= 'red'/>
			</div>
      <div className='item'>
				<Label title= "Defunciones" data='568326' color= 'black'/>
			</div>
      <div className='item'>
				<Label title= "Observación" data='234583' color= 'yellow' />
			</div>
      <div className='item'>
				<Label title= "Recuperados" data='7362' color= 'green' />
			</div>
			<div className='graphContainer'>
				<DataCard title='Casos y Muertes' graph={<RenderAreaChart data={API}/>}/>
			</div>
			<div className='graphContainer2'>
				<DataCard title='Casos Hombres y Muejeres' graph={<RenderStackedBarChart data = {API}/>} />
			</div>
		</section>
  )
}

export default Dashboard;
