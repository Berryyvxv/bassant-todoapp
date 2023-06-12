
interface ModalProps {
    modalOpen : boolean
    setModalOpen : (open : boolean) => boolean | void;
}
const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen}) => {
    return (
        <div>
<dialog id="my_modal_3" className={`modal ${modalOpen? "modal-open" : ""}`}>
  <form 
  onClick = {() => setModalOpen(false)}
  className="modal-box">
    <button form="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </form>
</dialog>
       </div>
       );
};
export default Modal;