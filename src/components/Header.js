import React  from 'react';
import moment from 'moment'


 const  Heading = (props) =>  {

var a = moment(props.lastUpdateTime,'DD-MM-YYYY HH:mm');
var b = moment();



  return (
    <div className="Heading">
      
           <h4>COVID INDIA TRACKER</h4>
           <span className="last-update">Last updated {a.from(b)}</span>
         
         
    </div>
  );
}

export default Heading;