
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import IndividualTile from 'components/IndividualTile'

 const  Statistics = (props) =>  {
  return (
    <div className="Statistics">
      <Container>
        <Row>
        <Col md={3} xs={6}>
        <IndividualTile heading="confirmed" displayNumber={props.overallData.confirmed} delta={props.delta?props.delta.deltaconfirmed:0} />
        </Col>
         <Col md={3} xs={6}>
          <IndividualTile heading="active" displayNumber={props.overallData.active} delta={0} />
        </Col>
         <Col md={3} xs={6}>
          <IndividualTile heading="recovered" displayNumber={props.overallData.recovered} delta={props.delta?props.delta.deltarecovered:0} />
        </Col>
         <Col md={3} xs={6}>
          <IndividualTile heading ="deceased"  displayNumber={props.overallData.deaths} delta={props.delta?props.delta.deltadeaths:0} />
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Statistics;
