import { useState } from "react";
import { useMutation } from "react-query";
import { Auth } from "aws-amplify";
import useUI from "context/hooks/useUI";
import AuthBox from "../components/AuthBox";
import ReactCodeInput from "react-code-input";

const AuthConfirmEmailSection = ({
  setAuthPage,
  validateUser,
  deliveryDetails,
}) => {
  const { toast } = useUI();

  const [code, setCode] = useState("");

  const { mutate: confirmSignUp } = useMutation(
    async () => await Auth.confirmSignUp(deliveryDetails.email, code),
    {
      onSuccess: (user) => validateUser(user),
      onError: (error) => {
        toast("New code Failed", error.message, "error");
      },
    }
  );

  const { mutate: resendCode } = useMutation(
    async () => await Auth.resendSignUp(deliveryDetails.email),
    {
      onSuccess: () => {
        toast("Code has been resent");
      },
      onError: (error) => {
        toast("New code failed to send", error.message, "error");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    confirmSignUp();
  };

  return (
    <AuthBox
      title="Confirm Email"
      description="Enter your email address below to reset your password"
      footer={{
        text: "Want to go back ",
        page: "signin",
        linkText: "Sign in",
      }}
      setAuthPage={setAuthPage}
    >
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="code"
          className="block text-sm font-medium text-gray-700"
        >
          6 digit confirmation code
        </label>
        <ReactCodeInput
          fields={6}
          type="text"
          value={code}
          onChange={setCode}
          inputStyle={{
            fontFamily: "Inter",
            width: `${100 / 7}%`,
            margin: "5px 5px 5px 0px",
            borderRadius: "5px",
            borderColor: "#D1D5DB",
          }}
        />

        <button type="submit" className="btn-primary w-full p-2">
          Confirm
        </button>

        <button type="button" className="text-indigo-500" onClick={resendCode}>
          Resend Verification Code
        </button>
      </form>
    </AuthBox>
  );
};

export default AuthConfirmEmailSection;
