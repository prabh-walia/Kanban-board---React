import { createSlice } from "@reduxjs/toolkit";

const kanbanSlice=createSlice(
    {
        name:"kanban",
        initialState: {
            kanbanData:[
            {
              id: "board-1",
              columns: [
               
              ]
            },
           
          ]
        },
        reducers:{
            addColumn:(state,action)=>{
              const { boardId, column } = action.payload;
              const board = state.kanbanData.find((board) => board.id === boardId);
              if (board) {
                board.columns.push(column);
              }
            },
            addTasks:(state, action) => {
              const { id, title, columnId, description,subtasks, boardId } = action.payload;
        

              const board = state.kanbanData.find((board) => board.id === boardId);
              
              if (board) {
         
                const column = board.columns.find((col) => col.id === columnId);
                if (column) {
                  column.tasks.push({ id, title, description,subtasks });
                }
              }
          
            },
            addBoard :(state,action)=>{
                state.kanbanData.push(action.payload)
            },
            updateBoard: (state, action) => {
              const updatedBoard = action.payload;
              const index = state.kanbanData.findIndex(board => board.id === updatedBoard.id);
              if (index !== -1) {
                state.kanbanData[index] = updatedBoard;
              }
            },
            removeBoard :(state,action)=>{

              const boardId = action.payload;
             state.kanbanData= state.kanbanData.filter((board)=>board.id!=boardId)


            },
       
        }
    }
);
export const {addBoard,addColumn,addTasks,removeBoard,updateBoard} = kanbanSlice.actions;
export default kanbanSlice.reducer;

