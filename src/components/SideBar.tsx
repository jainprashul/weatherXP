import React from 'react'
import '../styles/SideBar.css'

const data = {
    temperature: 12,
    humidity: 80,
    pressure: 1013,
    overall : 'Shower',
    date : 'Fri, 12 Feb',
    location : 'London, UK'
}

const SideBar = () => {
    return (
        <div className='SideBar'>
            <div className="weatherImg">
                <div className="header" style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <button className='button'>Search for places</button>
                    <div className="rounded-icon">Q</div>
                </div>

                <figure>

                </figure>
            </div>
            <div className="weatherInfo">
                <div className="temp">
                    <span>{data.temperature}</span> °C
                </div>
                <div className="overall">
                    {data.overall}
                </div>
                <div className="date">
                    Today . {data.date}
                </div>
                
                <div className="location">
                   L &nbsp;
                    <span className="location">
                        {data.location} 
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SideBar