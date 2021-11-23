import { useState } from "react";
import Modal from "src/components/base/modal";

const PropertySellModal = ({ property }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="btn-primary w-full p-4 " onClick={() => setOpen(true)}>
        Sell a Share
      </button>
      <Modal open={open} close={() => setOpen(false)}>
        Sell to lowest offer
      </Modal>
    </>
  );
};

export default PropertySellModal;
