import { useState } from "react";
import Modal from "src/components/base/Modal";
import PropertyOffersTable from "../PropertyOffersTable";

const PropertySellModal = ({ property }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="btn-primary w-full p-4 " onClick={() => setOpen(true)}>
        Sell Now
      </button>
      <Modal open={open} close={() => setOpen(false)}>
        <PropertyOffersTable propertyId={property?.propertyId} action />
      </Modal>
    </>
  );
};

export default PropertySellModal;
