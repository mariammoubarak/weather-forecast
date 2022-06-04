import React from 'react';
import './weather.css';

function forecast ({props}){


    console.log("props: ", props)
        return(
            <div >
                <div id='country'>
                <label >{props.country}</label>
                <label id='temp1'>{props.temp_c} C</label>
                <img id='icon' src={props.icon} />
                </div>

                <div >
                <label id='region'>{props.region}</label>
                <label id='weatherCondition'>{props.text}</label>
                </div>

                {/* <div id='temp1'>
                <label>{props.temp_c} ْC</label>
                </div> */}
                
               <div id='temp'>
                <label>Feelslike: {props.feelslike_c}  ْC</label>
                </div>

               
                <div id='temp3'>
                <label>Humidity: {props.humidity}%</label>
                </div>

             
            </div>
        )
    
}
export default forecast;