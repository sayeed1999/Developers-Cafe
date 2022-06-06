import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppMsgs from "../../../../constants/AppMsgs";
import AppRoutes from "../../../../constants/AppRoutes";
import { AuthContext } from "../../../../contexts/AuthContext";
import Button from "../../../shared/Button/Button";
import ButtonGroup from "../../../shared/ButtonGroup/ButtonGroup";
import EmailInput from "../../../shared/EmailInput/EmailInput";
import Form from "../../../shared/Form/Form";
import PasswordInput from "../../../shared/PasswordInput/PasswordInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const { push } = useRouter();

  const submit = () => {
    if (!email || !password) {
      return alert("Required fields empty");
    }

    login(email, password)
      .then(() => {
        // returns UserCredentialImpl;
        alert(AppMsgs.LoggedIn);
        push(AppRoutes.Home);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <h2 style={{ fontWeight: "400" }}> Login to your account.. </h2>
      <Form className="login">
        <EmailInput name="Email" value={email} onChange={setEmail} />
        <PasswordInput
          name="Password"
          value={password}
          onChange={setPassword}
        />
        <ButtonGroup>
          <Button onClick={submit}>Submit</Button>
        </ButtonGroup>
        <p className="form-text text-center">
          Don't have an account? <Link to={AppRoutes.Signup}>Signup</Link>{" "}
          instead.
        </p>
      </Form>
    </>
  );
};

export default Login;
