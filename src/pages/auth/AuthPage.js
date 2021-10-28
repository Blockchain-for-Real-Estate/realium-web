import Image from "next/image";
import { useState, useEffect } from "react";

import AuthSigninSection from "./sections/AuthSigninSection";
import AuthCompletePasswordSection from "./sections/AuthCompletePasswordSection";
import AuthRegisterSection from "./sections/AuthRegisterSection";
import AuthConfirmEmailSection from "./sections/AuthConfirmEmailSection";
import { useRouter } from "next/router";
import useUI from "context/hooks/useUI";
import { useQueryClient } from "react-query";
import useUser from "context/queries/useUser";
import AuthMFASection from "./sections/AuthMFASection";
import AuthForgotSection from "./sections/AuthForgotSection";
import AuthLoadingSection from "./sections/AuthLoadingSection";

const AuthPage = ({ page }) => {
  const router = useRouter();
  const { toast } = useUI();
  const { data: user } = useUser();
  const queryClient = useQueryClient();

  const [data, setData] = useState();
  const [authPage, setAuthPage] = useState(page);

  useEffect(() => {
    const checkUser = async () => {
      if (user) {
        await router.push("/account/dashboard");
        toast("Sign in successful");
      }
    };
    checkUser();
  }, [user, router, toast]);

  const validateUser = async (user) => {
    if (user.signInUserSession) {
      setAuthPage("loading");
      await queryClient.invalidateQueries("USER");
    } else if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
      setData(user);
      setAuthPage("completePassword");
      toast("Password reset required", "Please reset your password", "warn");
    } else if (user.challengeName === "SOFTWARE_TOKEN_MFA") {
      setData(user);
      setAuthPage("softwareMFA");
      toast("2FA Required", "Please enter 2FA from authenticator app", "warn");
    } else if (user.challengeName === "SMS_MFA") {
      setData(user);
      setAuthPage("smsMFA");
      toast("2FA Required", "Please enter 2FA from text message", "warn");
    } else if (user.codeDeliveryDetails) {
      setData({
        ...user.codeDeliveryDetails,
        email: user.user?.username || user.codeDeliveryDetails.email,
      });
      setAuthPage("confirmEmail");
    } else {
      setAuthPage("signin");
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
            setAuthPage={setAuthPage}
            validateUser={validateUser}
            user={data}
          />
        );
      case "forgot":
        return <AuthForgotSection setAuthPage={setAuthPage} />;
      case "confirmEmail":
        return (
          <AuthConfirmEmailSection
            setAuthPage={setAuthPage}
            validateUser={validateUser}
            deliveryDetails={data}
          />
        );
      case "softwareMFA":
        return (
          <AuthMFASection
            validateUser={validateUser}
            user={data}
            type={"SOFTWARE_TOKEN_MFA"}
          />
        );
      case "smsMFA":
        return (
          <AuthMFASection
            validateUser={validateUser}
            user={data}
            type="SMS_MFA"
          />
        );
      case "register":
        return (
          <AuthRegisterSection
            validateUser={validateUser}
            setAuthPage={setAuthPage}
          />
        );
      case "loading":
        return <AuthLoadingSection setAuthPage={setAuthPage} />;
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <div className="h-full bg-white lg:flex " key={page}>
      <div className="flex-1 flex items-center justify-center px-4 h-full py-10">
        {GetPage()}
      </div>
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
