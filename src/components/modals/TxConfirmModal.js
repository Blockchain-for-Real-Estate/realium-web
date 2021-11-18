import { useState } from "react";
import AvaxSymbol from "src/components/avax/AvaxSymbol";
import Modal from "src/components/base/Modal";
import useGasEstimate from "src/context/queries/useGasEstimate";
import Round2DecimalPlaces from "src/utilities/math/Round2DecimalPlaces";
import useSendAVAXMutation from "src/context/mutations/useSendAVAXMutation";

const TxConfirmModal = ({ toAddress, amount, buttonText, buttonClasses }) => {
  const [open, setOpen] = useState();
  const { data: gas } = useGasEstimate(toAddress, amount, open);
  const { mutate: sendAVAX, isLoading } = useSendAVAXMutation();

  const handleConfirm = () => {
    sendAVAX(
      { toAddress, amount },
      {
        onSuccess: () => {
          setOpen(false);
        },
      }
    );
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className={buttonClasses}>
        {buttonText}
      </button>
      <Modal open={open} close={() => setOpen(false)}>
        <div className="p-5 ">
          <h4 className="font-bold text-center">Purchase Review</h4>
          <table className="border">
            <tbody>
              <tr>
                <td>To</td>
                <td>{toAddress}</td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>
                  {amount}
                  <AvaxSymbol />
                </td>
              </tr>
              <tr>
                <td>Gas Fee</td>
                <td>
                  {gas} <AvaxSymbol />
                </td>
              </tr>
              <tr>
                <td>Estimated Total</td>
                <td>
                  ~ {Round2DecimalPlaces(amount + gas)}
                  <AvaxSymbol />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={handleConfirm}
            className="w-full btn-primary p-2"
            disabled={isLoading}
          >
            {isLoading ? "Sending" : "Confirm Send"}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default TxConfirmModal;
