
import React ,{useState,useEffect} from 'react';

import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import {COVID_API,STATEWISE_API} from 'constants/apis' ;
import {REFRESH_TIME} from 'constants/AllConstants' ;
import Header from 'components/Header';
import Statistics from 'components/Statistics';
import StatewiseTable from 'components/StatewiseTable';
import GraphComponent from 'components/GraphComponent';



 const  MainComponent = () =>  {
 	  const [overallData, setOverallData] = useState({});

 	  const [lastUpdateTime,setLastUpdateTime] = useState(new Date());
      const [stateWiseData,setstateWiseData] = useState([]);
       const [stateDistrictWiseData,setstateDistrictWiseData] = useState({});
       const [dailyStats,setDailyStats] = useState([]);
       const[loading,setLoader] = useState(true);
       // const [rawData,setRawData] = useState([])

 	  const getCovidData = () => {
       axios
         .get(COVID_API)
           .then(response => {
           	
            const responseData = response.data.statewise.filter(elm=> elm.state === 'Total')
            setOverallData(responseData[0])

            const lastTime  = responseData[0].lastupdatedtime
            setLastUpdateTime(lastTime)
          
            const stateData = response.data.statewise.filter(elm => elm.state !== 'Total' && elm.confirmed !== '0')
            setstateWiseData(stateData)

            const dailyStats = response.data.cases_time_series;
            setDailyStats(dailyStats);

             })
            .catch(error => {
                    console.log(error)
                    });
 	  }
 	  const getStateWiseData = () => {
 	  	   axios
         .get(STATEWISE_API)
           .then(response => {
            const sdData = response.data
            setstateDistrictWiseData(sdData)
             })
            .catch(error => {
                    console.log(error)
                    });
 	  }


  useEffect(() => {
  	getCovidData(); 
  	getStateWiseData();
 
  // refresh the data every 5 minutes
  	 const interval = setInterval(() => {
    getCovidData()
    getStateWiseData();
  }, REFRESH_TIME);
  	  return () => clearInterval(interval);
  },[]);


  
    return (
      <div className="MainComponent">

        {
          loading ? ( 
          <ClipLoader
            size={150}
            color={"#123abc"}
            loading={loading}
          />):(  <Container>
            <Row>
            <Col md={12} xs={12}>
           <Header lastUpdateTime={lastUpdateTime} />
           </Col>
            <Col md={6} xs={12}>
              <Statistics overallData={overallData}  delta={overallData} />
              <StatewiseTable  stateWiseData={stateWiseData} stateDistrictWiseData={stateDistrictWiseData}/>
            </Col>
            <Col md={6} xs={12}>
            <GraphComponent dailyStats={dailyStats} /> 
            </Col>
            <Col md={6} xs={12}>
         
            </Col>
            </Row>
        </Container>)
        }
      
      </div>
    );
  
  
}

export default MainComponent;
