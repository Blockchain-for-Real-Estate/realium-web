import { useState } from "react";
import { useMutation } from "react-query";
import { Auth } from "aws-amplify";
import useUI from "context/hooks/useUI";
import ReactCodeInput from "react-code-input";

const AuthMFASection = ({ validateUser, user, type }) => {
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
    <div className="container-primary">
      <h4 className="mb-4 text-center">Enter Confirmation Code</h4>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="code"
            className="block text-sm font-medium text-gray-700"
          >
            New code
          </label>
          <div className="mt-1">
            <ReactCodeInput
              fields={6}
              type="text"
              value={code}
              onChange={setCode}
            />
          </div>
        </div>

        <div>
          <button type="submit" className="btn-primary w-full p-2">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthMFASection;
