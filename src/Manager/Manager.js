import React, { useState ,useEffect} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import './manager.css'
import axios from 'axios';
import blackImage from './blank.png';

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


const Manager = (props) => {

    // var rowData = [
    //     {Fruit: "Toyota", model: "Celica", price: 35000,Type : 3,place : "Mumbai"},
    //     {Fruit: "Ford", model: "Mondeo", price: 32000,Type : 7,place : "Pune"},
    //     {Fruit: "Porsche", model: "Boxter", price: 72000,Type : 1,place : "Delhi"},
    //     {Fruit: "Apple", model: "Celica", price: 45000,Type : 5,place : "Akola"},
    //     {Fruit: "Orange", model: "Mondeo", price: 22000,Type : 9,place : "Raipur"},
    //     {Fruit: "Graphs", model: "Boxter", price: 19000,Type : 4,place : "Nagpur"},
    //     {Fruit: "Potato", model: "Celica", price: 73000,Type : 3,place : "Lonavla"},
    //     {Fruit: "Tomato", model: "Mondeo", price: 26700,Type : 1,place : "Amravati"},
    //     {Fruit: "Chilli", model: "Boxter", price: 96000,Type : 8,place : "Chennai"}
    // ];

    const [value, setValue] = useState([]);
    const [input, setInput] =useState("");
    const [rowData , setData] =useState([]);
    
    const loadingCellRendererParams= { loadingMessage: 'One moment please...' };
    
    const columnDefs = [

        {headerName : "", field:"profile_pic",maxWidth :80,
                cellRendererFramework:(params)=>params.value!=='images/promoters/'?
                    (<div><img alt=" " style={{width:"40px",height:"40px",borderRadius:20}} src={"https://fanwins.in/"+params.value}></img></div>)
                    :(<div><img alt=" " style={{width:"40px",height:"40px",borderRadius:20}} src={blackImage}></img></div>)},
        
        {headerName:"FIRST",maxWidth :150, sortable:true , field:"first_name"},
        {headerName:"LAST",maxWidth :150, sortable:true ,field:"last_name"},
        {headerName:"ID",maxWidth :120, sortable:true ,field:"avp_id"},
        {headerName:"Email id",maxWidth :300, sortable:true ,field:"email_id"},
        {headerName:"LOCATION",maxWidth :150,sortable:true , field:"city"},
        {headerName:"STATUS",maxWidth :120,sortable:true ,  field:"status"},

    ]
    const getPromoterMangers =()=>{
        const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmFud2lucy5pblwvYXBpXC9sb2dpblByb21vdGVyIiwiaWF0IjoxNjI4NTcyNTkxLCJleHAiOjE2MjkxNzczOTEsIm5iZiI6MTYyODU3MjU5MSwianRpIjoidVdwTFIzYTVWcXNsdncycSIsInN1YiI6MTAwMDA5MTgxLCJwcnYiOiIwZDNjYTZiNGM4ODM5NTc4ZWI3NjU4NGE5MDljNWIzMzEzMWU3MjE1IiwiaWQiOjEwMDAwOTE4MSwiZW1haWwiOiJqYW1lc2JvbmQxMDFAZ21haWwuY29tIn0.-svhO8X35reOCg2nY-7aWM8DnZ6tVlsUg8tYhaPhd4s";
  
        axios({
            method:"get",
            url:"https://fanwins.in/api/getAllPromoterManagers",
            headers:{
                "Authorization":"Bearer " + token
            }
        }).then(response=>{
            console.log(response.data.managersList);
            setValue(response.data.managersList)
            setData(response.data.managersList);
        });
            
    }

    useEffect(()=>{
        console.log()
        getPromoterMangers();
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

       <div className="ag-theme-alpine"  style={{height: 400, width: 1000 , margin:"20px", fontSize:"12px" ,fontWeight:"500"}}>
           <AgGridReact 
                    rowStyle={rowStyle}   
                    getRowStyle={getRowStyle} 
                    columnDefs={columnDefs}
                    rowData={value}  
                    loadingCellRenderer={<CircularProgress/>}
                    loadingCellRendererParams={loadingCellRendererParams}
                    onRowSelected={(e)=>console.log(e)}
                    onRowClicked={(e) => {props.history.push(  { 
                                            pathname: '/managers',
                                            state: {details:e.data}
                                            });console.log(e.data) } }> 

                <AgGridColumn    field="profile_pic"  ></AgGridColumn>
                <AgGridColumn  maxWidth="50"   field="first_name"  ></AgGridColumn>
                <AgGridColumn maxWidth="50" field="last_name" ></AgGridColumn>
                <AgGridColumn maxWidth="50" field="avp_id"  ></AgGridColumn>
                <AgGridColumn maxWidth="50" field="email_id"   ></AgGridColumn>
                <AgGridColumn maxWidth="50" field="city"></AgGridColumn>
            
             <AgGridColumn  maxWidth="50" field="status" sortable={ true }  ></AgGridColumn> 
              
           </AgGridReact>
       </div>
   




       </div>
   );
};

export default Manager;