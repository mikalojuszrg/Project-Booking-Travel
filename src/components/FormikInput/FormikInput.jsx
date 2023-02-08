import { Field, ErrorMessage } from "formik";
import styles from "./FormikInput.module.scss";
import Input from "../Input/Input";

const FormikInput = ({ name, ...rest }) => {
  return (
    <div className={styles.container}>
      <Field name={name} as={Input} {...rest} />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default FormikInput;
