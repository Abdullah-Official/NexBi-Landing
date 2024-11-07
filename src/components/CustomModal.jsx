import { MdClose } from "react-icons/md";
import { Modal } from "react-responsive-modal";

const CustomModal = ({ onClose, children, open }) => {
  return (
    <Modal
      styles={{
        modal: {
          // minWidth:'250px',
          width: "550px",
          background: "#060809",
          height:"auto"
        },
      }}
      open={open}
      onClose={onClose}
      center
      closeIcon={<MdClose size={22} color="#fff" />}
    >
     {children}
    </Modal>
  );
};

export default CustomModal;
