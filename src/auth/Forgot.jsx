import React from 'react'
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png';
import Main from '../assets/main.png';
import Bg from '../assets/bg.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ForgotPassword } from '../validation/Yup';
import { toast } from 'react-hot-toast';

const Forgot = () => {

    const navigate = useNavigate();

     const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ForgotPassword),
    })

    const onSubmit = () => {
      
        toast.success("Email sent successfully")
        navigate("/")
    }


  return (
           <div className='grid grid-cols-12 min-h-screen'>
            <div className='col-span-12 lg:col-span-6 p-5 min-h-screen flex flex-col justify-center items-center'>

                <div className='flex flex-col items-center'>

                    <img src={Logo} alt="logo" className='w-30 lg:w-50 mb-4 lg:mb-10 ' />
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <p className='text-[#202028] text-xl md:text-2xl lg:text-[24px] font-bold text-center'>Follow instructions to set a new one</p>
                        <p className='text-[#696b78] text-xs lg:text-base font-medium text-center'>Enter the email address associated with your account and we’ll send you <br/>instructions to reset your password.</p>
                    </div>

                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-5 lg:mt-10'>
                    <div className='w-70 md:w-100 xl:w-120 flex flex-col gap-6'>
                        <Input
                            label="Enter Your Email"
                            name="email"
                            type="text"
                            placeholder="Enter Your Email"
                            register={register}
                            errors={errors}
                        />

                    </div>

                    <div className='flex flex-row gap-5 items-center justify-center mt-4 lg:mt-8'>
                     <Button type="submit" className="w-30 lg:w-50  border text-black text-xs lg:text-lg font-medium py-3 rounded-lg cursor-pointer" text="Cancel" onClick={()=>navigate("/")}/>
                     <Button type="submit"
                            className="w-30 lg:w-50  bg-[linear-gradient(90deg,#3F8F5B_0%,#1B7E48_45%,#155F38_100%)] text-white text-xs lg:text-lg font-medium py-3 rounded-lg cursor-pointer"
                            text="Send Rest Link" />
                    </div>

                </form>

            </div>

            <div className='hidden lg:flex col-span-6 relative'>

                <img
                    src={Bg}
                    alt="Background"
                    className='absolute w-full h-full '
                />
                <div className='relative flex flex-col items-center justify-center w-full text-center px-10'>
                    <img src={Main} alt="Logo" className='w-100' />

                    <p className='text-white text-xs xl:text-lg 2xl:text-xl mt-5' style={{lineHeight:"1.5"}}>
                        Hiring tech talent ? To recruit the best , you ‘ ll  need to have a world-class<br />employer brand. To make your job easier , we ‘ve created the complete<br />guide on how to build a tech talent brand
                    </p>
                </div>
            </div>

        </div>
   
  )
}

export default Forgot