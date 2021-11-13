import useUserMFA from "src/context/queries/useUserMFA";
import { Fragment, useState } from "react";
import QRCode from "qrcode.react";
import Auth from "@aws-amplify/auth";
import useUI from "src/context/hooks/useUI";
import useUser from "src/context/queries/useUser";
import ReactCodeInput from "react-code-input";
import { Switch, Dialog, Transition } from "@headlessui/react";

const AccountSecurityAuthenticatorSection = () => {
  const { data: user } = useUser();
  const { data: MFA, refetch } = useUserMFA();
  const { toast } = useUI();

  const [QR, setQR] = useState();
  const [input, setInput] = useState();

  const EnableMFA = async () => {
    try {
      const code = await Auth.setupTOTP(user);
      setQR(`otpauth://totp/${user.username}?secret=${code}&issuer=Realium.io`);
    } catch (error) {
      toast("Could not setup 2FA", null, "error");
    }
  };

  const ConfirmMFA = async () => {
    try {
      await Auth.verifyTotpToken(user, input);
      await Auth.setPreferredMFA(user, "TOTP");
      setQR(null);
      refetch();
      toast("2FA Enabled", "You will be required to use 2FA to sign in");
    } catch (error) {
      toast("Could not validate code", error.message, "error");
    }
  };

  const DisableMFA = async () => {
    try {
      await Auth.setPreferredMFA(user, "NOMFA");
      toast("MFA disabled", "We do not reccommend this action", "warn");
      refetch();
    } catch (error) {
      toast("Could not disable MFA", error.message, "error");
    }
  };
  return (
    <div className="border border-gray-200 bg-white rounded-lg shadow flex justify-between items-center p-4 mt-4">
      <div>
        <h2 className="text-gray-700 text-xl font-semibold">
          Authenticator App
        </h2>
        <p>A time base one-time 6 digit code</p>
      </div>

      <Switch
        checked={MFA === "SOFTWARE_TOKEN_MFA"}
        onChange={MFA === "SOFTWARE_TOKEN_MFA" ? DisableMFA : EnableMFA}
        className={`${
          MFA === "SOFTWARE_TOKEN_MFA" ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span className="sr-only">Disable MFA</span>
        <span
          className={`${
            MFA === "SOFTWARE_TOKEN_MFA" ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>

      <Transition appear show={!!QR} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setQR("")}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-900 opacity-20" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add Authenticator
                </Dialog.Title>
                <Dialog.Description className="mt-2">
                  <p className="text-sm text-gray-500">
                    We reccommend using Google Authenticator
                  </p>
                </Dialog.Description>
                <div className="py-4">
                  {QR && <QRCode value={QR} />}
                  <div className="mt-4">Enter 6 digit code</div>
                  <ReactCodeInput
                    fields={6}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e)}
                    inputStyle={{
                      fontFamily: "Inter",
                      width: `${100 / 7}%`,
                      margin: "5px 5px 5px 0px",
                      borderRadius: "5px",
                      borderColor: "#D1D5DB",
                    }}
                  />
                </div>

                <button onClick={ConfirmMFA} className="btn-primary p-4 w-full">
                  Confirm Code
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AccountSecurityAuthenticatorSection;
