import useUserMFA from "context/queries/useUserMFA";
import { useState } from "react";
import QRCode from "qrcode.react";
import Auth from "@aws-amplify/auth";
import useUI from "context/hooks/useUI";
import useUser from "context/queries/useUser";
import ReactCodeInput from "react-code-input";

const AccountSecurityTOTPSection = () => {
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

  if (MFA && MFA !== "NOMFA")
    return (
      <div className="border-b border-gray-200 bg-white rounded-lg shadow">
        <div>MFA Enabled</div>
        <button className="btn-primary p-4" onClick={DisableMFA}>
          Disable MFA
        </button>
      </div>
    );
  if (QR)
    return (
      <div className="border-b border-gray-200 bg-white rounded-lg shadow">
        <div>1. Download the Google Authenticator App</div>
        <div>2. Scan QR code with Authenticator app</div>
        <QRCode value={QR} />
        <div>Enter 6 digit code</div>
        <div>
          <ReactCodeInput
            type="number"
            fields={6}
            inputStyle={{
              width: "50px",
              MozAppearance: "textfield",
            }}
            value={input}
            onChange={(e) => setInput(e)}
          />
        </div>
        <button onClick={ConfirmMFA} className="btn-primary p-4">
          Confirm
        </button>
      </div>
    );
  return (
    <div className="border-b border-gray-200 bg-white rounded-lg shadow">
      <button className="btn-primary p-4" onClick={EnableMFA}>
        Enable
      </button>
    </div>
  );
};

export default AccountSecurityTOTPSection;
