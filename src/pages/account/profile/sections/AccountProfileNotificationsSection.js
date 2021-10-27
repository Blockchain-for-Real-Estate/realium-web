import React, { useEffect, useState } from "react";
import Heading2 from "components/general/Heading2";
import useUpdateUserMutation from "context/mutations/useUpdateUserMutation";
import useUser from "context/queries/useUser";

const FIELDS = [
  {
    name: "custom:pref_email",
    label: "Email Notifications",
    description: "Get notified by email for actions on your account",
    default: true,
    type: "checkbox",
    columns: "col-span-3",
    disabled: false,
  },
];

const AccountProfileNotificationSection = () => {
  const { data: user } = useUser();
  const { mutate: UpdateUser, isLoading } = useUpdateUserMutation();

  const [state, setState] = useState(
    FIELDS.reduce(
      (obj, item) => Object.assign(obj, { [item.name]: item.default }),
      {}
    )
  );

  useEffect(() => {
    if (user) {
      const _state = { ...state };
      Object.keys(user).forEach((key) => {
        if (_state[key] !== undefined) {
          _state[key] = user[key];
        }
      });
      setState(_state);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateUser({ ...user, ...state });
  };

  return (
    <form
      className="border-b border-gray-200 bg-white rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      <div className=" p-4">
        <Heading2
          title="Notifications"
          subtitle="Decide which communications you'd like to receive and how."
        />

        <div className="py-4">
          {FIELDS.map((field) => (
            <div key={field.name} className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  id={field.name}
                  name={field.name}
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  checked={state[field.name]}
                  onChange={() =>
                    setState({
                      ...state,
                      [field.name]: !state[field.name],
                    })
                  }
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor={field.name}
                  className="font-medium text-gray-700"
                >
                  {field.label}
                </label>
                <p id="comments-description" className="text-gray-500">
                  {field.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-200 text-right px-4 py-2">
        <button className="btn-primary py-2 px-4" disabled={isLoading}>
          Save
        </button>
      </div>
    </form>
  );
};

export default AccountProfileNotificationSection;
