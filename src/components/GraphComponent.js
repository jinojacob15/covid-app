import React ,{useState,useEffect} from 'react';
import { Container } from 'reactstrap';
import {Line} from 'react-chartjs-2';


 const  GraphComponent = (props) =>  {

 	const [labels,setLabel]=useState([])
 	const[graphData,setGraphData] = useState([]) 

 	useEffect(() => {
 		const dailyData = props.dailyStats;
 		const labels = dailyData.map(every => every.date)
 		const graphData = dailyData.map(every => every.dailyconfirmed)
 		setLabel(labels);
 		setGraphData(graphData);
   
  },[props.dailyStats]);

const data = {
  labels: [...labels],
  datasets: [
    {
      label: 'cases resported',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [...graphData]
    }
  ]
};

  return (
    <div className="GraphComponent">
      <Container>
           <Line data={data} />
        </Container>
    </div>
  );
}

export default GraphComponent;
