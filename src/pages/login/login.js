import React, { Component } from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import * as yup from "yup";
import "./login.less";
class login extends Component {
  loginFormSubmit(vals) {
    console.log(vals);
    axios
      .post("https://localhost/apis/auth/login", vals)
      .then(function(response) {
        window.location.assign("http://localhost:3000/hot");
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    let loginSchema = yup.object().shape({
      name: yup.string().required("Email or mobile cannot be empty!"),
      password: yup.string().required("Password cannot be empty!")
      //   email: yup.string().email(),
      //   website: yup.string().url(),
      //   createdOn: yup.date().default(function() {
      //     return new Date();
      //   })
    });
    return (
      <Formik
        name="loginForm"
        onSubmit={values => {
          // same shape as initial values
          this.loginFormSubmit(values);
        }}
        initialValues={{
          name: "",
          password: ""
        }}
        validationSchema={loginSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="d-flex flex-column align-items-center mt-1 mr-auto ml-auto">
              <div className="col-lg-6 col-md-6 col-sm-8 col-12 p-3 border border-light rounded shadow">
                <div className="l-input-container">
                  <FontAwesomeIcon
                    icon={faUser}
                    className={
                      "ico  " +
                      (errors.name && touched.name ? "text-danger" : "")
                    }
                  />

                  <Field
                    name="name"
                    placeholder="email or mobile"
                    className={
                      "form-control " +
                      (errors.name && touched.name ? "is-invalid" : "")
                    }
                  />
                </div>

                {errors.name && touched.name ? (
                  <p className="text-sm text-white bg-danger rounded p-1">
                    {errors.name}
                  </p>
                ) : null}
                <div className="l-input-container">
                  <FontAwesomeIcon
                    icon={faKey}
                    className={
                      "ico  " +
                      (errors.password && touched.password ? "text-danger" : "")
                    }
                  />

                  <Field
                    name="password"
                    placeholder="password"
                    type="password"
                    className={
                      "form-control " +
                      (errors.password && touched.password ? "is-invalid" : "")
                    }
                  />
                </div>

                {errors.password && touched.password ? (
                  <p className="text-sm text-white bg-danger rounded p-1">
                    {errors.password}
                  </p>
                ) : null}

                <div className="text-center pt-5 pl-3 pr-3">
                  <Button
                    outline
                    type="submit"
                    size="sm"
                    color="danger"
                    className="mr-1"
                  >
                    SIGN IN
                  </Button>
                  <Button outline size="sm" color="info">
                    SIGN UP
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default login;
