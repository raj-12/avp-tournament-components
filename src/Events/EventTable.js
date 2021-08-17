// const getAllEvent =()=>{
//     const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmFud2lucy5pblwvYXBpXC9sb2dpblByb21vdGVyIiwiaWF0IjoxNjI4ODI4MDc0LCJleHAiOjE2Mjk0MzI4NzQsIm5iZiI6MTYyODgyODA3NCwianRpIjoiVnprdE5MVWNINWhmOFZkMyIsInN1YiI6MTAwMDA5MTgxLCJwcnYiOiIwZDNjYTZiNGM4ODM5NTc4ZWI3NjU4NGE5MDljNWIzMzEzMWU3MjE1IiwiaWQiOjEwMDAwOTE4MSwiZW1haWwiOiJqYW1lc2JvbmQxMDFAZ21haWwuY29tIn0.pLPx8v7FN_PzMT-Q9TdiUjUDiRqncDPOjQ0ewvJAUhM";

//     axios({
//         method:"get",
//         url:"https://fanwins.in/api/getAllTournaments",
//         headers:{
//             "Authorization":"Bearer " + token
//         }
//     }).then(response=>{
//         console.log(response.data);
//     });
        
// }

// useEffect(()=>{
//     console.log()
//     getAllEvent();
// },[])



import React, { useState ,useEffect} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// import './manager.css'
import axios from 'axios';
// import blackImage from './blank.png';

import { CircularProgress } from 'material-ui';
import { Component } from 'react';
// jamesbond101@gmail.com


const rowStyle = { background: 'white' ,margin:"0px",padding:'0px', fontSize:"12px" };

// set background colour on even rows again, this looks bad, should be using CSS classes
const getRowStyle = params => {
    // console.log(params )
    if (params.node.rowIndex % 2 === 1) {
        return { background: 'light-orange'};
    }
      
};
   
class CustomNoRowsOverlay extends Component {
    render() {
        return (
            <div className="ag-overlay-loading-center" style={{backgroundColor: 'lightcoral', height: '9%'}}>
                <i className="far fa-frown"> {this.props.noRowsMessageFunc()}</i>
            </div>
        );
    }
 }


const AllEvents = (props) => {

    const [value, setValue] = useState([]);
    const [input, setInput] =useState("");
    const [rowData , setData] =useState([]);
    
    const loadingCellRendererParams= { loadingMessage: 'One moment please...' };
    
    const columnDefs = [

            //{
            // headerName : "", field:"profile_pic",maxWidth :80,
            //     cellRendererFramework:(params)=>params.value!=='images/promoters/'?
            //         (<div><img alt=" " style={{width:"40px",height:"40px",borderRadius:20}} src={"https://fanwins.in/"+params.value}></img></div>)
            //         :(<div><img alt=" " style={{width:"40px",height:"40px",borderRadius:20}} src={blackImage}></img></div>)},
        
        {headerName:"Name",maxWidth :200, sortable:true , field:"name"},
        {headerName:"Address",maxWidth :500, sortable:true ,field:"address"},
        {headerName:"Start Date",maxWidth :150, sortable:true ,field:"start_date"},
        {headerName:"Status",maxWidth :150, sortable:true ,field:"status_lable"},
      

    ]
    const getPromoterEvents =()=>{
        const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmFud2lucy5pblwvYXBpXC9sb2dpblByb21vdGVyIiwiaWF0IjoxNjI5MTc4ODA4LCJleHAiOjE2Mjk3ODM2MDgsIm5iZiI6MTYyOTE3ODgwOCwianRpIjoiWUNGY1A1RTJJT0Q2d244dyIsInN1YiI6MTAwMDA5NTY3LCJwcnYiOiIwZDNjYTZiNGM4ODM5NTc4ZWI3NjU4NGE5MDljNWIzMzEzMWU3MjE1IiwiaWQiOjEwMDAwOTU2NywiZW1haWwiOiJkYW1vbkBnbWFpbC5jb20ifQ.IlfSrNRZQRiBLrv864TKGCp-P9Bp6sllK0uU_rGIQe0";
  
        axios({
            method:"get",
            url:"https://fanwins.in/api/getAllTournaments",
            headers:{
                "Authorization":"Bearer " + token
            }
        }).then(response=>{
            console.log(response.data.tournaments);
            setValue(response.data.tournaments)
            setData(response.data.tournaments);
        });
            
    }

    useEffect(()=>{
        console.log()
        getPromoterEvents();
    },[])

  const getKeyByValue = (object, string) =>{
             const value = string.toString().toLowerCase()
             const s = Object.values(object)

            for(let val=0;val<s.length;val++){
                    if(s[val].toString().toLowerCase().includes(value)){return true;}
            }
   return false;
  }

  useEffect(() => {
     const Update=()=>{
        if(input===''){  
            setValue(rowData);
        }else{
            var Data =[];
            rowData.map((object) => {
                if(getKeyByValue(object,input)){Data.push(object)}         
            })
            setValue(Data);
        }
     }
     Update();   
  }, [input])

  const valueChange=(e)=>{
    setInput(e.target.value)
  }

  
   return (
       <div class="data">

        <div class="input-group" style={{marginLeft:"20px",paddingTop:"20px"}}>
                    <div class="form-outline" style={{float:"left"}} >
                        <input style={{borderRadius:"20px",outline:"none" , width:"200px"}} type="search" value={input} onChange={valueChange} id="form1" class="form-control" placeholder="Search..." />
                    </div>
                    <br></br>
                           {/* <CircularProgress size={40}
        thickness={4}/> */}

        </div>

       <div className="ag-theme-alpine"  style={{height: 400, width: 650 , margin:"20px", fontSize:"12px" ,fontWeight:"500"}}>
           <AgGridReact 
                    rowStyle={rowStyle}   
                    getRowStyle={getRowStyle} 
                    columnDefs={columnDefs}
                    rowData={value}  
                    loadingCellRenderer={<CircularProgress/>}
                    loadingCellRendererParams={loadingCellRendererParams}
                    onRowSelected={(e)=>console.log(e)}
                    onRowClicked={(e) => {props.history.push(  { 
                                            pathname: '/event',
                                            state: {id:e.data.id}
                                            });console.log(e.data.id) } }> 

                {/* <AgGridColumn    field="profile_pic"  ></AgGridColumn>
                <AgGridColumn  maxWidth="50"   field="first_name"  ></AgGridColumn>
                <AgGridColumn maxWidth="50" field="last_name" ></AgGridColumn>
                <AgGridColumn maxWidth="50" field="avp_id"  ></AgGridColumn>
                <AgGridColumn maxWidth="50" field="email_id"   ></AgGridColumn>
                <AgGridColumn maxWidth="50" field="city"></AgGridColumn> */}
            
             {/* <AgGridColumn  maxWidth="50" field="status" sortable={ true }  ></AgGridColumn>  */}
              
           </AgGridReact>
       </div>
   




       </div>
   );
};

export default AllEvents;
