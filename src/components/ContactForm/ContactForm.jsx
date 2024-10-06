import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";

import toast from "react-hot-toast";
import * as Yup from "yup";

import s from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";

const validationSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  contactNumber: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number format should be: 000-00-00")
    .required("Required"),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();

  const initialValues = {
    contactName: "",
    contactNumber: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);

    if (
      values.contactName.trim() === "" ||
      values.contactNumber.trim() === ""
    ) {
      return toast.error("Fill all fields.");
    }

    dispatch(
      addContact({ name: values.contactName, number: values.contactNumber })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <div className={s.container}>
          <label htmlFor={nameId}>Name</label>
          <Field name="contactName" id={nameId} className={s.field} />
          <ErrorMessage
            name="contactName"
            component="span"
            className={s.error}
          />
        </div>
        <div className={s.container}>
          {" "}
          <label htmlFor={numberId}>Number</label>
          <Field name="contactNumber" id={numberId} className={s.field} />
          <ErrorMessage
            name="contactNumber"
            component="span"
            className={s.error}
          />
        </div>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
