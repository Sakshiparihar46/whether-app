import InfoBox from './infoBox';
import SearchBox from './SearchBox';
import { useState } from 'react';

export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo]=useState({
        city:"jhansi",
        feelsLike: 15.51,
        humidity:36,
        temp: 16.83,
        tempMax:16.83,
        tempMin:16.83,
        weather:"clear sky"
        }
    );
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return <div style={{textAlign:"center"}}>
        <h2>this is my weather app</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo}/>
    </div>
}