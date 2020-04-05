import React  from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import ReactGA from 'react-ga'
import DistictWiseView from'components/DistictWiseView'



 const  StatewiseTable = (props) =>  {

 

 	const columns = [{
 		Header: 'State/UT',
	    accessor: 'state' ,
        headerClassName:'sticky'
	  }, {
	    Header: 'Confirmed',
	    id:"Confirmed",
	    accessor: c => Number(c.confirmed),
	    className:'text-right',
	    headerClassName:'sticky',
	    Cell: ({original}) => <span><span className="confirmed-delta">{original.deltaconfirmed!=='0'?(<>+{original.deltaconfirmed}</>):('')}</span>{" "}{original.confirmed}</span> 
	  }, {
	    Header: 'Active', 
	     id: 'Active', 
	     accessor: c => Number(c.active),
	     className:'text-right',
	     headerClassName:'sticky'
	  },{
	    Header: 'Recovered',
	    accessor: c => Number(c.recovered),
	    id:'Recovered',
	     className:'text-right',
	     headerClassName:'sticky'
	  },{
	    Header: 'Deceased',
	    id:'Deceased',
	      accessor: c => Number(c.deaths),
	     className:'text-right',
	     headerClassName:'sticky'
	  }
 	]

 
  return (
    <div className="StatewiseTable">
      
         <ReactTable
             data={props.stateWiseData}
			 columns={columns}
			 showPagination ={false}
			 className="-striped -highlight"
			 pageSize={props.stateWiseData.length}
			  defaultSorted={[
		            {
		              id: "Confirmed",
		              desc: true
		            }
          ]}
			   SubComponent={row => {
							   	ReactGA.event({
							    category: 'DISTRICT-WISE',
							    action: row.original.state,
							  });

					    return (
					      <div>
					      <DistictWiseView  stateDistrictWiseData={props.stateDistrictWiseData[row.original.state]}/>
	
					      </div>
					    );
					  }}
                />
         
    </div>
  );
}

export default StatewiseTable;
