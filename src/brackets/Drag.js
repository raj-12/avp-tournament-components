import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Rectangle from "./Rectangle";

import styled from 'styled-components';

const MarginDiv = styled.div`
   margin-top:${props=>Number(props.noDiv)===8? "5px": Number(props.noDiv)===4 ?(props.index!==0)?`${120+50}px`:"120px":"300px"}
    `;



const Drag = (props) =>{
  
    const [empty,setEmpty] =useState([1,2,3,4,5,6,7,8]);
    const [players, setplayer] = useState(props.player);


    useEffect(()=>{
            // console.log(props.player)
            if(props.player.length<=props.noDiv  ){
                setplayer(props.player)
            }else{
                setplayer(props.player.splice(0,props.noDiv))
            }
          
    },[props.player])

    const handleOnDragEnd = (result)=>{

        if(!result.destination)return;
        const items =players;
        const [reorderedItem] = items.splice(result.source.index,1);
        items.splice(result.destination.index,0,reorderedItem);
        setplayer(items);
    }

    return (
        <div className="col-3" style={{margin:"2px", fontSize:"14px"}} >
        
        <div style={{padding:"5px"}}>FRIDAY | JULY 23RD  <hr style={{margin:"2px"}}></hr></div>
    <DragDropContext  onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="all" >
            {
                    (provided)=>(
                    <ul {...provided.droppableProps} ref={provided.innerRef} style={{padding:"0px"}}>
                    
                    {players.length!==0 && players.map(({id, first, second},index)=> {
                        return ( 
                        <Draggable key={id} draggableId={id} index={index}>
                        {(provided)=>(
                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                
                                {index%2===0?
                                <MarginDiv onClick={props.Event} id={id} noDiv={props.noDiv} index={index}>
                                #{id}<span style={{float:"right",}}>Court 04|12:35</span>
                                    <Rectangle  isBlack={false} first={first} second={second} value={index} Divs={props.Divs} />
                                    <br/>
                                </MarginDiv>
                                :
                                <div onClick={props.Event} id={id} >
                                    <Rectangle  isBlack={false} first={first} second={second} value={index} Divs={props.Divs}/>
                                    <br/>
                                </div>   
                                }  

                            </div>
                            )}
                        </Draggable>
                        )
                    })}

                    {empty.map((value,index)=>{
                            if(index<props.noDiv-players.length){
                                if(index%2===0){
                                    return ( 
                                        <MarginDiv onClick={props.Event} noDiv={props.noDiv} index={index}>
                                        #{index}<span style={{float:"right",}}>Court 04|12:35</span>
                                            <Rectangle isBlack={true} value={index} Divs={props.Divs}/>
                                            <br/>
                                        </MarginDiv>  
                                        )
                                }else{
                                   return (
                                 <div onClick={props.Event}  >
                                    <Rectangle  isBlack={true}  value={index} Divs={props.Divs}/>
                                    <br/>
                                </div> )  
                                }
                              
                            }
                    })}

                    </ul>)
            }
            </Droppable>
    </DragDropContext> 
   
    </div>);
}

export default Drag;