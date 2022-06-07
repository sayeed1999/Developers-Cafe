import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import swal from "sweetalert";
import Button from "../../components/shared/Button";
import ButtonGroup from "../../components/shared/ButtonGroup";
import EmailInput from "../../components/shared/EmailInput";
import Form from "../../components/shared/Form";
import PasswordInput from "../../components/shared/PasswordInput";
import AppMsgs from "../../constants/AppMsgs";
import AppRoutes from "../../constants/AppRoutes";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const { push } = useRouter();

  const submit = () => {
    if (!email || !password) {
      return swal("Warning", AppMsgs.RequiredFieldsEmpty, "warning");
    }

    login(email, password)
      .then(() => {
        // returns UserCredentialImpl;
        swal("Success", AppMsgs.LoggedIn, "success");
        push(AppRoutes.Home);
      })
      .catch((err) => {
        swal("Error", err.message, "error");
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
          Don&apos;t have an account?{" "}
          <Link href={AppRoutes.Signup}>Signup</Link> instead.
        </p>
      </Form>
    </>
  );
};

export default Login;
