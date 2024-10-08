import './board.css';
import Kanban from './kanban';
import {useDispatch} from "react-redux";
import { addColumn,removeItem } from "../../redux-store/kanbanStore";
import kanbandata from '../../redux-store/dummy'
import { useSelector } from "react-redux";
import { useState } from 'react';

const Board =(props)=>{
    const boardId = useSelector((store)=>store.board.selectedBoardId)
    const dispatch= useDispatch();
   
   let data=useSelector((store)=>store.kanban.kanbanData).find((item)=>item.id==boardId)?.columns|| []

   const darkmode = useSelector((store)=>store.theme.isDarkMode)
    const addColumns =()=>{

        props.createBoard()

    }
console.log("board->",boardId);
  return (
    <div className={`board_body ${data.length==0&&'center'}`}>
        <div className="kanban_board">
        <Kanban data = { data }/>
        </div>
        {data.length!=0 &&   <div className={`create_column `}>
        <div className={`Column_button ${darkmode&&"lightblack"}`}onClick={addColumns}>+ Add new column</div>
        </div>
}

       {data.length==0 &&  boardId &&
       <div className={`message-box ${ props.sidebar ==false&& "m1"}`}>
      <div className={`message ${darkmode&&"white"}`}>
       This board is empty. Create a new column to get started.
       </div>
      
       <div className="create_column">
        <button  className={`add_Columnbutton`} onClick={addColumns}>+ Add new column</button>
        
        </div>
        </div>
      } 
      {
        !boardId && <div style={{marginLeft:"5em"}}> Create a new board to get started </div>

      }

    </div>
    )
}
export default Board;