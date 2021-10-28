import Link from "next/link";
import { useState } from "react";
import { useMutation } from "react-query";
import { Auth } from "aws-amplify";
import useUI from "context/hooks/useUI";
import AuthBox from "../components/AuthBox";
import { HomeIcon } from "@heroicons/react/outline";

const AuthSigninSection = ({ validateUser, setAuthPage }) => {
  const { toast } = useUI();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: Signin, isLoading } = useMutation(
    async () => await Auth.signIn(email, password),
    {
      onSuccess: (user) => {
        validateUser(user);
      },
      onError: (error) => {
        if (error.code === "UserNotConfirmedException") {
          validateUser({
            codeDeliveryDetails: {
              email,
            },
          });
        } else {
          toast("Sign in failed", error.message, "error");
        }
      },
    }
  );

  const handleSignIn = (e) => {
    e.preventDefault();
    Signin({ email, password });
  };

  return (
    <AuthBox
      title="Sign In"
      description={
        <>
          or{" "}
          <button
            onClick={() => setAuthPage("register")}
            className="text-indigo-500"
          >
            Create Account
          </button>
        </>
      }
      footer={{
        text: "Forgot Password? ",
        page: "forgot",
        linkText: "Reset Password",
      }}
      setAuthPage={setAuthPage}
    >
      <form className="space-y-4" onSubmit={handleSignIn}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              required
              name="username"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              required
              name="password"
              type="password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn-primary w-full p-2 flex justify-center"
        >
          {isLoading ? (
            <HomeIcon className="w-5 h-5 animate-pulse" />
          ) : (
            "Sign in"
          )}
        </button>
      </form>
    </AuthBox>
  );
};

export default AuthSigninSection;
