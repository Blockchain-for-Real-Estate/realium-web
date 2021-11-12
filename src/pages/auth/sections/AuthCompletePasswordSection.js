import { useState } from "react";
import { useMutation } from "react-query";
import { Auth } from "aws-amplify";
import useUI from "context/hooks/useUI";
import AuthBox from "../components/AuthBox";
import { HomeIcon } from "@heroicons/react/outline";

const AuthCompletePasswordSection = ({ setAuthPage, validateUser, user }) => {
  const { toast } = useUI();

  const [password, setPassword] = useState("");

  const { mutate: completeNewPassword, isLoading } = useMutation(
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
    completeNewPassword();
  };

  return (
    <AuthBox
      title="Password Expired"
      description="Please change your password to continue"
      footer={{
        text: "Not ready? ",
        page: "signin",
        linkText: "Back to Sign In",
      }}
      setAuthPage={setAuthPage}
    >
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
          <button
            type="submit"
            className="btn-primary w-full p-2 flex justify-center"
          >
            {isLoading ? (
              <HomeIcon className="w-5 h-5 animate-pulse" />
            ) : (
              "Set Password"
            )}
          </button>
        </div>
      </form>
    </AuthBox>
  );
};

export default AuthCompletePasswordSection;
