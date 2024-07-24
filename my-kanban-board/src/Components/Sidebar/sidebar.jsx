import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import './sidebar.css'
import ToggleButton from './toggle';
import {selectBoard} from "../../redux-store/boardStore"
import BoardModal from '../Modal/Modal';


const Sidebar =(props)=>{
    const board = useSelector((store)=>store.board.selectedBoardId)

  const data = useSelector((store)=>store.kanban.kanbanData)
  const dispatch = useDispatch();
const createBoard =()=>{
  console.log("true");
props.createBoard()
props.setTitle("Create Board")
props.create(true)

}
    return (
        <div className="sideBar">
            <div style={{padding:"1.6em"}}> All Boards ({data.length})</div>


    {data.map((item) => {
   
       

        return (
            <>
          <div className="menubar" key={item.id}>
                <div
                  className={`menu-item ${board == item.id ? 'purpleBg' : ''}`}
                  onClick={() => dispatch(selectBoard(item.id))} 
                >
         {  board == item.id ? <img style={{marginRight:"0.7em",}} src="/whiteMenu.png" alt="logo" /> : <img style={{marginRight:"0.7em",}} src="/menu.png" alt="logo" />  }
            {item.id} 
                </div>
          </div>

     
</>
        );
      })}
      <div
              className={`menu-item  link`}
              onClick={createBoard}
       
            >
             + Create New Board
            </div>
       
    
       <div className='theme'>
            <div className="theme-button">
              <div className="theme-buttons"><img  src="/day.png" alt="logo" /></div>
              <div className="theme-buttons"><ToggleButton/> </div>
              <div className="theme-buttons"><img  src="/night.png" alt="logo" /></div>
            </div>

      
        </div>
        <div
                  className={`menu-item closeSide`}
                 onClick={()=>props.changeSide()} 
                >
        
           Hide Sidebar
                </div>
 </div>

     
    )
}


export default Sidebar