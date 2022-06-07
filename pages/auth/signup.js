import Link from "next/link";
import { useContext, useState } from "react";
import swal from "sweetalert";
import Button from "../../components/shared/Button";
import ButtonGroup from "../../components/shared/ButtonGroup";
import CheckBoxInput from "../../components/shared/CheckBoxInput";
import EmailInput from "../../components/shared/EmailInput";
import Form from "../../components/shared/Form";
import PasswordInput from "../../components/shared/PasswordInput";
import TextInput from "../../components/shared/TextInput";
import AppMsgs from "../../constants/AppMsgs";
import AppRoutes from "../../constants/AppRoutes";
import { AuthContext } from "../../contexts/AuthContext";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const { signup } = useContext(AuthContext);

  const submit = () => {
    if (!username || !email || !password || !confirmPassword || !agree) {
      swal("Warning", AppMsgs.RequiredFieldsEmpty, "warning");
      return;
    }

    if (password !== confirmPassword) {
      swal("Warning", "Password & confirm password don't match", "warning");
      return;
    }

    try {
      signup(email, password, username);
    } catch (err) {
      swal("Error", err.message, "error");
    }
  };

  return (
    <>
      <h1 style={{ fontWeight: "400" }}> Create an account.. </h1>
      <Form className="signup">
        <TextInput name="Username" value={username} onChange={setUsername} />
        <EmailInput name="Email" value={email} onChange={setEmail} />
        <PasswordInput
          name="Password"
          value={password}
          onChange={setPassword}
        />
        <PasswordInput
          name="Confirm Password"
          value={confirmPassword}
          onChange={setConfirPassword}
        />
        <CheckBoxInput value={agree} onChange={setAgree}>
          I agree to the terms & conditions
        </CheckBoxInput>
        <ButtonGroup>
          <Button onClick={submit}>Submit</Button>
        </ButtonGroup>
        <p className="form-text text-center">
          Already have an account? <Link href={AppRoutes.Login}>Login</Link>{" "}
          instead.
        </p>
      </Form>
    </>
  );
};

export default Signup;
