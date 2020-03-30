
import React from 'react';
import { Container } from 'reactstrap';


const  IndividualTile = (props) =>  {
  return (
    <div className={"IndividualTile " +(props.heading)}>
      <Container>
      <h5>{props.heading}</h5>
      <div className="delta">{props.delta === 0 ?<span className="visiblity-hidden">[+0]</span> :<span>[+{props.delta}]</span>}</div>
      <div className="display-number">{props.displayNumber}</div>
      </Container>
    </div>
  );
}

export default IndividualTile;
