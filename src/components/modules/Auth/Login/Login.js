import { Link } from "react-router-dom";
import AppRoutes from "../../../../constants/AppRoutes";
import Button from "../../../shared/Button/Button";
import ButtonGroup from "../../../shared/ButtonGroup/ButtonGroup";
import Form from "../../../shared/Form/Form";
import TextInput from "../../../shared/TextInput/TextInput";

const Login = () => {
  return (
    <>
      <h2 style={{ fontWeight: "400" }}> Login to your account.. </h2>
      <Form className="login">
        <TextInput type="email" name="Email"></TextInput>
        <TextInput type="password" name="Password"></TextInput>
        <ButtonGroup>
          <Button>Submit</Button>
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
