import React from 'react';
import './App.css';
import Forecast from './Components/forecast';
import WeatherDetails from './Components/weatherDetails';
import './Components/weather.css';
// import {RegionDropdown} from 'react-country-region-selector';

const api_key ="a745eec416904048b9a183729222805";


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      jsonObj:{}, 
    countryName: "",
    region:"",

    conditionCode: 0,
    conditionText: "",
    conditionIcon: "",

    feelsLike_c: 0,
    feelsLike_f: 0,
    temp_c: 0,
    temp_f: 0,
    humidity:0,

    wind_degree: 0,
    wind_dir: "",
    wind_kph: 0,
    wind_mph: 0,

      gust_mph: 0,
      gust_kph:0,
      pressure_mb: 0,
      pressure_in: 0,
      precip_mm: 0,
      precip_in: 0,
      uv:0,
      cloud: 0,
    };
  
  }


  componentDidMount(){
    var weatherInfoTemp;
    navigator.geolocation.getCurrentPosition(function(position) {
     
      fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key} &q=${position.coords.latitude},${position.coords.longitude}`)
      .then(res => res.json() ) 
      .then(json => { 
        if(json.error){
          alert("No matching location found.");
        }
        else
        {
          weatherInfoTemp = json

        }
       
       } )
       
    
   
  })
  setTimeout(() => {

    this.setState({
      jsonObj:weatherInfoTemp,
      countryName: weatherInfoTemp.location.country,
      region: weatherInfoTemp.location.region,

      
      conditionCode: weatherInfoTemp.current.condition.code,
      conditionText: weatherInfoTemp.current.condition.text,
      conditionIcon: weatherInfoTemp.current.condition.icon,

      feelsLike_c: weatherInfoTemp.current.feelslike_c,
      feelsLike_f: weatherInfoTemp.current.feelslike_f,
      temp_c: weatherInfoTemp.current.temp_c,
      temp_f: weatherInfoTemp.current.temp_f,
      humidity:weatherInfoTemp.current.humidity,

      wind_degree: weatherInfoTemp.current.wind_degree,
      wind_dir: weatherInfoTemp.current.wind_dir,
      wind_kph: weatherInfoTemp.current.wind_kph,
      wind_mph: weatherInfoTemp.current.wind_mph,
      gust_mph: weatherInfoTemp.current.gust_mph,
      gust_kph: weatherInfoTemp.current.gust_kph,
      pressure_mb: weatherInfoTemp.current.pressure_mb,
      pressure_in: weatherInfoTemp.current.pressure_in,
      precip_mm: weatherInfoTemp.current.precip_mm,
      precip_in: weatherInfoTemp.current.precip_in,
      uv: weatherInfoTemp.current.uv,
      cloud: weatherInfoTemp.current.cloud,
    })
  }, 2000); 
 
      }


// selectRegion (val) {
//   //Clear weather details 
//   this.setState({
//     region: "",
//     conditionCode:"",
//     conditionText: "",
//     conditionIcon: "",
//     feelsLike_c: 0,
//     temp_c: 0,
   
//     humidity:0,

//     wind_degree: 0,
//     wind_dir: "",
//     wind_kph: 0,
//     wind_mph: 0,
//     gust_mph: 0,
//     gust_kph: 0,
//     pressure_mb: 0,
//     pressure_in: 0,
//     precip_mm: 0,
//     precip_in: 0,
//     uv: 0,
//     cloud: 0,
    
//   })
//   fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key} &q=${val}`)

//   .then(res => res.json() ) 
//   .then(json => {
//     console.log("json: ", json)
//   if(json.error){
//     alert("No matching location found.");
   
//   }
//   else{
//     setTimeout(() => {
//     this.setState({
//        countryName: json.location.country,
//        region: val,
//       //  region: json.location.region,
 
       
//        conditionCode: json.current.condition.code,
//        conditionText: json.current.condition.text,
//        conditionIcon: json.current.condition.icon,
 
//        feelsLike_c: json.current.feelslike_c,
//        feelsLike_f: json.current.feelslike_f,
//        temp_c: json.current.temp_c,
//        temp_f: json.current.temp_f,
//        humidity:json.current.humidity,
 
//        wind_degree: json.current.wind_degree,
//        wind_dir: json.current.wind_dir,
//        wind_kph: json.current.wind_kph,
//        wind_mph: json.current.wind_mph,
//        gust_mph: json.current.gust_mph,
//        gust_kph: json.current.gust_kph,
//        pressure_mb: json.current.pressure_mb,
//        pressure_in: json.current.pressure_in,
//        precip_mm: json.current.precip_mm,
//        precip_in: json.current.precip_in,
//        uv: json.current.uv,
//        cloud: json.current.cloud,
       
//      })
//    }, 500); 
   
//   }
// } )
   
// }

  render(){
    let forecastObj ={
      country:this.state.countryName,
      region: this.state.region,
      cloud: this.state.cloud,
      text: this.state.conditionText,
      icon: this.state.conditionIcon,
      feelslike_c:this.state.feelsLike_c,
      feelslike_f:this.state.feelsLike_f,
      temp_c:this.state.temp_c,
      temp_f:this.state.temp_f,
      humidity:this.state.humidity,
    }
   
    let weatherObj ={
      wind_degree: this.state.wind_degree,
      wind_dir: this.state.wind_dir,
      wind_kph: this.state.wind_kph,
      wind_mph: this.state.wind_mph,
      gust_mph: this.state.gust_mph,
      gust_kph: this.state.gust_kph,
      pressure_mb: this.state.pressure_mb,
      pressure_in: this.state.pressure_in,
      precip_mm: this.state.precip_mm,
      precip_in: this.state.precip_in,
      uv: this.state.uv,
      cloud: this.state.cloud,
    }
   
    return (
        
          <div id ='main'>
       
               <Forecast id='forecast' props={forecastObj}/> 
               {/* <RegionDropdown
               id='Regiondropdown'
               country={this.state.countryName}
               value={this.state.region}
               onChange={(val) => this.selectRegion(val)} /> */}
               <WeatherDetails id='weather' props={weatherObj}/>
          </div>
     
    );
  }
  
}
export default App;




