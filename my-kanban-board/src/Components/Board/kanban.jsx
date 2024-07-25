import Column from './column'
const Kanban =({data})=>{


    return (

            <div className="kanban">
                {data.map(column => (
                        <Column key={column.id} title={column.title} tasks={column.tasks} />
                       
                ))}
                </div>


    )
}
export default Kanban;