import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import baseUrl from "../../services/request";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const schema = z.object({
  password: z.string().min(4, {
    message: "Password required.",
  }),
  username: z.string().min(1, { message: "Username required." }),
});

type FormData = z.infer<typeof schema>;

const Setting = () => {
  const [title] = useState("Setting");
  useDocumentTitle(title);

  const access_token = localStorage.getItem("token");

  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState(true);
  const [updateError, setUpdateError] = useState("");
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setLoader(true);

    const updateData = {
      username: data.username,
      password: data.password,
    };

    axios
      .put(`${baseUrl}/api/v2/auth/update`, updateData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        setUpdateError("Something went wrong!");
      });
  };
  return (
    <div className="relative lg:grid md:grid grid-cols-11 lg:bg-[#F8F8F8]">
      {/* Sidebar */}
      <div className="lg:col-span-2 lg:block hidden w-full">
        <Sidebar />
      </div>
      <div className="lg:col-span-9 md:col-span-10 lg:px-8 lg:py-9 p-3">
        <Navbar />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white lg:w-[50%] p-10 mt-10 rounded-xl"
        >
          <p className="font-poppins mb-5 text-lg font-bold">
            Update your credentials
          </p>
          {/* Update error */}
          {updateError !== "" && (
            <div className="relative">
              <p className="bg-red-600 rounded px-1 py-[2px] text-white font-poppins text-sm mb-3">
                <span className="bi-exclamation-triangle-fill me-4"></span>
                {updateError}
              </p>
            </div>
          )}
          {/* Email */}
          <div className="mb-5">
            <label
              className="text-xs text-gray-400 block font-poppins"
              htmlFor="username"
            >
              Username
            </label>
            <input
              {...register("username")}
              type="text"
              name="username"
              className="text-black font-poppins font-bold w-full py-3 mt-2 rounded-lg focus:outline-none px-5 border border-gray-300"
            />
            {errors.username && (
              <p className="font-poppins text-red-600 text-xs mt-2">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-10 relative">
            <label
              className="text-xs text-gray-400 block font-poppins"
              htmlFor="password"
            >
              Password
            </label>

            <input
              {...register("password")}
              type={passwordType ? "password" : "text"}
              name="password"
              className="text-black font-poppins font-bold w-full py-3 mt-2 rounded-lg focus:outline-none px-5 border border-gray-300"
            />
            <span
              onClick={() => {
                setShowPassword(!showPassword);
                setPasswordType(!passwordType);
              }}
              className={`absolute ${
                showPassword ? "bi-eye" : "bi-eye-slash"
              } right-2 top-9 cursor-pointer text-gray-500 px-2 text-lg border-l border-gray-300`}
            ></span>
            {errors.password && (
              <p className="font-poppins text-red-600 text-xs mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          {loader ? (
            <p className="py-3 text-white bg-black w-full rounded flex justify-center font-poppins shadow shadow-zinc-950 chakra h-12 text-sm">
              <span className="loader rounded"></span>
            </p>
          ) : (
            <button className="py-3 text-white bg-black w-full rounded font-poppins shadow shadow-zinc-950 chakra h-12 text-sm">
              Update
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Setting;
