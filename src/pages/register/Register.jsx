import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Label, Input, StyledInlineErrorMessage, Submit } from "./styles";
import { Link } from "react-router-dom";
import "yup-phone";

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
};

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().min(3).max(25).required("First Name is required"),
  lastName: Yup.string().min(3).max(25).required("Last Name is required!"),
  phoneNumber: Yup.string()
    .phone("MY", true)
    .required("Phone Number is required"),
  email: Yup.string().email().required("Email Field is required"),
  password: Yup.string().required("Password is required"),
});

const onSubmit = (data) => {
  axios.post("http://localhost:4000/auth/register", data).then(() => {
    console.log(data);
  });
};

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="regContainer">
        <div className="regSection">
          <div className="leftSideReg">
            <div className="Lside">
              <Formik
                initialValues={initialValues}
                validationSchema={RegisterSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  const { errors, touched, isValid, dirty, isSubmitting } =
                    formik;

                  return (
                    <div className="regContainer">
                      <h1>Create Account</h1>
                      <div className="regTitle">
                        <p>Have an existing account?</p>
                        <Link to="/auth/login">Log in Now</Link>
                      </div>

                      <Form>
                        <div className="regFormRow">
                          <Label htmlFor="First Name">
                            <Input
                              type="text"
                              name="firstName"
                              autoCorrect="off"
                              autoComplete="name"
                              placeholder="First Name"
                              valid={touched.firstName && !errors.firstName}
                              error={touched.firstName && errors.firstName}
                            />
                          </Label>

                          {errors.firstName && touched.firstName && (
                            <StyledInlineErrorMessage>
                              {errors.firstName}
                            </StyledInlineErrorMessage>
                          )}
                        </div>
                        <div className="regFormRow">
                          <Label htmlFor="Last Name">
                            <Input
                              type="text"
                              name="lastName"
                              autoCorrect="off"
                              autoComplete="name"
                              placeholder="Last Name"
                              valid={touched.lastName && !errors.lastName}
                              error={touched.lastName && errors.lastName}
                            />
                          </Label>

                          {errors.lastName && touched.lastName && (
                            <StyledInlineErrorMessage>
                              {errors.lastName}
                            </StyledInlineErrorMessage>
                          )}
                        </div>
                        {/* Phone Number */}
                        <div className="regFormRow">
                          <Label htmlFor="Phone Number">
                            <Input
                              type="number"
                              name="phoneNumber"
                              autoCorrect="off"
                              autoComplete="number"
                              placeholder="Phone Number"
                              pattern="[0-9]{4}-[0-9]{7}"
                              valid={touched.phoneNumber && !errors.phoneNumber}
                              error={touched.phoneNumber && errors.phoneNumber}
                            />
                          </Label>

                          {errors.phoneNumber && touched.phoneNumber && (
                            <StyledInlineErrorMessage>
                              {errors.phoneNumber}
                            </StyledInlineErrorMessage>
                          )}
                        </div>

                        <div className="regFormRow">
                          <Label htmlFor="Email">
                            <Input
                              type="email"
                              name="email"
                              autoCorrect="off"
                              autoComplete="email"
                              placeholder="Email"
                              valid={touched.email && !errors.email}
                              error={touched.email && errors.email}
                            />
                          </Label>

                          <ErrorMessage name="email">
                            {(msg) => (
                              <StyledInlineErrorMessage>
                                {msg}
                              </StyledInlineErrorMessage>
                            )}
                          </ErrorMessage>
                        </div>

                        <div className="regFormRow">
                          <Label htmlFor="Password">
                            <Input
                              type="password"
                              name="password"
                              autoCorrect="off"
                              autoComplete="password"
                              placeholder="Password"
                              valid={touched.password && !errors.password}
                              error={touched.password && errors.password}
                            />
                          </Label>
                          {errors.password && touched.password && (
                            <StyledInlineErrorMessage>
                              {errors.password}
                            </StyledInlineErrorMessage>
                          )}
                        </div>

                        <Submit
                          type="submit"
                          disabled={!isValid || isSubmitting}
                        >
                          {isSubmitting ? `Submiting...` : `Submit`}
                        </Submit>
                      </Form>
                    </div>
                  );
                }}
              </Formik>
            </div>
          </div>

          <div className="rightSideReg">
            <h1>this is right side</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
