import styles from "../../styles/Form.module.css";

const Form = ({ children, className, ...rest }) => {
  return (
    <form className={`${styles.form} ${className}`} action="#" {...rest}>
      {children}
    </form>
  );
};

export default Form;
