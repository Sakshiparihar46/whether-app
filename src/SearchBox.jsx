import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
export default function SearchBox(){
    let API_URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
    const API_KEY="3a07e7850d5b11228e3fc77250cb9a6c";

    let[city,setCity]=useState("");

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
    }
    return <div className='SearchBox'>
        <h3>Search for the weather</h3>
        <form action="" onSubmit={handleSubmit}>
             <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange}/><br/><br/>
             <Button variant="contained" type="submit" >search</Button>
        </form>
    </div>
}