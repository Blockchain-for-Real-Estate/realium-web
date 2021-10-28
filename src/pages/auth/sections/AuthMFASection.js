import { useState } from "react";
import { useMutation } from "react-query";
import { Auth } from "aws-amplify";
import useUI from "context/hooks/useUI";
import ReactCodeInput from "react-code-input";
import AuthBox from "../components/AuthBox";

const AuthMFASection = ({ setAuthPage, validateUser, user, type }) => {
  const { toast } = useUI();
  const [code, setCode] = useState("");

  const { mutate: confirm } = useMutation(
    async () => await Auth.confirmSignIn(user, code, type),
    {
      onSuccess: (user) => validateUser(user),
      onError: (error) => {
        toast("New code Failed", error.message, "error");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    confirm();
  };

  return (
    <AuthBox
      title="Enter 2FA Code"
      description="please enter 2FA code from authenticator app"
      footer={{
        text: "Back to sign in? ",
        page: "signin",
        linkText: "Go Back",
      }}
      setAuthPage={setAuthPage}
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="code"
            className="block text-sm font-medium text-gray-700"
          >
            6 Digit Auth Code
          </label>
          <div className="mt-1">
            <div className="mt-1 relative">
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
            </div>
          </div>
        </div>

        <div>
          <button type="submit" className="btn-primary w-full p-2">
            Confirm
          </button>
        </div>
      </form>
    </AuthBox>
  );
};

export default AuthMFASection;
