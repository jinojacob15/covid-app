import React  from 'react';


 const  Heading = (props) =>  {


  return (
    <div className="Heading">
      
           <h4>COVID INDIA TRACKER</h4>
  <span className="last-update">Last updated  on {props.lastUpdateTime.toString()}</span>
    </div>
  );
}

export default Heading;