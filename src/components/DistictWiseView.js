import React ,{useState,useEffect} from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'





 const  DistictWiseView = (props) =>  {

 const [districtData,setdistrictData]  = useState([])

 	const columns = [{
 		Header:'District',
 		accessor:'district'
 	},{
 		Header:'Confirmed',
 		accessor:'confirmed'
 	}]


useEffect(() => {
	let simplifiedData= []
    const rawData = Object.values(props.stateDistrictWiseData)[0]
 for (var key in rawData) {
 	let ele = {}
    if (rawData.hasOwnProperty(key)) {
        ele.district = key ;
        ele.confirmed = rawData[key].confirmed;
         simplifiedData.push(ele)
    }
}
setdistrictData(simplifiedData)
  },[props.stateDistrictWiseData]);


  return (
    <div className="DistictWiseView">
        
        <ReactTable
		    data={districtData}
		    columns={columns}
		     showPagination ={false}
			 className="-striped -highlight"
			 pageSize={districtData.length}
		  />
         
    </div>
  );
}

export default DistictWiseView;
