import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { json, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const googleResponse = useGoogleLogin({
    onSuccess: async (response) => {
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        })
        .then((res) => res.data);

      console.log(userInfo);
      localStorage.setItem('user',JSON.stringify(userInfo))
    },
    onError: (error)=>{
      console.log(error);
    }

  });

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo"></img>
          </div>
          <div className="shadow-2xl">
            <button
              type="button"
              className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
              onClick={()=>googleResponse()}
            >
              <FcGoogle className="mr-4" />
              Sign in with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
