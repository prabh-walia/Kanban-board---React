import Task from "./Task";

const Column = ({ title, tasks }) => {
    return (

      <div className="kanban-column">
        <div>
       { title&& <div className="title">{title} ({ tasks.length})</div>}
        {tasks.map(task => (
          <Task key={task.id} title={task.title} description={task.description} subtasks={task.subtasks} />
        ))}
      </div>
      </div>
    );
  };
  
  export default Column;