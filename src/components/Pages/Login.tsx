import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import axios from "axios";
import baseUrl from "../../services/request";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import useToken from "../../store/useToken";

const schema = z.object({
  password: z.string().min(6, {
    message: "Password required.",
  }),
  phone: z.string().min(10, { message: "Phone number required." }),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const [title] = useState("Sign Up | KeyFundMe");
  useDocumentTitle(title);

  const navigate = useNavigate();
  const { setAccessToken } = useToken();

  const [passwordType, setPasswordType] = useState(true);
  const [loader, setLoader] = useState<boolean>(false);
  const [loginError, setLoginError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setLoader(true);

    const loginData = {
      phone_number: data.phone,
      password: data.password,
    };

    axios
      .post(`${baseUrl}login`, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setAccessToken(response.data.session_value);
        navigate("/");
      })
      .catch((error) => {
        setLoader(false);
        setLoginError(true);
        console.log(error);
      });
  };

  return (
    <div className="bg-[#F8F8F8] h-[100dvh]">
      <div className="flex items-center justify-center h-full lg:px-0 px-2">
        <div className="bg-white shadow lg:w-[29%] h-auto rounded-lg p-8">
          <p className="text-2xl font-bold">Admin Sign In</p>
          {/* Error */}
          {loginError && (
            <p className="text-sm text-red-700 rounded py-1 mt-4 font-poppins text-center">
              <span className="bi-exclamation-triangle-fill me-2"></span>
              &nbsp; Invalid Phone number or Password.
            </p>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            {/* Phone */}
            <div className="">
              <label htmlFor="phone" className="block text-sm text-gray-400">
                Phone Number
              </label>
              <input
                {...register("phone")}
                type="tel"
                name="phone"
                className="ps-5 w-full h-14 rounded-lg mt-2 focus:outline-none border border-gray-300 bg-white shadow placeholder:text-sm"
                placeholder="09... / 07..."
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Password */}
            <label htmlFor="email" className="block text-sm mt-5 text-gray-400">
              Password
            </label>
            <div className="grid grid-cols-12 rounded-lg border border-gray-300 bg-white shadow mt-2 overflow-hidden">
              <div className="col-span-11">
                <input
                  {...register("password")}
                  type={!passwordType ? "text" : "password"}
                  name="password"
                  className="ps-4 w-full focus:outline-none h-14"
                />
              </div>
              <p
                onClick={() => setPasswordType(!passwordType)}
                className={` ${
                  passwordType ? "bi-eye-fill" : "bi-eye-slash-fill"
                } text-xl pe-3 pt-4 cursor-pointer`}
              ></p>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}

            <div className="mt-8 text-center">
              {loader ? (
                <Loader style="bg-black text-white w-full" />
              ) : (
                <Button label="Login" bg="bg-black" />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
