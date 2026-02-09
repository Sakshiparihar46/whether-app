import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import clearImage from './assets/clear.png'
import './infoBox.css'

export default function InfoBox(){
    let info={
        city:"jhansi",
        feelsLike: 15.51,
        humidity:36,
        temp: 16.83,
        tempMax:16.83,
        tempMin:16.83,
        weather:"clear sky"
    };
    return <div className='infoBox'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia 
          component="img"
          height="160"
          image={clearImage}
          alt="clear"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
           <p>Temperature={info.temp}&deg;C</p>
           <p>feelsLike={info.feelsLike}&deg;C</p>
           <p>humidity={info.humidity}</p>
           <p>weather={info.weather}</p>
           <p>Min Temp={info.tempMin}&deg;C</p>
           <p>Max Temp={info.tempMax}&deg;C</p>
          </Typography>
        </CardContent> 
    </Card>
    </div>
}