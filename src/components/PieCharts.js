import React  from 'react';
import { Container } from 'reactstrap';
import {Doughnut} from 'react-chartjs-2';


 const  PieCharts = (props) =>  {
 
const returnData = () => {

  const rawData = props.rawData;
  const greator_than_Sixty = rawData.filter(data => data.agebracket>=60)
  const less_than_Sixty_greator_than_30 = rawData.filter(data => data.agebracket<60 && data.agebracket<=30)
  const less_than_30 = rawData.filter(data => data.agebracket<30)

  return [greator_than_Sixty.length,less_than_Sixty_greator_than_30.length,less_than_30.length]

} 

const confirmedData = {
  labels:['Greater than 60', 'Less than 60 and greater than 30','less than 30'],
  datasets: [{
    data: returnData(),
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
}
const deathData = {
  labels:['Greater than 60', 'Less than 60 and greater than 30','less than 30'],
  datasets: [{
    data: returnData(),
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
}
const recoveredData = {
  labels:['Greater than 60', 'Less than 60 and greater than 30','less than 30'],
  datasets: [{
    data: returnData(),
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
}
  return (
    <div className="PieCharts">
      <Container>
              <Doughnut data={confirmedData} />
      </Container>
        <Container>
              <Doughnut data={data} />
      </Container>
        <Container>
              <Doughnut data={data} />
      </Container>
    </div>
  );
}

export default PieCharts;
