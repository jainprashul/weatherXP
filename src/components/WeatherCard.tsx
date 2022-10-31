import moment from 'moment'
import React from 'react'

type Props = {
    data: {
        minTemperature: number,
        maxTemperature: number,
        weatherType: string,
        date: string
        temp : number,
        feels_like : number

    }
}

const WeatherCard = ({ data }: Props) => {
    return (
        <div className="weatherCard" style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--base)',
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'center',
            alignItems : 'center',

        }} >
            <div className="date">
                {moment(data.date).format('DD MMM')}
            </div>
            <div data-type={data.weatherType} className="weatherType" style={{
                backgroundImage: `url(./imgs/${data.weatherType}.png)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: 60,
                height: 60,

            }}></div>

            <div className="temp">
                <span>{data.temp}  °C</span>
                <span style={{
                    color:`#A09FB1`
                }}>{data.feels_like}  °C</span>
            </div>

        </div>
    )
}

export default WeatherCard