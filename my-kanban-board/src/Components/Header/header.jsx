
import Logo from "./logo"
import './header.css';
import {useDispatch} from "react-redux";
import {  useSelector } from "react-redux";


import {addTasks} from "../../redux-store/kanbanStore";
const Header =({createTask})=>{
const board_name = useSelector((store)=>store.board.selectedBoardId)
const data = useSelector((store)=>store.kanban.kanbanData).find((item)=>item.id==board_name).columns

 const darkmode = useSelector((store)=>store.theme.isDarkMode)
 const addTask =()=>{


   if(data.length>0){createTask()}

 }
    
  return (
        
     <div className={`header ${darkmode&&"lightblack"}`}>
         <div className="logo">
            <Logo/>
         </div>
         <div className={`heading ${darkmode&&"lightblack"}`}>
            
              <div className="head_text">{board_name}</div>
              <div className="head_action">
              <button  className={`add_button ${data.length==0?'disableButton':'add_button'}`} onClick={addTask}>+ Add new task</button>
              </div>
         </div>

    </div>
     
 
       


        
    )
}
export default Header;