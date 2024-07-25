
import './form.css'; 
import { useState,useEffect } from 'react';
import {useDispatch} from "react-redux";
import { addBoard,updateBoard } from "../../redux-store/kanbanStore";
import {selectBoard} from "../../redux-store/boardStore"
import { useSelector } from "react-redux";
const BoardForm =(props)=>{
  console.log("props",props);
  const dispatch = useDispatch();
  const board_name = useSelector((store)=>store.board.selectedBoardId)
  const data = useSelector((store)=>store.kanban.kanbanData).find((item)=>item.id==board_name)?.columns

  const [boardName, setBoardName] = useState(props.create==false?board_name:"");
  const defaultcol = [
    { id: 'column-1', title: 'To Do', tasks: [] },
    { id: 'column-2', title: 'In Progress', tasks: [] },
   
  ]
  const [columns, setColumns] = useState(props.create==true?[]:data);

  const handleBoardNameChange = (e) => {
    setBoardName(e.target.value);
  };
  useEffect(()=>{
    addColumn();
  },[])
  const handleColumnChange = (index, e) => {
    const newColumns = columns.slice();

    newColumns[index].title = e.target.value;
    setColumns(newColumns.filter((c)=>c.title));
  };
  const removeColumn = (index) => {
    const newColumns = columns.slice();
    newColumns.splice(index, 1);
    setColumns(newColumns);
  };

  const addColumn = () => {
    const newColumn = {
      id: `column-${columns.length + 1}`,
      title: '',
      tasks: [],
    };

    setColumns([...columns, newColumn]);


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let filteredColumns = columns.filter(column => column.title !== '');
    const boardData = {
      id: boardName,
    
      columns: filteredColumns.map((column, index) => ({
        ...column,
        id: `column-${index + 1}`,
      })),
    };
    console.log("whole data =>",boardData);
   

    props.onSubmit(boardData);
    if(props.create==false){
     dispatch(updateBoard(boardData))
    }
    else {
      boardName&&dispatch(addBoard(boardData))
      boardName&&dispatch(selectBoard(boardName))
    }
    setBoardName('');
    
    setColumns([

    ]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
  
      <span className='label'> Board Name:</span>
          <input
            type="text"
            
            value={boardName}
            onChange={handleBoardNameChange}
          />
       
      </div>
      <div style={{marginTop:"0.4em"}}>
        <span className='label'>Board Columns</span>
        {columns.map((column, index) => (
            <div key={index} className="column-input">
          <div key={index} style={{width:"85%"}}>
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
      <button className="add_Columnbutton w-100 lightVoilet m-4"type="button" onClick={addColumn}>
        Add Column
      </button>
      <button className='add_button m-4 w-100' type="submit">Submit</button>
    </form>
    )
}
export default BoardForm;