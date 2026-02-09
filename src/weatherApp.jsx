import InfoBox from './infoBox';
import SearchBox from './SearchBox';

export default function WeatherApp(){
    return <div style={{textAlign:"center"}}>
        <h2>this is my weather app</h2>
        <SearchBox/>
        <InfoBox/>
    </div>
}