import { Link } from "react-router-dom";
import AppRoutes from "../../../../constants/AppRoutes";
import Button from "../../../shared/Button/Button";
import ButtonGroup from "../../../shared/ButtonGroup/ButtonGroup";
import CheckBoxInput from "../../../shared/CheckBoxInput/CheckBoxInput";
import Form from "../../../shared/Form/Form";
import TextInput from "../../../shared/TextInput/TextInput";

const Signup = () => {
  return (
    <>
      <h1 style={{ fontWeight: "400" }}> Create an account.. </h1>
      <Form className="signup">
        <TextInput name="Name" />
        <TextInput type="email" name="Email"></TextInput>
        <TextInput type="password" name="Password"></TextInput>
        <TextInput type="password" name="Confirm Password"></TextInput>
        <CheckBoxInput>I agree to the terms & conditions</CheckBoxInput>
        <ButtonGroup>
          <Button>Submit</Button>
        </ButtonGroup>
        <p className="form-text text-center">
          Already have an account? <Link to={AppRoutes.Login}>Login</Link>{" "}
          instead.
        </p>
      </Form>
    </>
  );
};

export default Signup;
