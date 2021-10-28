import { useState } from "react";
import { useMutation } from "react-query";
import { Auth } from "aws-amplify";
import useUI from "context/hooks/useUI";
import Link from "next/link";
import states from "data/static/states";
import AuthBox from "../components/AuthBox";
import { HomeIcon } from "@heroicons/react/outline";

const FIELDS = [
  {
    name: "given_name",
    label: "First Name",
    default: "",
    type: "text",
    autoComplete: "given_name",
    columns: "col-span-6",
    disabled: false,
  },
  {
    name: "family_name",
    label: "Last Name",
    default: "",
    type: "text",
    autoComplete: "family_name",
    columns: "col-span-6",
    disabled: false,
  },
  {
    name: "email",
    label: "Email",
    default: "",
    type: "email",
    autoComplete: "email",
    columns: "col-span-6",
    disabled: false,
  },
  {
    name: "custom:state",
    label: "State",
    default: "",
    type: "select",
    autoComplete: "state",
    columns: "col-span-6",
    disabled: false,
    options: states,
  },
  {
    name: "password",
    label: "Password",
    default: "",
    type: "password",
    autoComplete: "new-password",
    columns: "col-span-6",
    disabled: false,
  },
];

const AuthRegisterSection = ({ validateUser, setAuthPage }) => {
  const { toast } = useUI();

  const [state, setState] = useState(
    FIELDS.reduce(
      (obj, item) => Object.assign(obj, { [item.name]: item.default }),
      {}
    )
  );

  const { mutate: signUp, isLoading } = useMutation(
    async () => {
      await Auth.signUp({
        username: state.email,
        password: state.password,
        attributes: {
          given_name: state.given_name,
          family_name: state.family_name,
          "custom:state": state["custom:state"],
        },
      });
      // await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/wallet`);
    },
    {
      onSuccess: (user) => validateUser(user),
      onError: (error) => {
        toast("Sign in failed", error.message, "error");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp();
  };

  return (
    <AuthBox
      title="Create Account"
      description="Create an account to get started"
      footer={{
        text: "Already have an account? ",
        page: "signin",
        linkText: "Sign In",
      }}
      setAuthPage={setAuthPage}
    >
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 md:grid-cols-6">
          {FIELDS.map((field) => (
            <div key={field.name} className={`${field.columns} py-1`}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 required-field capitalize"
              >
                {field.label}
              </label>
              <div className="relative rounded-md shadow-sm">
                {field.type !== "select" ? (
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    autoComplete={field.autoComplete}
                    value={state[field.name]}
                    onChange={(e) =>
                      setState({ ...state, [field.name]: e.target.value })
                    }
                    disabled={field.disabled}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md disabled:bg-gray-100"
                  ></input>
                ) : (
                  <select
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    autoComplete={field.autoComplete}
                    value={state[field.name]}
                    onChange={(e) =>
                      setState({ ...state, [field.name]: e.target.value })
                    }
                    disabled={field.disabled}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md disabled:bg-gray-100"
                  >
                    <option className="text-gray-200" disabled value="">
                      -- Select State --
                    </option>
                    {field.type === "select" &&
                      field.options?.map((option) => (
                        <option key={option} value={option.value}>
                          {option.name}
                        </option>
                      ))}
                  </select>
                )}
              </div>
            </div>
          ))}
        </div>
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
      </form>
    </AuthBox>
  );
};

export default AuthRegisterSection;
