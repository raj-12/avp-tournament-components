 import { DatePicker } from 'material-ui';
import Rectangle from './Rectangle';
import DivDate from './DivDate';
import Drag from './Drag';
import { useEffect, useState } from 'react';
 
 
 
const Main = () =>{
  
    var  div1= [
        {
            id: "123",
            first:"Raj G.",
            second : "Ganesh j.",
        },
        {
            id: "124",
            first:"jayesh G.",
            second : "Ganesh j.",
        }
        ,
        {
            id: "125",
            first:"harshit G.",
            second : "Ganesh j.",
        }
        ,
        {
            id: "126",
            first:"Shantu G.",
            second : "Ganesh j.",
        },
        {
            id: "127",
            first:"Neha G.",
            second : "Ganesh j.",
        },
        {
            id: "128",
            first:"Smart G.",
            second : "Ganesh j.",
        },
        {
            id: "129",
            first:"Toari G.",
            second : "Ganesh j.",
        },
        {
            id: "130",
            first:"Tawari G.",
            second : "Ganesh j.",
        }
        ];
    var div2=  [ 
        //     {
        //     id: "123",
        //     first:"Raj G.",
        //     second : "Ganesh j.",
        // },
        // {
        //     id: "153",
        //     first:"Raj G.",
        //     second : "Ganesh j.",
        // },
        // {
        //     id: "124",
        //     first:"jayesh G.",
        //     second : "Ganesh j.",
        // }
        
        ];
    var div3=  [ 
        //     {
            
        //     id: "135",
        //     first:"Raj G.",
        //     second : "Ganesh j.",
        // },
        // {
        //     id: "136",
        //     first:"jayesh G.",
        //     second : "Ganesh j.",
        // }
        ];
    
    const [divtwo, setDiv] = useState(div2);
    
    useEffect(
        ()=>{
        console.log("Check")
    },[divtwo])

    const Div2Event =(e)=>{
       const rand=Math.floor(Math.random() * Number(e.target.id)%2);
       const values=div1.find(obj=>{return Number(obj.id)===Number(e.target.id)+rand});
       console.log(values);
       setDiv([...divtwo,values]);
    }

    return (
        <>
      <div className="row" style={{margin:"4px", backgroundColor:"#E0E0E0"}}>
                <Drag noDiv={8} player={div1} Divs={1} Event={Div2Event}/>
                <Drag  noDiv={4} player={divtwo} Divs={2} Event={Div2Event}/>
                <Drag noDiv={2} player={div3} Divs={3} Event={Div2Event}/>
      </div>
      </>
    );
}

export default Main;