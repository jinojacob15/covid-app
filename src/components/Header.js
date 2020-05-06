import React  from 'react';


 const  Heading = (props) =>  {
   console.log(props.lastUpdateTime)

  return (
    <div className="Heading">
      
           <h4>COVID INDIA TRACKER</h4>
  <span className="last-update">Last updated  on {props.lastUpdateTime.toString()}</span>
    </div>
  );
}

export default Heading;