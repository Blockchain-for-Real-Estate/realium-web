import { HomeIcon } from "@heroicons/react/outline";
import AuthBox from "../components/AuthBox";

const AuthLoadingSection = ({ setAuthPage }) => {
  return (
    <AuthBox
      title="Please wait"
      description="We are signing you in"
      footer={{
        text: "Stuck on this page? ",
        page: "signin",
        linkText: "Go Back",
      }}
      setAuthPage={setAuthPage}
    >
      <div className="flex items-center justify-center py-10">
        <HomeIcon className="h-5 w-5 animate-ping" />
      </div>
    </AuthBox>
  );
};

export default AuthLoadingSection;
