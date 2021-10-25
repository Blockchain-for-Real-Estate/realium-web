import { useState } from "react";
import { useMutation } from "react-query";
import { Auth } from "aws-amplify";
import useUI from "context/hooks/useUI";

const AuthConfirmEmailSection = ({ validateUser, deliveryDetails }) => {
  const { toast } = useUI();

  const [code, setcode] = useState("");

  const { mutate } = useMutation(
    async () => await Auth.confirmSignUp(deliveryDetails.email, code),
    {
      onSuccess: (user) => validateUser(user),
      onError: (error) => {
        toast("New code Failed", error.message, "error");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="container-primary">
      <h4 className="mb-4 text-center">Set code</h4>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="code"
            className="block text-sm font-medium text-gray-700"
          >
            New code
          </label>
          <div className="mt-1">
            <input
              id="code"
              name="code"
              type="code"
              autoComplete="new-code"
              required
              onChange={(e) => setcode(e.target.value)}
              value={code}
              className="no-arrows appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <button type="submit" className="btn-primary w-full p-2">
            Set code
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthConfirmEmailSection;
