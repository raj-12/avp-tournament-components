
import './rectangle.css'
import person from '../person.jpg';
import { DatePicker } from 'antd';
import { useEffect } from 'react';
import styled from 'styled-components';

 

const RectangleStyles = styled.div`
    width: 288px;
    height: 60px;
    padding: 0 0px 0 0;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    `;


const Rectangle = (props)=>{
    useEffect(() => {
      console.log("Reactangle")
    }, [props.first])

    return (
        <div>

        { props.isBlack===false ?
             <RectangleStyles className="col-12 row">
                <div className="col-1 class1" id="class1">
                     1
                </div>
                <div className="col-11 row " >
                    <div className="col-4 text-center" style={{marginTop:"10px", padding:"0px"}}>
                        <img className="img-oval" alt="" src={person}></img>
                        <img className="img-oval " alt="" src={person}></img>
                    </div>

                    <div className="col-3" style={{padding:"0px",marginTop:"10px",}}>
                        <h6>{props.first}</h6>
                        <h6>{props.second}</h6>
                    </div>

                    <div className="col-5 row" style={{padding:"9px", marginLeft: "10px" }}>
                        <input className="col-3 inputs"  maxlength="2" type="text" placeholder="00" />-
                        <input className="col-3 inputs"  maxlength="2" type="text" placeholder="00"/>-
                        <input className="col-3 inputs"  maxlength="2" type="text" placeholder="00"/>
                    </div>

                </div>
            </RectangleStyles>
          
            :
          
            <RectangleStyles className="col-12 row">
            <div className="col-1 class1" id="class1">
                
            </div>
            <div className="col-11 row " >
                <div className="col-4 text-center" style={{marginTop:"10px", padding:"0px"}}>
                   
                </div>

                <div className="col-3" style={{padding:"0px",marginTop:"10px",}}>
                  
                </div>

                <div className="col-5 row" style={{padding:"9px", marginLeft: "10px" }}>
                    {/* <input className="col-3 inputs"  maxlength="2"  type="text" placeholder="00" />-
                    <input className="col-3 inputs"  maxlength="2" type="text" placeholder="00"/>-
                    <input className="col-3 inputs"   maxlength="2" type="text" placeholder="00"/> */}
                </div>

            </div>
            </RectangleStyles>
            }
        
        </div>
    );
}

export default Rectangle;