
interface ModalProps {
    modalOpen : boolean
    setModalOpen : (open : boolean) => boolean | void;
    children: React.ReactNode
}
const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen, children}) => {
    return (
        <div>
            <dialog id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`}>
            <div className="modal-box">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setModalOpen(false)}>✕</label>
            {children}
            </div>
            </dialog>

                
       </div>
            );
};
export default Modal;