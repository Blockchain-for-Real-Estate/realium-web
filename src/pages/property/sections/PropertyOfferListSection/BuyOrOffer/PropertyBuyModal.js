import { useState } from "react";
import Modal from "src/components/base/Modal";
import PropertyListingsTable from "../PropertyListingsTable";

const PropertyBuyModal = ({ property }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="btn-primary w-full p-4" onClick={() => setOpen(true)}>
        Buy Now
      </button>
      <Modal open={open} close={() => setOpen(false)}>
        <PropertyListingsTable propertyId={property?.propertyId} action />
      </Modal>
    </>
  );
};

export default PropertyBuyModal;
