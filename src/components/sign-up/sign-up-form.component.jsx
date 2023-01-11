import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up.styles.scss';

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create a user: current email is already in use");
      } else {
        console.log("error creating a user", error.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const formInputs = [
    {
      label: "Display Name",
      type: "text",
      name: "displayName",
      value: displayName,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      value: email,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      value: password,
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      value: confirmPassword,
    },
  ];

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span> Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        {formInputs.map(({ label, type, name, value }) => {
          return (
            <FormInput
              key={value}
              label={label}
              type={type}
              required
              onChange={handleChange}
              name={name}
              value={value}
            />
          );
        })}
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
