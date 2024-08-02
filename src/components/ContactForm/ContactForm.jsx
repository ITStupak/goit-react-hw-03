import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <Formik initialValues={{ name: "", number: "", id: "" }} /* validate={} */>
      <Form className={css.form}>
        <Field className={css["input-name"]} type="text" name="name">
          <label className={css["input-label"]}>Name</label>
        </Field>
        <ErrorMessage name="name" component="span" />
        <Field className={css["input-number"]} type="tel" name="number">
          <label className={css["input-label"]}>Number</label>
        </Field>
        <ErrorMessage name="number" component="span" />
        <button className={css["form-btn"]} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
