import Link from "next/link";
import { useState } from "react";
import { useMutation } from "react-query";
import { Auth } from "aws-amplify";
import useUI from "context/hooks/useUI";

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
    <div className="container-primary">
      <h4 className="mb-4 text-center text-gray-900 font-bold">Sign In</h4>
      <form className="space-y-4" onSubmit={handleSignIn}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
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

        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="text-sm">
            <button
              type="button"
              className="text-ss-light-blue"
              onClick={() => setAuthPage("forgot")}
            >
              Forgot Password?
            </button>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full p-2">
          {isLoading ? "..." : "Sign in"}
        </button>
      </form>

      <div className="mt-6 pb-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/auth/register" passHref>
                <button className="text-ss-light-blue">Register Now</button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSigninSection;
