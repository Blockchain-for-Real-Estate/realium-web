import { useState } from "react";
import CurrencyDisplay from "src/components/avax/CurrencyDisplay";
import Modal from "src/components/base/Modal";
import useSellOfferMutation from "src/context/mutations/useSellOfferMutation";
import useUserAvaxBalance from "src/context/queries/useUserAvaxBalance";

const PropertySellModal = ({ property, offer }) => {
  const [open, setOpen] = useState(false);
  const { data: balance } = useUserAvaxBalance();

  const { mutate: SellOffer, isLoading } = useSellOfferMutation(
    property?.propertyId,
    offer?.offerId
  );

  const total = offer?.quantity * offer?.price;

  const handleConfirm = () => {
    SellOffer(null, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="btn-primary p-2">
        Sell Now
      </button>
      <Modal className="z-50 m-4" open={open} close={() => setOpen(false)}>
        <div className="max-w-xs w-screen p-4">
          <div className="flex flex-col items-center">
            <div className="text-center text-xl font-bold">
              {property?.propertyName}
            </div>
            <div className="text-xl text-gray-700 flex items-center gap-2">
              <CurrencyDisplay balance={offer?.price} hideName />/ share
            </div>
          </div>
          <div className="my-5">
            <div className="border rounded-lg">
              <div className="border-b flex justify-between p-3">
                <div>Sell</div>
                <div>{offer?.quantity} Share</div>
              </div>
              <div className="border-b flex justify-between p-3">
                <div>Receive</div>
                <div>
                  <CurrencyDisplay balance={total} avaxAlways />
                </div>
              </div>
              <div className="border-b flex justify-between p-3">
                <div>Est. Txn Fee</div>
                <CurrencyDisplay balance={0.003} avaxAlways />
              </div>
              <div className="flex justify-between p-3">
                <div>Total Recieved</div>
                <div>
                  <CurrencyDisplay balance={total-0.003} avaxAlways />
                </div>
              </div>
            </div>
            <button
              onClick={handleConfirm}
              className="btn-primary p-3 w-full my-2 disabled:hover:bg-gray-200"
              disabled={isLoading || balance < total}
            >
              {isLoading ? "..." : "Confirm Order"}
            </button>
          </div>
          <div className="flex justify-between">
            <p>Wallet Balance</p>
            <CurrencyDisplay balance={parseFloat(balance).toFixed(3)} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PropertySellModal;
