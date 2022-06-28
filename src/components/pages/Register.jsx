import React from "react";
import AuthForm from "../Auth/AuthForm";
import { useAuth } from "../context/AuthContextProvider";

const Register = () => {
  const { registerUser } = useAuth();

  return (
    <div>
      <AuthForm
        title={"Register"}
        btnText={"Register"}
        link={"/login"}
        linkText={"Already have account? Login"}
        handleSave={registerUser}
      />
    </div>
  );
};

export default Register;
