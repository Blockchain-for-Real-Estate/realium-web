import Link from "next/link";
import { useState } from "react";
import { useMutation } from "react-query";
import { Auth } from "aws-amplify";
import useUI from "context/hooks/useUI";
import ReactCodeInput from "react-code-input";

const AuthForgotSection = ({ setAuthPage }) => {
  const { toast } = useUI();

  const [sentCode, setSentCode] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: forgotPassword } = useMutation(
    async () => await Auth.forgotPassword(email),
    {
      onSuccess: () => {
        toast(
          "Check Email",
          "If that email is connected to an account a code will arrive in your inbox"
        );
        setSentCode(true);
      },
      onError: (error) => {
        toast("Code failed to send", error.message, "error");
      },
    }
  );

  const { mutate: forgotPasswordSubmit } = useMutation(
    async () => await Auth.forgotPasswordSubmit(email, code, password),
    {
      onSuccess: () => {
        toast("Password Reset", "You may now sign in");
        setAuthPage("signin");
      },
      onError: (error) => {
        toast("Could not reset password", error.message, "error");
      },
    }
  );

  return (
    <div className="container-primary">
      <h4 className="mb-4 text-center text-gray-900 font-bold">
        Forgot Password
      </h4>
      <div className={`py-2 px-2`}>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 required-field capitalize"
        >
          Email
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email-address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={sentCode}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md disabled:bg-gray-100"
          />
        </div>
        <button
          disabled={sentCode}
          onClick={forgotPassword}
          className="btn-primary w-full my-2"
        >
          Send Code
        </button>
      </div>

      <div className={`py-2 px-2`}>
        <label
          htmlFor="code"
          className="block text-sm font-medium text-gray-700 required-field capitalize"
        >
          Code
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <ReactCodeInput
            fields={6}
            type="text"
            value={code}
            onChange={setCode}
            disabled={!sentCode}
          />
        </div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 required-field capitalize"
        >
          New Password
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={!sentCode}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md disabled:bg-gray-100"
          />
        </div>
        <button
          onClick={forgotPasswordSubmit}
          className="btn-primary w-full my-2"
          disabled={!sentCode}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default AuthForgotSection;
