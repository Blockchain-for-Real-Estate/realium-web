import Link from "next/link";
import { useState } from "react";
import { useMutation } from "react-query";
import { Auth } from "aws-amplify";
import useUI from "context/hooks/useUI";
import ReactCodeInput from "react-code-input";
import AuthBox from "../components/AuthBox";
import { HomeIcon } from "@heroicons/react/outline";

const AuthForgotSection = ({ setAuthPage }) => {
  const { toast } = useUI();

  const [sentCode, setSentCode] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: forgotPassword, isLoading: isLoading1 } = useMutation(
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

  const { mutate: forgotPasswordSubmit, isLoading: isLoading2 } = useMutation(
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
    <AuthBox
      title={sentCode ? "Reset Password" : "Forgot Password"}
      description={
        sentCode
          ? "Use the code sent to your email to set a new password"
          : "Enter your email address below to reset your password"
      }
      footer={{
        text: "Remembered? ",
        page: "signin",
        linkText: "Sign in",
      }}
      setAuthPage={setAuthPage}
    >
      {!sentCode ? (
        <div>
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
            className="btn-primary w-full my-2 p-2 flex justify-center"
          >
            {isLoading1 ? (
              <HomeIcon className="w-5 h-5 animate-pulse" />
            ) : (
              "Forgot Password"
            )}
          </button>
        </div>
      ) : (
        <div>
          <label
            htmlFor="code"
            className="block text-sm font-medium text-gray-700 required-field capitalize"
          >
            6 Digit Confirmation Code
          </label>
          <div className="mt-1 relative">
            <ReactCodeInput
              fields={6}
              type="text"
              value={code}
              onChange={setCode}
              disabled={!sentCode}
              inputStyle={{
                fontFamily: "Inter",
                width: `${100 / 7}%`,
                margin: "5px 5px 5px 0px",
                borderRadius: "5px",
                borderColor: "#D1D5DB",
              }}
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
            className="btn-primary w-full my-2 p-2 flex justify-center"
            disabled={!sentCode}
          >
            {isLoading2 ? (
              <HomeIcon className="w-5 h-5 animate-pulse" />
            ) : (
              "Re-set Password"
            )}
          </button>
        </div>
      )}
    </AuthBox>
  );
};

const fieldStyles = {
  // className: "font-inter m-4 w-1/6 rounded",
  inputStyle: {
    fontFamily: "Inter",
    margin: "4px",
    MozAppearance: "textfield",
    width: "40px",
    borderRadius: "5px",
    fontSize: "14px",
    height: "26px",
    paddingLeft: "7px",
    backgroundColor: "white",
    color: "black",
    border: "1px solid lightgray",
  },
  inputStyleInvalid: {
    fontFamily: "monospace",
    margin: "4px",
    MozAppearance: "textfield",
    width: "15px",
    borderRadius: "3px",
    fontSize: "14px",
    height: "26px",
    paddingLeft: "7px",
    backgroundColor: "black",
    color: "red",
    border: "1px solid red",
  },
};

export default AuthForgotSection;
