import React, { Component  } from 'react'
import * as d3 from 'd3'
import './weather.css';


var table,tr;
var checkUpdate = [];
class weatherDetails extends Component {
      
    componentDidUpdate() {
       
      this.drawTable()
       
    }
    drawTable()  {

         if(JSON.stringify(checkUpdate) != JSON.stringify(this.props.props))
           {
            d3.select('table').remove();
           var weather =[
                {title:"Wind speed (km/h)" ,value: this.props.props.wind_kph, title2:"UV index" ,value2: this.props.props.uv},
                {title:"Wind speed (mph)" ,value: this.props.props.wind_mph, title2:"Pressure (mb)" ,value2: this.props.props.pressure_mb},
                {title:"Wind gust  (km/h)" ,value: this.props.props.gust_kph, title2:"Pressure (in)" ,value2: this.props.props.pressure_in},
                {title:"Wind gust  (mph)" ,value: this.props.props.gust_mph, title2:"Precipitation amount (mm)" ,value2: this.props.props.precip_mm},
                {title:"Wind direction (degrees)",value : this.props.props.wind_degree, title2:"Precipitation amount (in)" ,value2: this.props.props.precip_in},
                {title:"Wind direction" ,value: this.props.props.wind_dir,title2:"Cloud cover" ,value2: this.props.props.cloud},
            ]
            checkUpdate = this.props.props;
           
              table =d3.select('body').append('table');
                  
              tr = table.selectAll('tr')
              .data(weather).enter()
              .append('tr');

              tr.append('td')
              .attr('class', 'title')
              .html(function(m) { return m.title; });

              tr.append('td')
              .attr('class', 'value')
              .html(function(m) { return m.value; });

              tr.append('td')
              .attr('class', 'title2')
              .html(function(m) { return m.title2; });

              tr.append('td')
              .attr('class', 'value2')
              .html(function(m) {return m.value2; });

  

   }


    }

  
    render() { return(
        <div id='body' >
      
         </div>

    )
       
         }
}
export default weatherDetails