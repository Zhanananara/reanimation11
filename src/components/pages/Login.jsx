import React from "react";
import AuthForm from "../Auth/AuthForm";
import { useAuth } from "../context/AuthContextProvider";

const Login = () => {
  const { loginUser } = useAuth();

  return (
    <div>
      <AuthForm
        title={"Login"}
        btnText={"Login"}
        link={"/register"}
        linkText={"Don't have an account?Register"}
        handleSave={loginUser}
      />
    </div>
  );
};

export default Login;
