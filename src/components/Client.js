import { useState } from 'react';

import Call from './Call';
import './client.css'
import Toggle from './toggle';
const Client=(props)=> {
  console.log(props)

const [isCalling , setCalling] = useState(false);
const [array, setArray] = useState([1,2,3,4,5,6])


  return (
    <div className="">
    <div className="col-12" style={{padding:"20px", display:"flex"}}>
                <h5 className="col-10 text-left" style={{marginblockStart:"0px"}}>Client Name : Raj Tawari</h5> 
                <button  type="button" class=" btn btn-primary"  onClick={()=>{props.history.push('/call'); setArray([...array,1])}}>Call</button>
        </div>
        <div className="col-9"  style={{ backgroundColor :"white" ,margin:"10px",padding:"10px"}}>
            <h6>Loan A/c No. 12345678435345 </h6>
            <h6>Contact No. 7028892501 </h6>
          
        </div>

       
{/* <div style={{margin:"5px"}}>
<table class="table table-success table-striped" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Call No. </th>
      <th scope="col">Date-Time</th>
    
    </tr>
  </thead>
  <tbody >
    <tr >
      <th  scope="row">1</th>
      <td value="sfbk">Call-1</td>
      <td>27/07/2021-17:00PM</td>
      <td ><i style={{padding:"10px"}} class="fa fa-volume-up" aria-hidden="true"></i></td>
    </tr>
  
   
    <tr>
      <th scope="row">2</th>
      <td>Call-2</td>
      <td>27/07/2021-17:00PM</td>
      
      <td><i style={{padding:"10px"}} class="fa fa-volume-up volume" aria-hidden="true"></i></td>    </tr>
    <tr>
        <th scope="row">3</th>
        <td >Call-3</td>
        <td>27/07/2021-17:00PM</td>
    
        <td><i style={{padding:"10px"}} class="fa fa-volume-up volume" aria-hidden="true"></i></td>    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Call-4</td>
      <td>27/07/2021-17:00PM</td>     
      <td><i style={{padding:"10px"}} class="fa fa-volume-up volume" aria-hidden="true"></i></td>    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Call-5</td>
      <td>27/07/2021-17:00PM</td>      
      <td><i style={{padding:"10px"}} class="fa fa-volume-up volume" aria-hidden="true"></i></td>    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Call-6</td>
      <td>27/07/2021-17:00PM</td>     
      <td><i style={{padding:"10px"}} class="fa fa-volume-up volume" aria-hidden="true"></i></td>    </tr>
    
  </tbody>
</table>


</div>
<h1></h1> */}

       
            <Toggle array={array}/>

            {/* <Call/> */}

    </div>
  );
}

export default Client;
