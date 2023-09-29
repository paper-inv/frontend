import "./SignUp.css";
import LogoDark from "../../assets/logo/logoDark";
import Google from "../../assets/icons/Google";
import "animate.css";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
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
import DefaultModal from "../../components/modals/default";
import Success from "../../assets/icons/success";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [authModal, setAuthModal] = useState(false);

  const schema = yup.object().shape({
    fullname: yup
      .string()
      .min(4, "Full name must be at least 4 characters")
      .required("Full name is required"),
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
    password: yup
      .string()
      .min(8, "Password must be a minimum of 8 characters")
      .max(50)
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { isLoading, mutate } = useMutation(
    (payload) => authServices.signup(payload),
    {
      onError: (error) => {
        toast.error(error.response.data.message);
      },
      onSuccess: (response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response?.data?.token);
          setAuthModal(true);
        } else {
          toast.error("something went wrong. Please wait awhile and try again");
        }
      },
    }
  );

  // const mutation = useMutation(
  //   (payload) => authServices.googleSignin(payload),
  //   {
  //     onError: (error) => {
  //       toast.error(error.response.data.errors);
  //     },
  //     onSuccess: ({ status, data }) => {
  //       if (status === 200) {
  //         localStorage.setItem("token", data?.token);
  //         setModalOpen(true);
  //       } else {
  //         toast.error("An error occurred, please try again later");
  //       }
  //     },
  //   }
  // );
  return (
    <div className="authBG">
      <div>
        <Toaster />
      </div>
      {authModal && (
        <DefaultModal
          title="Welcome to Paper"
          sub="You account is set up and ready for action!"
          body={
            <div className="flex my-[50px] justify-center">
              <Success height="200px" style={{ borderRadius: "50%" }} />
            </div>
          }
          cta={{ title: "Go to dashboard", to: "/accounts/" }}
        />
      )}
      <div className="authContainer">
        <div className="auth__card__logo flex justify-center mb-10">
          <LogoDark style={{ height: "30px" }} />
        </div>
        <div className="flex justify-center ">
          <div className="box auth__card lg:w-[28vw]">
            <div className="mt-[40px] lead">
              <h3>Sign up</h3>
              <p className="muted">Fill these out to get started right away.</p>
            </div>

            {/* <div className="auth_G_btn my-[30px]">
              <button className="btn btn__empty block ">
                <div className="flex gap-3 justify-center">
                  <Google className="icon" />
                  Sign in with google
                </div>
              </button>
            </div>

            <div className="breakr flex align-center justify-between mb-[30px]">
              <span></span>
              <span></span>
              <span></span>
            </div> */}

            <form onSubmit={handleSubmit((payload) => mutate(payload))}>
              <div className="form-group">
                <label className="">Name</label>
                <input
                  {...register("fullname")}
                  placeholder="Enter Full name"
                />
                {<h2 className="error-message">{errors?.fullname?.message}</h2>}
              </div>

              <div className="form-group mt-[20px]">
                <label className="">Email address</label>
                <input
                  {...register("email")}
                  placeholder="Enter email address"
                />
                {<h2 className="error-message">{errors?.email?.message}</h2>}
              </div>

              <div className="form-group mt-[20px]">
                <label className="">Password</label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  {...register("password")}
                  placeholder="Create a new password"
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

              <div className="form-group flex gap-2 align-center mt-[20px]">
                <label className="checkbox">
                  By signing up i agree to the <a> Terms & Privacy Policy</a> of
                  Paper
                </label>
              </div>

              <div className="mt-[40px]">
                {" "}
                {isLoading ? (
                  <button type="button" className="btn primary block">
                    {" "}
                    <LoadingOutlined />{" "}
                  </button>
                ) : (
                  <button type="submit" className="btn primary block">
                    Sign up
                  </button>
                )}
              </div>
            </form>

            <p className="mt-[20px]">
              Already have an account? <Link to="/sign-in">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
