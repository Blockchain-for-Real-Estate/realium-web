import useUI from "src/context/hooks/useUI";

export default function MailList({ title, description }) {
  const MEDIUM = {
    href: "https://medium.com/realium",
    name: "Medium",
    color: "gray",
    svg: <svg className="w-4 h-4 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"/></svg>
    }
  const LINKEDIN = {
    href: "https://www.linkedin.com/company/realium-inc/",
    name: "LinkedIn",
    color: "blue",
    svg: <svg className="w-4 h-4 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-11.493675 -16.3118 99.61185 97.8708"><path d="M72.865 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836m-16.873-5.433h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2H4.781A4.728 4.728 0 000 4.6744v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67"/><path d="M72.164 56.4114a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"/></svg> 
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between bg-gray-50 rounded-lg shadow-sm">
      <span className="px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl block lg:truncate">
          {title}
        </h2>
        <h4 className="block text-indigo-600">
          {description}
        </h4>
        <br/>
        <div className="space-x-4">
          <SocialLink key={MEDIUM.href} link={MEDIUM} />
          <SocialLink key={LINKEDIN.href} link={LINKEDIN} />
        </div>
      </span>
      <MailForm />
    </div>
  );
}

export const SocialLink = ({ link }) => {
  return (
    <a href={link.href} target="_blank" rel="noreferrer" className={`bg-${link.color}-600 px-3 py-2 text-xs font-semibold text-white inline-flex items-center space-x-2 rounded`}>
      {link.svg}
      <span>{link.name}</span>
    </a>
  );
};

export const MailForm = () => {
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
      id="sheetdb-form"
      action="https://sheetdb.io/api/v1/em65ljj2zvxh4"
    >
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 sm:px-8">
        <div className="inline-flex rounded-md">
          <input
            id="email"
            type="email"
            name="data[Email]"
            placeholder="Enter your email"
            className="inline-flex items-center justify-center sm:w-80 py-3 border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
          />
          <input
            name="data[Timestamp]"
            type="hidden"
            value={new Date().toLocaleString("en-US", {
              timeZone: "America/Denver",
            })}
          />
        </div>
        <div className="ml-3 inline-flex rounded-md shadow-sm">
          <button
            onClick={handleSubmit}
            type="submit"
            className="inline-flex items-center justify-center text-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
