import DefaultHeader from "./headers/DefaultHeader";
import DefaultFooter from "./footers/DefaultFooter";
import TopBanner from "./headers/TopBanner";
import { InformationCircleIcon } from "@heroicons/react/solid";

const DefaultLayout = ({ children }) => {
  return (
    <div className="h-full flex flex-col">
      <div>
        <TopBanner
          message="Welcome to Realium! We are currently in testing mode so funds and properties are not real for now."
          Icon={InformationCircleIcon}
        />
        <DefaultHeader />
      </div>
      <div className="flex-1">{children}</div>
      <DefaultFooter />
    </div>
  );
};

export default DefaultLayout;
