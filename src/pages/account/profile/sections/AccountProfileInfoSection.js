import React, { useEffect, useState } from "react";
import Heading2 from "components/general/Heading2";
import useUser from "context/queries/useUser";

const FIELDS = [
  {
    name: "fName",
    label: "First Name",
    default: "",
    type: "text",
    autoComplete: "",
    columns: "col-span-3",
  },
  {
    name: "lName",
    label: "Last Name",
    default: "",
    type: "text",
    autoComplete: "",
    columns: "col-span-3",
  },
  {
    name: "email",
    label: "Email",
    default: "",
    type: "email",
    autoComplete: "",
    columns: "col-span-3",
  },
  {
    name: "phone",
    label: "Phone",
    default: "",
    type: "tel",
    autoComplete: "",
    columns: "col-span-3",
  },
  {
    name: "country",
    label: "Country",
    default: "",
    type: "text",
    autoComplete: "",
    columns: "col-span-3 md:col-span-6",
  },
  {
    name: "address",
    label: "Address",
    default: "",
    type: "text",
    autoComplete: "",
    columns: "col-span-3 md:col-span-6",
  },
  {
    name: "city",
    label: "City",
    default: "",
    type: "text",
    autoComplete: "",
    columns: "col-span-3 md:col-span-2",
  },
  {
    name: "state",
    label: "State",
    default: "",
    type: "text",
    autoComplete: "",
    columns: "col-span-3 md:col-span-2",
  },
  {
    name: "zip",
    label: "Zip",
    default: "",
    type: "text",
    autoComplete: "",
    columns: "col-span-3 md:col-span-2",
  },
];

const AccountProfileInfoSection = () => {
  const [state, setState] = useState(
    FIELDS.reduce(
      (obj, item) => Object.assign(obj, { [item.name]: item.default }),
      {}
    )
  );

  const { data: user } = useUser();

  useEffect(() => {
    if (user) {
      const _state = { ...state };
      Object.keys(user).forEach((key) => {
        if (_state[key]) {
          _state[key] = user[key];
        }
      });
      setState(_state);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="border-b border-gray-200 bg-white rounded-lg shadow">
      <div className=" p-4">
        <Heading2
          title="Account Information"
          subtitle="This information is private unless you choose to share it through
          interactions with others"
        />

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

export default AccountProfileInfoSection;
