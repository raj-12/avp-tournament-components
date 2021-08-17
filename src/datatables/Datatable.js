// import './client.css'
const List=(props)=> {
  console.log(props)

  const changes =(e)=>{
    e.target.innerHtml= "Hells"
    console.log(e.target)
  } 

  return (
    <div className="" style={{margin:"5px"}}>
    <input type="text"></input>
       <div style={{overflow:"scroll" , height:"300px" , width:"80%"}}>
    <table class="table  table-success table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th onClick={changes} scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Status</th>
      <th scope="col">#</th>
      <th onClick={changes} scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Status</th>
      <th scope="col">#</th>
      <th onClick={changes} scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
 
  <tbody >
 
    <tr >
      <th scope="row">1</th>
      <td>Raj Tawari </td>
      <td>7028892501</td>
      <td><button type="button" class="btn btn-primary" onClick={()=>props.history.push('/Client')}>Proceed</button></td>
    </tr>
   
    <tr>
      <th scope="row">2</th>
      <td>Jacob huh</td>
      <td>6628892901</td>
      <td><button type="button" class="btn btn-primary" onClick={()=>props.history.push('/Client')}>Proceed</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Vivek Jain</td>
      <td >8023892571</td>
      <td><button type="button" class="btn btn-primary" onClick={()=>props.history.push('/Client')}>Proceed</button></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Pranil Omkar</td>
      <td>7034892501</td>
      <td><button type="button" class="btn btn-primary" onClick={()=>props.history.push('/Client')}>Proceed</button></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Sakshi more</td>
      <td>8428892701</td>
      <td><button type="button" class="btn btn-primary" onClick={()=>props.history.push('/Client')}>Proceed</button></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td >Jitesh Rathi</td>
      <td>9028842501</td>
      <td><button type="button" class="btn btn-primary" onClick={()=>props.history.push('/Client')}>Proceed</button></td>
    </tr>
    
    
  </tbody>
 
</table>
         </div>

    </div>
  );
}

export default List;
