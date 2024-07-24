import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header'
import Board from './Components/Board/board'
import { Provider } from "react-redux"
import { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar/sidebar';
import Modal from './Components/Modal/Modal';

import { useSelector } from 'react-redux';

import { store } from "./redux-store/appStore"
import BoardForm from './Components/Forms/boardForm';
import TaskForm from './Components/Forms/taskForm';
function App() {
  const [sidebar,setSidebar]=useState(true)
  const [modalOpen,setModalOpen]=useState(false)
  const [title,setTitle]=useState()
  const [create,setCreate]=useState(false)
  const [modalType,setModalType]=useState("")

  const changeSide=()=>{
    setTimeout(()=>{
      setSidebar(!sidebar)
    },300)
  
  }
  const darkmode = useSelector((store)=>store.theme.isDarkMode)
  console.log("darkmode ", darkmode);

const board =()=>{
  setModalType("board")
  setModalOpen(true)
    create==true ?setTitle("Create Board"):setTitle('Edit Board')
}
  const closeModal =()=>{
    setModalOpen(false)
    setTitle()
    setCreate(false)

  }
  const Task=()=>{
    setModalOpen(true)
    setTitle("Create Task")
    setModalType("task")

  }


  return (
    <>
<div className="App">
     <Header createTask={Task}></Header>
    </div>
     <div className={ `${darkmode?"darktheme":"App-body"}`}>

    {sidebar==true&& <div className={`sidebar ${darkmode&&"lightblack"}`}>
      <Sidebar createBoard={board} setTitle={setTitle} create={setCreate} changeSide={changeSide}/>
       </div>
}

       <div className='board'>
        
       <Board createBoard={board} sidebar={sidebar}  />
        </div> 
    
      { sidebar==false&& <div className='side-button' onClick={changeSide}>
      <img  src="/eye.png" alt="logo" />
       </div>
}

    </div>
    {
       modalOpen===true && <div style={{position:"fixed",top:"22%",left:"25%"}}>
          <Modal onClose={closeModal} title={title} >
            {modalType=="board"?<BoardForm onSubmit={closeModal} create={create}/>:
            <TaskForm onSubmit={closeModal}/>
            }
              

          </Modal>
          </div>
          }

</>


  );
}

export default App;
