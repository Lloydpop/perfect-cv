import React from "react";
import AuthWrapper from "../AuthWrapper/AuthWrapper";
import LoginForm from "./LoginForm";

export const Login = () => {
  return (
    <AuthWrapper
      heading="Log in"
      subTitle="Welcome back! please enter your details"
    >
      <LoginForm />
    </AuthWrapper>
  );
};
