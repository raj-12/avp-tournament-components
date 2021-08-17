import React, { useState ,useEffect} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import './data.css'

const rowStyle = { background: 'white' ,margin:"0px",padding:'0px', fontSize:"12px" };

// set background colour on even rows again, this looks bad, should be using CSS classes
const getRowStyle = params => {
    console.log(params )
    if (params.node.rowIndex % 2 === 1) {
        return { background: 'light-orange' };
    }
      
};
   
const Data = () => {

    const rowData = [
        {Fruit: "Toyota", model: "Celica", price: 35000,Type : 3,place : "Mumbai"},
        {Fruit: "Ford", model: "Mondeo", price: 32000,Type : 7,place : "Pune"},
        {Fruit: "Porsche", model: "Boxter", price: 72000,Type : 1,place : "Delhi"},
        {Fruit: "Apple", model: "Celica", price: 45000,Type : 5,place : "Akola"},
        {Fruit: "Orange", model: "Mondeo", price: 22000,Type : 9,place : "Raipur"},
        {Fruit: "Graphs", model: "Boxter", price: 19000,Type : 4,place : "Nagpur"},
        {Fruit: "Potato", model: "Celica", price: 73000,Type : 3,place : "Lonavla"},
        {Fruit: "Tomato", model: "Mondeo", price: 26700,Type : 1,place : "Amravati"},
        {Fruit: "Chilli", model: "Boxter", price: 96000,Type : 8,place : "Chennai"}
    ];

  const [value, setValue] = useState(rowData);
  const [input, setInput] =useState("");

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

        <div class="input-group" style={{width:"150px", marginLeft:"20px",paddingTop:"20px"}}>
                    <div class="form-outline" style={{float:"left"}} >
                        <input type="search" value={input} onChange={valueChange} id="form1" class="form-control" placeholder="Search..." />
                    </div>
        </div>

       {/* <div style={{marginBottom:"20px",marginLeft:"20px"}}>
            <label >Search here : </label>
            <span><i class="fa fa-search" aria-hidden="true"></i></span>

            <input   type="text" placeholder="Search..." value={input} onChange={valueChange}></input>
       </div> */}
       
       <div className="ag-theme-alpine"  style={{height: 400, width: "600" , margin:"20px", fontSize:"12px"}}>
           <AgGridReact rowStyle={rowStyle} getRowStyle={getRowStyle}
               rowData={value} >
               <AgGridColumn  field="Fruit"  sortable={ true } ></AgGridColumn>
               <AgGridColumn  field="model" sortable={ true }></AgGridColumn>
               <AgGridColumn  field="price" sortable={ true } ></AgGridColumn>
                <AgGridColumn field="place" sortable={ true }  ></AgGridColumn>
               <AgGridColumn  field="Type" sortable={ true }></AgGridColumn>
               <AgGridColumn  field="model" sortable={ true } ></AgGridColumn>
                <AgGridColumn field="Fruit" sortable={ true }  ></AgGridColumn>
               <AgGridColumn  field="model" sortable={ true }></AgGridColumn>
               <AgGridColumn  field="price" sortable={ true } ></AgGridColumn>
           </AgGridReact>
       </div>
       </div>
   );
};

export default Data;