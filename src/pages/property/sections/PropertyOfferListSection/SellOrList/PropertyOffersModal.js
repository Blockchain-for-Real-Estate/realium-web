import { useState } from "react";
import Modal from "src/components/base/Modal";
import PropertyOffersTable from "../PropertyOffersTable";

const PropertyOffersModal = ({ property }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="btn-primary w-full p-4 " onClick={() => setOpen(true)}>
        View Offers
      </button>
      <Modal open={open} close={() => setOpen(false)}>
        <PropertyOffersTable property={property} action />
      </Modal>
    </>
  );
};

export default PropertyOffersModal;
