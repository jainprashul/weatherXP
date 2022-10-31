import React, { useEffect } from 'react'
import { API_FORECAST_WEATHER_BY_COORDS } from '../constant';
import '../styles/Dashboard.css'
import { getCurrentLocation } from '../utils';
import WeatherCard from './WeatherCard'

const Dashboard = () => {
  const [forecastData, setForecastData] = React.useState<any>([])

  console.log(forecastData)
  useEffect(() => {
    document.title = 'Weather App';
    getCurrentLocation().then((data: any) => {
      let { latitude, longitude } = data.coords;
      fetch(API_FORECAST_WEATHER_BY_COORDS(latitude, longitude)).then((response) => response.json()).then((data) => {
        console.log(data.list);
        const _forecastData = data.list.filter((item: any, index: number) => {
          return index % 8 === 0;
        })
        const forecastData = _forecastData.map((item: any) => {
          let data = {
            temp : item.main.temp,
            feels_like : item.main.feels_like,
            minTemperature: item.main.temp_min,
            maxTemperature: item.main.temp_max,
            weatherType: item.weather[0].main,
            date: item.dt_txt
          }
          return data;
        })
        setForecastData(forecastData);
      }
      ).catch((error) => {
        console.log(error);
      })
    }
    );
  }, []);
  return (
    <div className='Dashboard'>
      <div className="cards" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        gap : 20
      }}>
      {
        forecastData.map((data: any) => {
          return <WeatherCard data={data} />
        })
      }
      </div>
     
    </div>
  )
}

export default Dashboard