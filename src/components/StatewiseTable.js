import React  from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import ReactGA from 'react-ga'
import DistictWiseView from'components/DistictWiseView'
import PercentageRender from 'components/PercentageRender'
import {isMobileOnly} from 'react-device-detect';

const MOBILE_WIDTH=55;
const MOBILE_MAX_WIDTH = undefined;
const MOBILE_WIDTH_STATE_COL=60


 const  StatewiseTable = (props) =>  {

 	const columns = [{
 		Header: isMobileOnly?'S/U':'State/UT',
		accessor: 'state' ,
		width:isMobileOnly?MOBILE_WIDTH_STATE_COL:undefined,
		maxWidth:isMobileOnly?MOBILE_MAX_WIDTH:undefined,
	  }, {
	    Header: isMobileOnly?'C':'Confirmed',
	    id:"Confirmed",
	    accessor: c => Number(c.confirmed),
		className:'text-right',
		width:isMobileOnly?MOBILE_WIDTH:undefined,
		maxWidth:isMobileOnly?MOBILE_MAX_WIDTH:undefined,
	    Cell: ({original}) => <span><span className="confirmed-delta">{original.deltaconfirmed!=='0'?(<>+{original.deltaconfirmed}</>):('')}</span>{" "}{original.confirmed}</span> 
	  }, {
	    Header: isMobileOnly?'A':'Active', 
	     id: 'Active', 
		 accessor: c => Number(c.active),
		 width:isMobileOnly?MOBILE_WIDTH:undefined,
		 maxWidth:isMobileOnly?MOBILE_MAX_WIDTH:undefined,
	     className:'text-right',
	  },{
	    Header: isMobileOnly?'R':'Recovered',
	    accessor: c => Number(c.recovered),
	    id:'Recovered',
		 className:'text-right',
		 width:isMobileOnly?MOBILE_WIDTH:undefined,
		 maxWidth:isMobileOnly?MOBILE_MAX_WIDTH:undefined,
	      Cell: ({original}) => <span><PercentageRender select={original.recovered} total={original.confirmed}/>{" "}{" "}{original.recovered}  </span> 
	  },{
	    Header: isMobileOnly?'D':'Deceased',
	    id:'Deceased',
	      accessor: c => Number(c.deaths),
		 className:'text-right',
		 width:isMobileOnly?MOBILE_WIDTH:undefined,
		 maxWidth:isMobileOnly?MOBILE_MAX_WIDTH:undefined,
	     Cell: ({original}) => <span><PercentageRender select={original.deaths} total={original.confirmed}/>{" "}{" "}{original.deaths}   </span> 
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
