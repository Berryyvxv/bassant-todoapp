import { ITask } from "@/types/tasks";

interface TodoListProps {
  tasks: ITask[];
}

const ToDoList: React.FC<TodoListProps> = ({tasks}) => {
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-base-200">
      <tr>
        <th>Name</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
  {tasks.map((task) => (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td>Blue</td>
    </tr>
  ))}
</tbody>  
  </table>
</div>
    );
};
export default ToDoList;