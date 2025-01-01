import React from "react";
import { SignIn, SignUp } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="auth-page">
      <SignIn />
    </main>
  );
};
export default SignInPage;
