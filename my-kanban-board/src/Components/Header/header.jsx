
import Logo from "./logo"
import './header.css';
import { useState } from "react";
import {useDispatch} from "react-redux";
import {  useSelector } from "react-redux";


import {addTasks} from "../../redux-store/kanbanStore";

const Header =({createTask,popupDelete})=>{
const board_name = useSelector((store)=>store.board.selectedBoardId)
const data= useSelector((store)=>store.kanban.kanbanData).find((item)=>item.id==board_name)?.columns||[]

 const darkmode = useSelector((store)=>store.theme.isDarkMode)
 const addTask =()=>{


   if(data.length>0){createTask()}

 }
    
 const popup =()=>{

       if(board_name){
         popupDelete()
       }
 }
  return (
        
     <div className={`header ${darkmode&&"lightblack"}`}>
         <div className={`logo ${darkmode&&"lightblack"}`}>
            <Logo/>
         </div>
         <div className={`heading ${darkmode&&"lightblack"}`}>
            
              <div className="head_text">{board_name}</div>
              <div className="head_action">
              <button  className={`add_button ${data.length==0?'disableButton':'add_button'}`} onClick={addTask}>+ Add new task</button>
              <img  src="/dots.png" onClick={popup} style={{marginLeft:"1em"}} alt="dots" />
              </div>
         </div>

    </div>
     
 
       


        
    )
}
export default Header;