import React, { useState, useEffect } from 'react'
import RenderAreaChart from './RenderAreaChart'

const Dashboard = () => {
	const API = [
		{
			label: 'Page A', value: 4000, pv: 2400, amt: 2400,
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
      <main className="home-dashboard">
          <section className="home-mainStatistics">
              <div className="home-mainStatistics__item">Casos existentes</div>
              <div className="home-mainStatistics__item">Recuperados: {statisticsCovid.TotalRecovered}</div>
              <div className="home-mainStatistics__item">Muertes: {statisticsCovid.TotalDeaths}</div>
              <div className="home-mainStatistics__item">Total: {statisticsCovid.TotalConfirmed}</div>
							<RenderAreaChart data = {API}/>
					</section>
      </main>
  )
}

export default Dashboard;
