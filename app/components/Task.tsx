'use client'
import { deleteTodo, editTodo } from "@/api";
import { ITask } from "@/types/tasks";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import {CiEdit} from 'react-icons/ci'
import {FiTrash2} from 'react-icons/fi'
import Modal from "./Modal";

interface TaskProps{
    task: ITask
}

const Task: React.FC<TaskProps> = ({task}) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit]=useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted]=useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

    const handleSubmitEditToDo: FormEventHandler <HTMLFormElement> = async(e) => {
        e.preventDefault();
        await editTodo({
        id: task.id,
        text: taskToEdit
      });
      
    
    setOpenModalEdit(false);
    router.refresh();
    };

    const handleDeleteToDo = async(id:string) => {
        await deleteTodo(id);
        setOpenModalDeleted(false);
        router.refresh();
    }

    return (
        <tr key={task.id}>
      <td className='w-full'>{task.text}</td>
      <td className= 'flex gap-7'>
        <CiEdit onClick = {() => setOpenModalEdit(true)}
        cursor="pointer" className = 'text-blue-500' size = {28}/>
        <Modal modalOpen = {openModalEdit} setModalOpen = {setOpenModalEdit}> 
        <form onSubmit={handleSubmitEditToDo}>
            <h3 className="font-bold text-lg">Edit Task</h3>
            <div className="modal-action">
            <input
            value={taskToEdit}
            onChange={e => setTaskToEdit(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full"
                />

            <button type="submit" className="btn btn-accent">Submit</button>
            </div>
            
        </form>
        </Modal>
        <FiTrash2  onClick = {() => setOpenModalDeleted(true)}
        
        cursor="pointer" className= 'text-red-500' size = {22}/>
        <Modal modalOpen = {openModalDeleted} setModalOpen = {setOpenModalDeleted}> <h3 className='text-lg'>Ops!, You sure you wanna delete?</h3>
        <div className='modal-action'>
            <button
            onClick = {() => handleDeleteToDo(task.id)}
            className='btn btn-accent
            '>
            Yes!
            </button>
        </div>
        </Modal>
      </td>
    </tr>
    )
}
export default Task;