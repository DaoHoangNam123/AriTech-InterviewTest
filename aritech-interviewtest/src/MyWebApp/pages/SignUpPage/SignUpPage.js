import React from "react";
import SignUpForm from "./SignUpForm/SignUpForm";

export default function SignUpPage() {
  return (
    <div
      className="container mx-auto my-5 p-5 rounded-xl"
      style={{ backgroundColor: "#06283D" }}
    >
      <h1 className="flex items-center text-left text-3xl font-bold border-b-2 pb-5 text-white">
        My Amazing Web App
      </h1>
      <div className="flex w-full mb-10">
        <div className="text-left w-1/2">
          <h1 className="text-2xl font-bold pt-5 text-white">
            This is a Title of My Amazing Web App
          </h1>
          <p className="text-base text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            alias blanditiis eos molestias, recusandae laudantium aliquam
            deserunt dignissimos nobis sit.
          </p>
        </div>
        <div className="bg-white w-1/2 pt-5 h-full rounded-xl">
          <h1 className="text-xl font-bold">Sign Up & Start Your Free Trial</h1>
          <div className="grid grid-cols-3 justify-center items-center">
            <hr></hr>
            <span>Quick Sign Up</span>
            <hr></hr>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
