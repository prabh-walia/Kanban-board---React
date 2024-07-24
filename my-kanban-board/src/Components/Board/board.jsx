import './board.css';
import Kanban from './kanban';
import {useDispatch} from "react-redux";
import { addColumn,removeItem } from "../../redux-store/kanbanStore";
import kanbandata from '../../redux-store/dummy'
import { useSelector } from "react-redux";
const Board =(props)=>{
    const boardId = useSelector((store)=>store.board.selectedBoardId)
    const dispatch= useDispatch();
    const data = useSelector((store)=>store.kanban.kanbanData).find((item)=>item.id==boardId).columns
    
    const addColumns =()=>{
        props.createBoard()

    }

  return (
    <div className={`board_body ${data.length==0&&'center'}`}>
        <div className="kanban_board">
        <Kanban data = { data }/>
        </div>
        {data.length!=0 &&   <div className="create_column">
        <div className="Column_button" onClick={addColumns}>+ Add new column</div>
        </div>
}

       {data.length==0 && 
       <div className={`message-box ${ props.sidebar ==false&& "m1"}`}>
      <div className="message">
       This board is empty. Create a new column to get started.
       </div>
      
       <div className="create_column">
        <button  className="add_Columnbutton" onClick={addColumns}>+ Add new column</button>
        
        </div>
        </div>
      }

    </div>
    )
}
export default Board;