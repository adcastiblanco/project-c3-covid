import React, {useState, useEffect} from 'react'
import '../assets/styles/components/Dashboard.scss'

const Dashboard = () => {
    const [statisticsCovid, setStatisticsCovid] = useState({})
    useEffect(() => {
            window.fetch('https://api.covid19api.com/world/total')
            .then(response => response.json())
            .then(data => setStatisticsCovid(data))
    }, [])
    console.log(statisticsCovid)
    return(
        <main className="home-dashboard">
            <div className="home-mainStatistics">
                <div className="home-mainStatistics__item">Casos existentes</div>
                <div className="home-mainStatistics__item">Recuperados</div>
                <div className="home-mainStatistics__item">Muertes</div>
    <div className="home-mainStatistics__item">Total: {statisticsCovid.TotalConfirmed}</div>
            </div>
        </main>
    )
}

export default Dashboard