import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask"
import ToDoList from "./components/ToDoList";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className="max-w-4xl mx-auto mt-6">
      <div className="text-center my-4 flex flex-col gap-4"><h3 className=" text-3xl font-bold">
        To Do List Application</h3> 
        <AddTask/>
      </div>

      
      <ToDoList tasks={tasks}></ToDoList>
      

      
    </main>
  );
};
