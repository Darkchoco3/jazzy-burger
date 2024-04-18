import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JazzyLogo from "../assets/jazzy icon.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const SIgnin = () => {
  const [isReveal, setIsReveal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  function handleToggle() {
    !isReveal ? setIsReveal(true) : setIsReveal(false);
  }
  useEffect(() => {
    document.title = "Login | page";
  });
  return (
    <>
      <main className="container vh-50 d-flex flex-column my-3">
        <div>
          <div className="text-center">
            <Link>
              <img src={JazzyLogo} alt="jazzy-logo" />
            </Link>
          </div>
          <h2 className="fs-3 fw-bold my-4 text-center w-75 m-auto">
            {" "}
            SIGN IN TO YOUR ACCOUNT
          </h2>
          {/* forms */}
          <Form className="w-75 m-auto " onSubmit={handleSubmit(onSubmit)}>
            {/* INPUT FOR EMAIL */}
            <Form.Label className="fs-6 text-secondary">Email</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="example@mail.com"
              className="mb-3"
              {...register("email")}
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="border border-3 rounded-3"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger fw-bold">Email is required</span>
              )}
            </FloatingLabel>

            {/* input for password */}
            <Form.Label className="fs-6 text-secondary">Password</Form.Label>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type={isReveal ? "text" : "password"}
                placeholder="Password"
                className="border border-3 rounded-3 position-relative"
                {...register("exampleRequired", { required: true })}
              />
              {errors.exampleRequired && (
                <span className="text-danger fw-bold">
                  This field is required
                </span>
              )}

              <p
                className="position-absolute end-0 top-0 mt-3 me-2"
                role="button"
                onClick={handleToggle}
              >
                {isReveal ? "hide" : "show"}
              </p>
            </FloatingLabel>

            {/* below is check and balance */}
            <div className=" mt-3 d-flex justify-content-between ">
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={"Keep me signed in"}
                    className="fs-6 fw-bold"
                  />
                </div>
              ))}
              <Link className="text-decoration-none" to="#">
                Reset Password
              </Link>
            </div>
            <button className="btn btn-danger fs-3 text-white w-100">
              Sign In
            </button>
            <p className="text-center mt-3 fw-bold">
              Don't have an account?
              <Link className="text-decoration-none" to="/SignUp">
                Create one
              </Link>
            </p>
          </Form>
        </div>
      </main>
    </>
  );
};

export default SIgnin;
