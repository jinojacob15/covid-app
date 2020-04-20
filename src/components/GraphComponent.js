import React ,{useState,useEffect} from 'react';
import { Container } from 'reactstrap';
import {Line} from 'react-chartjs-2';
// import PieCharts from 'components/PieCharts'

 const  GraphComponent = (props) =>  {

 	const [confirmedLabels,setconfirmedLabels]=useState([])
 	const[graphConfirmedData,setgraphConfirmedData] = useState([]) 

 	const[graphDeceasedData,setgraphDeceasedData] = useState([]) 
 	
 	const[graphrecoveredData,setgraphrecoveredData] = useState([]) 

 	useEffect(() => {
 		const dailyData = props.dailyStats;
 		const labels = dailyData.map(every => every.date)
 		const graphData = dailyData.map(every => every.dailyconfirmed)
 		setconfirmedLabels(labels);
 		setgraphConfirmedData(graphData);
 		setgraphDeceasedData(dailyData.map(every => every.dailydeceased))
 		setgraphrecoveredData(dailyData.map(every => every.dailyrecovered))

   
  },[props.dailyStats]);

const confirmedProps = {
  labels: [...confirmedLabels],
  datasets: [
    {
      label: 'Confirmed',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#ff1a1a',
      borderColor: '#ff1a1a',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#ff1a1a',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#ff1a1a',
      pointHoverBorderColor: '#ff1a1a',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [...graphConfirmedData]
    }
  ]
};

const deceasedProps = {
  labels: [...confirmedLabels],
  datasets: [
    {
      label: 'Deaths reported',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#808080',
      borderColor: '#808080',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#808080',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#808080',
      pointHoverBorderColor: '#808080',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [...graphDeceasedData]
    }
  ]
};
const recoveredProps = {
  labels: [...confirmedLabels],
  datasets: [
    {
      label: 'Daily recoveries',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#2eb82e',
      borderColor: '#2eb82e',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#2eb82e',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#2eb82e',
      pointHoverBorderColor: '#2eb82e',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [...graphrecoveredData]
    }
  ]
};



  return (
    <div className="GraphComponent">
      <Container>
           <Line data={confirmedProps}   />
        </Container>
         <Container>
           <Line data={deceasedProps}   />
        </Container>
         <Container>
           <Line data={recoveredProps}   />
        </Container>
   
    </div>
  );
}

export default GraphComponent;
