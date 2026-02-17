import React from 'react'
import Input from '../components/Input';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema } from '../validation/Yup';
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png';
import Main from '../assets/main.png';
import Bg from '../assets/bg.png';
import { IoEyeOutline } from "react-icons/io5";
import { toast } from 'react-hot-toast';
import { useLoginMutation } from '../services/LoginApi';
import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/authSlice'


const Login = () => {

    const dispatch = useDispatch()

    const [login, {isLoading,} ] = useLoginMutation();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(Schema),
    })

    const navigate = useNavigate();

    const onSubmit = async (data) => {
   
        if (isLoading) return;

        try {
            const res = await login({
            email: data.email,
            password: data.password,
            }).unwrap();

    // console.log("FULL LOGIN RESPONSE:", res); 

    const token =
      res.token ||
      res.accessToken ||
      res.data?.token ||
      res.data?.accessToken;

    if (!token) {
      toast.error("Token missing from server response");
      return;
    }

    const userData = res.user || res.data?.user || res.data || {};

   
    if (!userData.email) {
      userData.email = data.email;
    }

    // console.log("SAVED USER:", userData); 

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));

    dispatch(setCredentials({ token, user: userData }));

    toast.success("Login Successfully");
    navigate("/dashboard");

  } catch (err) {
    toast.error(err?.data?.message || "Failed to login");
  }
};

    return (
        <div className='grid grid-cols-12 h-screen overflow-hidden'>
            <div className='col-span-12 lg:col-span-6 p-3  flex flex-col justify-center items-center'>

                <div className='flex flex-col items-center'>

                    <img src={Logo} alt="logo" className='w-30 lg:w-50 mb-4 lg:mb-10 ' />
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <p className='text-[#202028] text-xl md:text-2xl lg:text-[32px] font-bold text-center'>Shape your career with confidence</p>
                        <p className='text-[#696b78] text-xs lg:text-lg font-medium '>Train with Night Fury to conquer your challenges!</p>
                    </div>

                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-7 lg:mt-10'>
                    <div className='w-70 md:w-100 xl:w-120 flex flex-col gap-8'>
                        <Input
                            label="Enter Your Email"
                            name="email"
                            type="text"
                            placeholder="Enter Your Email"
                            register={register}
                            errors={errors}
                          
                        />

                        <Input
                            label="Enter Your Password"
                            name="password"
                            type="password"
                            placeholder="Enter Your password"
                            register={register}
                            errors={errors}
                            icon={<IoEyeOutline size={20} className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400" />}
                        />
                    </div>
                    <div className='flex flex-row items-center justify-between mt-6'>
                        <div className='flex flex-row gap-2 cursor-pointer'>
                            <input type="checkbox" />
                            <p className='text-[#202028] text-xs lg:text-base font-[400px]'>Keep Me Logged in</p>
                        </div>

                        <div className='text-[#30866D] font-medium text-xs lg:text-base hover:underline cursor-pointer' onClick={() => navigate("/forgot")}>Forgot Password?</div>
                    </div>

                    <div className='flex items-center justify-center mt-8'>
                        <Button
                            type="submit"
                            className="w-50 md:w-80 bg-[linear-gradient(90deg,#3F8F5B_0%,#1B7E48_45%,#155F38_100%)] text-white text-sm lg:text-lg font-medium py-3 rounded-lg cursor-pointer"
                            text="Login"
                        />
                    </div>
                </form>
            </div>
            <div className='hidden lg:flex col-span-6 relative'>

                <img
                    src={Bg}
                    alt="Background"
                    className='absolute w-full h-full object-cover'
                />
                <div className='relative flex flex-col items-center justify-center w-full text-center px-10'>
                    <img src={Main} alt="Logo" className='w-100' />

                    <p className='text-white text-xs xl:text-lg 2xl:text-xl mt-5' style={{ lineHeight: "1.5" }}>
                        Hiring tech talent ? To recruit the best , you ‘ ll  need to have a world-class<br />employer brand. To make your job easier , we ‘ve created the complete<br />guide on how to build a tech talent brand
                    </p>
                </div>
            </div>

        </div>

    
    )
}

export default Login;