import useUI from "src/context/hooks/useUI";

export default function MailList({ title, description }) {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between bg-gray-50 rounded-lg shadow-sm">
      <span className="px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl block lg:truncate leading-9">
          {title}
        </h2>
        <br />
        <h4 className="text-lg leading-6 font-normal">{description}</h4>
        <br />
      </span>
      <div>
        <MailForm />
        <div className="text-sm leading-5 font-normal text-gray-400 mt-3">
          We care about the protection of your data. Read our Privacy Policy.
        </div>
      </div>
    </div>
  );
}

export const MailForm = (props) => {
  const { toast } = useUI();
  const handleSubmit = () => {
    var form = document.getElementById("sheetdb-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (document.getElementById("email").value !== "") {
        fetch(form.action, {
          method: "POST",
          body: new FormData(document.getElementById("sheetdb-form")),
        })
          .then((response) => response.json())
          .then((html) => {
            document.getElementById("email").value = "";
            toast("Email Submitted");
          });
      }
    });
  };

  return (
    <form
      method="post"
      className="mt-8 sm:flex"
      id="sheetdb-form"
      action="https://sheetdb.io/api/v1/em65ljj2zvxh4"
    >
      <div className="mt-3 lg:flex lg:mt-0 lg:flex-shrink-0">
        <input
          id="email"
          type="email"
          name="data[Email]"
          placeholder="Enter your email"
          className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
        />
        <input
          name="data[Timestamp]"
          type="hidden"
          value={new Date().toLocaleString("en-US", {
            timeZone: "America/Denver",
          })}
        />
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {props.subscribe ? "Subscribe" : "Notify me"}
          </button>
        </div>
      </div>
    </form>
  );
};
