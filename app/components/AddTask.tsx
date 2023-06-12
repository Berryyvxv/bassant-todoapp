'use client';
import { useState } from "react";
import {AiOutlinePlus} from "react-icons/ai"
import Modal from "./Modal";
const AddTask=()=> {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    return (
     <div>
        <button onClick = {() => setModalOpen(true)}className="btn btn-accent w-full"> Add new task<AiOutlinePlus className= "" size={16}/></button>
        <Modal modalOpen = {modalOpen} setModalOpen = {setModalOpen}/>
    </div>
    );
};

export default AddTask;


