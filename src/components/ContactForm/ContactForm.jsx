import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const INITIALS_VALUES = { name: "", number: "", id: "" };
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  const nameFieldId = useId();
  const phoneFieldId = useId();
  return (
    <Formik
      initialValues={INITIALS_VALUES}
      onSubmit={handleSubmit}
      validate={() => {}}
    >
      <Form className={css.form}>
        <label className={css["input-label"]} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={css["input-name"]}
          type="text"
          name="name"
          id={nameFieldId}
        />
        <ErrorMessage name="name" component="span" />
        <label className={css["input-label"]} htmlFor={phoneFieldId}>
          Number
        </label>
        <Field
          className={css["input-number"]}
          type="tel"
          name="number"
          id={phoneFieldId}
        />
        <ErrorMessage name="number" component="span" />
        <button className={css["form-btn"]} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
