import { useSelector } from "react-redux";
const Task = (props) => {
  const darkmode = useSelector((store)=>store.theme.isDarkMode)
console.log("props",props);
    return (
      <div className={`kanban-task ${darkmode&&"lightdark"}`}>
        <div className="task-title ">{props.title}</div>
        <p className="task-desc">{`${props.subtasks?.length} subtasks`}</p>
      </div>
    );
  };
  export default Task