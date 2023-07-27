import React from "react";
import Input from "./Input";
function Login() {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="possword" placeholder="possword" />
      <Input type="submit" placeholder="login" />
    </form>
  );
}
export default Login;
