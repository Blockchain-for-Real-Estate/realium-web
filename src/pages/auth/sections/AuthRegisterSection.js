import { useState } from "react";
import { useMutation } from "react-query";
import { Auth } from "aws-amplify";
import useUI from "context/hooks/useUI";

const FIELDS = [
  {
    name: "given_name",
    label: "First Name",
    default: "",
    type: "text",
    autoComplete: "given_name",
    columns: "col-span-3",
    disabled: false,
  },
  {
    name: "family_name",
    label: "Last Name",
    default: "",
    type: "text",
    autoComplete: "family_name",
    columns: "col-span-3",
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
    name: "password",
    label: "Password",
    default: "",
    type: "password",
    autoComplete: "new-password",
    columns: "col-span-6",
    disabled: false,
  },
];

const AuthRegisterSection = ({ validateUser }) => {
  const { toast } = useUI();

  const [state, setState] = useState(
    FIELDS.reduce(
      (obj, item) => Object.assign(obj, { [item.name]: item.default }),
      {}
    )
  );

  const { mutate } = useMutation(
    async () =>
      await Auth.signUp({
        username: state.email,
        password: state.password,
        attributes: {
          given_name: state.given_name,
          family_name: state.family_name,
        },
      }),
    {
      onSuccess: (user) => validateUser(user),
      onError: (error) => {
        toast("Sign in failed", error.message, "error");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <form
      className="border-b border-gray-200 bg-white rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      <div className=" p-4">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {FIELDS.map((field) => (
            <div key={field.name} className={`py-2 px-2 ${field.columns}`}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 required-field capitalize"
              >
                {field.label}
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
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
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-200 text-right px-4 py-2">
        <button className="btn-primary py-2 px-4">Save</button>
      </div>
    </form>
  );
};

export default AuthRegisterSection;
