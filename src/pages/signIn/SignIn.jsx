import LogoDark from "../../assets/logo/logoDark";
import Google from "../../assets/icons/Google";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";
import { useMutation } from "@tanstack/react-query";
// import { useGoogleLogin } from "@react-oauth/google";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import authServices from "../../services/auth/authServices";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email")
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Must be a valid email"
      )
      .min(3, "Email must be at least 3 characters")
      .max(255)
      .required("Email address is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { isLoading, mutate } = useMutation(
    (payload) => authServices.signin(payload),
    {
      onError: (error) => {
        toast.error(error.response.data.message);
      },
      onSuccess: (response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response?.data?.token);
          toast.success("yaaay");
          navigate("../accounts/dashboard");
        } else {
          toast.error("something went wrong. Please wait awhile and try again");
        }
      },
    }
  );

  return (
    <>
      <Toaster />
      <div className="authContainer">
        <div className="auth__card__logo flex justify-center mb-10">
          <LogoDark style={{ height: "30px" }} />
        </div>

        <div className="md:flex  justify-center ">
          <div className="box auth__card lg:w-[27vw]">
            <div className="mt-[40px] lead">
              <h3>Sign In</h3>
              <p className="muted">
                Enter your credentials to access your account.
              </p>
            </div>
            {/* 
            <div className="auth_G_btn my-[30px]">
              <button className="btn btn__empty block ">
                <div className="flex gap-3 justify-center">
                  <Google className="icon" />
                  Sign in with google
                </div>
              </button>
            </div>
            <div className="breakr flex align-center justify-between ">
              <span></span>
              <span></span>
              <span></span>
            </div> */}

            <form
              className="mt-[30px]"
              onSubmit={handleSubmit((payload) => mutate(payload))}
            >
              <div className="form-group">
                <label className="">Email address</label>
                <input
                  placeholder="Enter email address"
                  {...register("email")}
                />
                {<h2 className="error-message">{errors?.email?.message}</h2>}
              </div>
              <div className="form-group mt-[20px]">
                <label className="">Password</label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  {...register("password")}
                  placeholder="password"
                  {...register("password")}
                />
                <div className="pl-[90%]">
                  <span
                    className="text-base muted hover:text-blue-800 absolute mt-[-34px]"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? (
                      <EyeInvisibleOutlined />
                    ) : (
                      <EyeOutlined />
                    )}
                  </span>
                </div>
                {<h2 className="error-message">{errors?.password?.message}</h2>}
              </div>
              <div className="mt-[40px]">
                {isLoading ? (
                  <button type="button" className="btn primary block">
                    {" "}
                    <LoadingOutlined />{" "}
                  </button>
                ) : (
                  <button type="submit" className="btn primary block">
                    Sign in
                  </button>
                )}
              </div>{" "}
            </form>

            <p className="mt-[20px]">
              have an account? <Link to="/sign-up">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
