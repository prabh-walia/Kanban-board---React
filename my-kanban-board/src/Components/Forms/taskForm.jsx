
import './form.css'; 
import { useState } from 'react';
import {useDispatch} from "react-redux";
import { addBoard,updateBoard,addTasks } from "../../redux-store/kanbanStore";

import { useSelector } from "react-redux";
const TaskForm =(props)=>{
  console.log("props",props);
  const dispatch = useDispatch();
  const board_name = useSelector((store)=>store.board.selectedBoardId)
  const data = useSelector((store)=>store.kanban.kanbanData).find((item)=>item.id==board_name).columns
  const [selectedColumnId, setSelectedColumnId] = useState('');
  const [taskName, setTaskName] = useState();

  // const [columns, setColumns] = useState(data);
  const [tasks, setTasks] = useState([]);
  const [taskDesc,setTaskDescName]=useState()

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };
  const handleTaskDescChange=(e)=>{
    setTaskDescName(e.target.value);
  }
  const handleColumnChange = (index, e) => {
    const newColumns = tasks.slice();
    newColumns[index].title = e.target.value;
    setTasks(newColumns);
  };
  const removeColumn = (index) => {
    const newColumns = tasks.slice();
    newColumns.splice(index, 1);
    setTasks(newColumns);
  };

  const addColumn = () => {
    const newSubtasks = {
      id: `column-${tasks.length + 1}`,
      title: '',
      tasks: [],
    };
    setTasks([...tasks, newSubtasks]);


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !selectedColumnId) {
        alert('Please fill in all required fields.');
        return;
      }
  
      const taskData = {
        id: `card-${Date.now()}`, 
        title: taskName,
        columnId: selectedColumnId,
        description: taskDesc,
        boardId:board_name,
        subtasks:tasks
      };
  
      console.log("Submitted task data:", taskData);
      props.onSubmit(taskData);
      dispatch(addTasks(taskData));
      setTaskName('');
      setTaskDescName('');
      setSelectedColumnId('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
  
      <span className='label'> Title:</span>
          <input
            type="text"
            placeholder='eg.g start learning things'
            value={taskName}
            onChange={handleTaskNameChange}
          />
       
      </div>
      <div>
  
  <span className='label'> Description (optional):</span>
  <textarea
      style={{height: '50px' }} 
      placeholder="Enter your text here..."  value={taskDesc}
      onChange={handleTaskDescChange}
    ></textarea>
      
    
   
  </div>
  
      
      <div style={{marginTop:"0.4em"}}>
        <span className='label'>Subtasks</span>
        {tasks.map((column, index) => (
            <div key={index} className="column-input">
          <div key={index} style={{width:"80%"}}>
            <input
              type="text"
          
              placeholder={`${column.title}`}
              value={column.name}
              onChange={(e) => handleColumnChange(index, e)}
            />
          </div>
          <button style={{width:"10%" ,background:"transparent",position:"relative"}} type="button" onClick={() => removeColumn(index)}>
            <img  src="/cross.png" alt="logo" />
          </button>
          </div>
        ))}
      </div>
      <button className="add_Columnbutton m-4 w-100 lightVoilet"type="button" onClick={addColumn}>
        Add Subtasks
      </button>
 
      <div style={{ marginTop: "0.5em" }}>
        <span className='label'>Select Column:</span>
        <select
          value={selectedColumnId}
          onChange={(e) => setSelectedColumnId(e.target.value)}
        >
          <option value="">Select a column</option>
          {data.map((column) => (
            <option key={column.id} value={column.id}>
              {column.title}
            </option>
          ))}
        </select>
      </div>
      <button className='add_button m-4 w-100' type="submit">Submit</button>
    </form>
    )
}
export default TaskForm;