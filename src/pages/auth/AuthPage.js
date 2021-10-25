import Image from "next/image";
import { useState } from "react";

import AuthSigninSection from "./sections/AuthSigninSection";
import AuthCompletePasswordSection from "./sections/AuthCompletePasswordSection";
import AuthRegisterSection from "./sections/AuthRegisterSection";
import AuthConfirmEmailSection from "./sections/AuthConfirmEmailSection";
import { useRouter } from "next/router";
import useUI from "context/hooks/useUI";
import { useQueryClient } from "react-query";

const AuthPage = ({ page }) => {
  const router = useRouter();
  const { toast } = useUI();
  const queryClient = useQueryClient();

  const [data, setData] = useState();
  const [authPage, setAuthPage] = useState(page);

  const validateUser = async (user) => {
    if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
      setData(user);
      setAuthPage("completePassword");
      toast("Password reset required", "Please reset your password", "warn");
    } else if (user.codeDeliveryDetails) {
      setData({ ...user.codeDeliveryDetails, email: user.user.username });
      setAuthPage("confirmEmail");
    } else {
      await router.push(router.query.redirect || "/account/dashboard");
      await queryClient.invalidateQueries("USER");
      toast("Signed In", "You are successfully signed in");
    }
  };

  const GetPage = () => {
    switch (authPage) {
      case "signin":
        return (
          <AuthSigninSection
            setAuthPage={setAuthPage}
            validateUser={validateUser}
          />
        );
      case "completePassword":
        return (
          <AuthCompletePasswordSection
            validateUser={validateUser}
            user={data}
          />
        );
      case "confirmEmail":
        return (
          <AuthConfirmEmailSection
            validateUser={validateUser}
            deliveryDetails={data}
          />
        );
      case "register":
        return <AuthRegisterSection validateUser={validateUser} />;
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <div className="h-full bg-white flex">
      <div className="flex-1 flex items-center px-4">{GetPage()}</div>
      <div className="flex-1 relative">
        <Image
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
          layout="fill"
        />
      </div>
    </div>
  );
};

export default AuthPage;
