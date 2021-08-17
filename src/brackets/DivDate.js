import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Drag from "./Drag";
import Rectangle from "./Rectangle";
const DivDate = (props) =>{
    return (
        <div >
                <Drag div={props.noDiv}/>
       </div>
               
    );
}

export default DivDate;