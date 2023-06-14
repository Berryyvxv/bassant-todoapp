'use client';
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import {AiOutlinePlus} from "react-icons/ai"
import Modal from "./Modal";
import { v4 as uuidv4 } from 'uuid';
const AddTask=()=> {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>('');


    const handleSubmitNewToDo: FormEventHandler <HTMLFormElement> = async(e) => {
        e.preventDefault();
        await addTodo({
        id: uuidv4(),
        text: newTaskValue
      });
      
    setNewTaskValue('');
    setModalOpen(false);
    router.refresh();
    };
    return (
     <div>
        <button onClick = {() => setModalOpen(true)}className="btn btn-accent w-full"> Add new task<AiOutlinePlus className= "" size={16}/></button>
        <Modal modalOpen = {modalOpen} setModalOpen = {setModalOpen}> 
        <form onSubmit={handleSubmitNewToDo}>
            <h3 className="font-bold text-lg">Add New Task</h3>
            <div className="modal-action">
            <input
            value={newTaskValue}
            onChange={e => setNewTaskValue(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full"
                />

            <button type="submit" className="btn btn-accent">Submit</button>
            </div>
            
        </form>
        </Modal>
    </div>
    );
};

export default AddTask;


