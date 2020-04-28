import React from 'react';



const  PercentageRender = (props) =>  {
  return (
    <span className="PercentageRender">
    {parseInt((props.select/props.total)*100)}%
    </span>
  );
}

export default PercentageRender;