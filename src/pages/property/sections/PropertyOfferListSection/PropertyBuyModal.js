import { useState } from "react";
import CurrencyDisplay from "src/components/avax/CurrencyDisplay";
import Modal from "src/components/base/Modal";
import useBuyListingMutation from "src/context/mutations/useBuyListingMutation";
import useUserAvaxBalance from "src/context/queries/useUserAvaxBalance";

const PropertyBuyModal = ({ property, listing }) => {
  const [open, setOpen] = useState(false);
  const { data: balance } = useUserAvaxBalance();
  const { mutate: BuyListing, isLoading } = useBuyListingMutation(
    property?.propertyId,
    listing?.listingId
  );

  const total = listing?.quantity * listing?.price;

  const handleConfirm = () => {
    BuyListing(null, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="btn-primary p-2">
        Buy Now
      </button>
      <Modal className="z-50 m-4" open={open} close={() => setOpen(false)}>
        <div className="max-w-xs w-screen p-4">
          <div className="flex flex-col items-center">
            <div className="text-center text-xl font-bold">
              {property?.propertyName}
            </div>
            <div className="text-xl text-gray-700 flex items-center gap-2">
              <CurrencyDisplay balance={listing?.price} hideName />/ share
            </div>
          </div>
          <div className="my-5">
            <div className="border rounded-lg">
              <div className="border-b flex justify-between p-3">
                <div>Buy</div>
                <div>{listing?.quantity} Share</div>
              </div>
              <div className="border-b flex justify-between p-3">
                <div>Pay with</div>
                <div>
                  <CurrencyDisplay balance={total} avaxAlways />
                </div>
              </div>
              <div className="border-b flex justify-between p-3">
                <div>Est. Txn Fee</div>
                <div>
                  <CurrencyDisplay balance={0.003} avaxAlways />
                </div>
              </div>
              <div className="flex justify-between p-3">
                <div>Total</div>
                <div>
                  <CurrencyDisplay balance={total+0.003} avaxAlways />
                </div>
              </div>
              {/* <div className="border-b  flex justify-between p-3">
                <div>Gas &amp; Fee&apos;s</div>
                <div>
                  <CurrencyDisplay
                    balance={listing?.quantity * listing?.price}
                    avaxAlways
                  />
                </div>
              </div>
              <div className="border-b  flex justify-between p-3">
                <div>Estimated Total:</div>
                <div>
                  <CurrencyDisplay
                    balance={listing?.quantity * listing?.price}
                    avaxAlways
                  />
                </div>
              </div> */}
            </div>
            <button
              onClick={handleConfirm}
              className="btn-primary p-3 w-full my-2 disabled:hover:bg-gray-200"
              disabled={isLoading || balance < total}
            >
              {isLoading
                ? "..."
                : balance < total
                ? "Insufficent Funds"
                : "Confirm Order"}
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

export default PropertyBuyModal;
