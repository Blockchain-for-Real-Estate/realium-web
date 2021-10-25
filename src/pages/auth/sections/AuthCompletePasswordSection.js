import { useState } from "react";
import { useMutation } from "react-query";
import { Auth } from "aws-amplify";

const AuthCompletePasswordSection = ({ validateUser, user }) => {
  const { toast } = useUI();

  const [password, setPassword] = useState("");

  const { mutate } = useMutation(
    async () => await Auth.completeNewPassword(user, password),
    {
      onSuccess: (user) => validateUser(user),
      onError: (error) => {
        toast("New Password Failed", error.message, "error");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="container-primary">
      <h4 className="mb-4 text-center">Set Password</h4>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="no-arrows appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <button type="submit" className="btn-primary w-full p-2">
            Set Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthCompletePasswordSection;
