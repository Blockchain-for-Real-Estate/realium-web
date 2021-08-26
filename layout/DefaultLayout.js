import DefaultHeader from "./headers/DefaultHeader";
import DefaultFooter from "./footers/DefaultFooter";

const DefaultLayout = ({ children }) => {
  return (
    <div className="h-full flex flex-col">
      <DefaultHeader />
      <div className="flex-1">{children}</div>
      <DefaultFooter />
    </div>
  );
};

export default DefaultLayout;
