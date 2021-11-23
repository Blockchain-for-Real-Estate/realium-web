import { useState } from "react";
import Modal from "src/components/base/modal";

const PropertyListModal = ({ property }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="btn-secondary w-full p-4 border border-indigo-500"
        onClick={() => setOpen(true)}
      >
        List a Share
      </button>
      <Modal open={open} close={() => setOpen(false)}>
        Make a listing
      </Modal>
    </>
  );
};

export default PropertyListModal;
