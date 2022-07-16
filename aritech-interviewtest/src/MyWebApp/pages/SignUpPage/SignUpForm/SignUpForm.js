import { Button, Input } from "antd";
import React, { useEffect, useRef } from "react";
import { withFormik } from "formik";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import * as Yup from "yup";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignUpForm(props) {
  let userDefault = useSelector((state) => state.signUpSlice.userDefault);
  let navigate = useNavigate();
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  let inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    if (values.name === userDefault.name) {
      Object.assign(values, { ...userDefault });
    }
  }, [values.name]);
  return (
    <div className="container px-5 mt-5 h-full">
      <form onSubmit={handleSubmit} onBlur={handleBlur} name="basic">
        <div className="mb-5 flex">
          {/* Name input */}
          <div
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Input
              name="name"
              onChange={handleChange}
              placeholder="Your name"
              value={values.name}
              ref={inputRef}
            />
            {errors.name && touched.name && (
              <div className=" text-red-500">{errors.name}</div>
            )}
          </div>

          {/* Email input */}
          <div
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input
              name="email"
              onChange={handleChange}
              placeholder="Your email"
              value={values.email}
            />
            {touched.email && errors.email && (
              <div className=" text-red-500">{errors.email}</div>
            )}
          </div>
        </div>

        {/* Phone input */}
        <div name="phoneNumber" className="mb-5">
          <Input
            name="phoneNumber"
            onChange={handleChange}
            placeholder="Your phone number"
            className="w-full"
            value={values.phoneNumber}
          />

          {touched.phoneNumber && errors.phoneNumber && (
            <div className=" text-red-500">{errors.phoneNumber}</div>
          )}
        </div>

        {/*  Address input */}
        <div name="address" className="mb-5">
          <Input
            name="address"
            onChange={handleChange}
            placeholder="Your address"
            className="w-full"
            value={values.address}
          />
          {touched.address && errors.address && (
            <div className=" text-red-500">{errors.address}</div>
          )}
        </div>

        {/* Password input */}
        <div name="password" className="mb-5">
          <Input
            name="password"
            onChange={handleChange}
            className="w-full"
            type="password"
            placeholder="Your password"
            value={values.password}
          />
          {touched.password && errors.password && (
            <div className=" text-red-500">{errors.password}</div>
          )}
        </div>
        <div>
          <Button
            className="w-full mb-2 rounded"
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </div>
        <div className="mb-5">
          <span>Already have an account?</span>
          <span
            className="mx-2 text-blue-500 hover:text-blue-700 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Login Now!
          </span>
        </div>
      </form>
    </div>
  );
}
const signUpWebApp = withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .trim()
      .required("Name is required")
      .min(6, "Name has min 6 characters")
      .max(20, "Name has max 20 characters")
      .matches(
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
        "Name contains only alphabet"
      ),
    email: Yup.string()
      .trim()
      .required("Email is required!")
      .matches(
        /([a-zA-Z0-9_.-\s]+)@([a-zA-Z0-9@$!%*?&#^()_+-~`\s]+)?$/,
        "Email must contains @"
      )
      .matches(
        /^([a-zA-Z0-9@$!%*?&#^()_+-~`]+)(?!\s)([a-zA-Z0-9_.-]+)?@([a-zA-Z0-9@$!%*?&#^()_+-~`]+)?([.])?$/,
        "Email must not contains space"
      )
      .matches(
        /([a-zA-Z0-9.@$!%*?&#^()_+-~`]+)@([a-zA-Z@$!%*?&#^()_+-~`]+)([.])([a-zA-Z@$!%*?&#^()_+-~`]+)$/,
        "Email must contains local part. Ex: @gmail.com"
      )
      .matches(
        /([a-zA-Z0-9_.-]+)@([a-zA-Z]+)([.])([a-zA-Z]+)$/,
        "Email must not contains special character or number"
      )
      .email("Email is invalid"),
    phoneNumber: Yup.string()
      .trim()
      .required("Phone is required")
      .matches(/([0-9]{1,})$/, "Phone is number")
      .matches(/^(\+[1-9]{2})?([0-9]{10,})$/, "Phone has min 10 characters")
      .matches(/^(\+[1-9]{2})?([0-9]{10,12})$/, "Phone has max 12 characters"),
    address: Yup.string()
      .trim()
      .required("Address is required")
      .matches(
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_/,]+$/,
        "Address contains only alphabet"
      ),
    password: Yup.string()
      .trim()
      .required("Password is required")
      .min(6, "Password has min 6 characters")
      .max(20, "Password has max 20 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*[@$!%*#?&])?[A-Za-z0-9@$!%*#?&]{6,20}$/,
        "Password must contains at least 1 uppercase letter"
      )
      .matches(
        /^(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{6,20}$/,
        "Password must contains at least 1 special letter"
      ),
  }),
  handleSubmit: (values, { setSubmitting, resetForm }) => {
    swal("Good job!", "Sign up successfully!", "success");
    resetForm({ values: "" });
  },
  displayName: "SignUpForm",
})(SignUpForm);
export default connect()(signUpWebApp);
