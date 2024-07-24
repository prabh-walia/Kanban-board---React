const Task = (props) => {

console.log("props",props);
    return (
      <div className="kanban-task">
        <div className="task-title ">{props.title}</div>
        <p className="task-desc">{`${props.subtasks?.length} subtasks`}</p>
      </div>
    );
  };
  export default Task