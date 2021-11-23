import { useState } from "react";
import Modal from "src/components/base/Modal";
import useCreateOfferMutation from "src/context/mutations/useCreateOfferMutation";
import Round2DecimalPlaces from "src/utilities/math/Round2DecimalPlaces";
import PropertyOffersTable from "../PropertyOffersTable";

const PropertyOfferModal = ({ property }) => {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("");

  const { mutate: createOffer, isLoading } = useCreateOfferMutation(
    property?.propertyId
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const _price = Round2DecimalPlaces(parseFloat(price));
    createOffer(
      { price: _price, quantity: 1 },
      {
        onSuccess: () => {
          setOpen(false);
        },
      }
    );
  };

  return (
    <>
      <button
        className="btn-secondary w-full p-4 border border-indigo-500"
        onClick={() => setOpen(true)}
      >
        Make an offer
      </button>
      <Modal open={open} close={() => setOpen(false)}>
        <div>Make Offer</div>
        <form onSubmit={handleSubmit} className="p-5">
          <label>Price Per Share</label>
          <input
            required
            className="p-2 border"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button className="btn-primary p-4">
            {isLoading ? "..." : "Make Offer"}
          </button>
        </form>
        <PropertyOffersTable property={property} />
      </Modal>
    </>
  );
};

export default PropertyOfferModal;
