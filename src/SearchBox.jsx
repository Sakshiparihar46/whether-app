import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
    let API_URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
    const API_KEY="3a07e7850d5b11228e3fc77250cb9a6c";

    let getWhetherInfo=async()=>{
        try{
             let response= await fetch(`${API_URL}${city}&appid=${API_KEY}`);
       let jsonResponse=await response.json();
       let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        feelsLike:jsonResponse.main.feels_like, 
        humidity:jsonResponse.main.humidity,
        weather:jsonResponse.weather[0].description,
       }
       console.log(result);
       return result;
        }catch(err){
            throw err;
        }
      
    }

    

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit=async(evt)=>{ 
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
          let newInfo=await getWhetherInfo();
          updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }
    return <div className='SearchBox'>
        <h3>Search for the weather</h3>
        <form action="" onSubmit={handleSubmit}>
             <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange}/><br/><br/>
             <Button variant="contained" type="submit" >search</Button>
             {error && <p style={{color:"red"}}>no such place exist</p>}
        </form>
    </div>
}