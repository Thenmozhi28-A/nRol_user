import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import InputResume from '../components/InputResume';
import { User } from '../validation/Yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from 'react';
import { useUserDetailsQuery, useCreateProfileMutation } from "../services/UserApi";
import { useEffect } from "react";
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux'
const PersonalInformation = () => {


const userId = useSelector((state) => 
  state.auth.user?._id || 
  state.auth.user?.id || 
  state.auth.user?.userId
)

  const { data, isSuccess } = useUserDetailsQuery(userId);

  const [createProfile, { isLoading }] = useCreateProfileMutation();


  const fileInputRef = useRef(null);

  const [previewImage, setPreviewImage] = useState(
    "https://newprofilepic.photo-cdn.net/assets/images/article/profile.jpg"
  );

  const [isEditMode, setIsEditMode] = useState(false);


  const { register,
    formState: { errors },
    setValue,
    reset,
    handleSubmit
  } = useForm({
    resolver: yupResolver(User),
  })

  const onSubmit = async (data) => {

    const formData = new FormData();

    if (data.profileImage) {
      formData.append("profileImage", data.profileImage);
    }

    const user = {
      firstName: data.firstNameUser,
      lastName: data.lastNameUser,
      email: data.emailUser,
      phoneNumber: Number(data.phoneNumberUser),
      dateOfBirth: data.dateOfBirth,
      profileImage: data.profileImage,

    };

    formData.append(
      "data",
      new Blob([JSON.stringify(user)], { type: "application/json" }),
      "data.json"
    );

    try {
      await createProfile({ userId, formData } ).unwrap();
      toast.success("Profile updated successfully!");
      setIsEditMode(false);
    } catch (error) {
      toast.error(error?.data?.message || "Something went wrong!");
    }
  };
  const handleChangePhotoClick = () => {
    if (isEditMode) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setValue("profileImage", file);
    }
  };


  useEffect(() => {
    if (isSuccess && data?.data) {
      const user = data.data;

      reset({
        firstNameUser: user.firstName,
        lastNameUser: user.lastName,
        emailUser: user.email,
        phoneNumberUser: user.phoneNumber,
        dateOfBirth: user.dateOfBirth,
        profileImage: user.profileImage,
      });
    }
  }, [isSuccess, data, reset]);



  return (

    <div className='bg-[#384152] rounded-xl p-8 '>
      <div className='flex flex-row justify-between items-center'>
        <p className='text-2xl text-white font-medium'>Profile Information</p>
        <div>
          <FaRegEdit className='text-[#30866D] text-2xl cursor-pointer' onClick={() => setIsEditMode(true)} hidden={isEditMode} />
        </div>
      </div>

      <div className='bg-[#202938] mt-5 rounded-lg p-5 flex flex-row gap-5 items-center '>
        <img
          src={previewImage}
          alt="User"
          className="w-24 h-24 rounded-full object-cover"
        />

        <div className='flex flex-col gap-3'>
          <p className='text-white text-lg'>Profile Photo</p>
          <p className='text-[#B3B3B3]'>Update Your Profile Photo</p>

          <button
            type="button"
            onClick={handleChangePhotoClick}
            disabled={!isEditMode}
            className='border border-[#9999A3] rounded-sm p-2 text-[#B3B3B3] cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Change Photo
          </button>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
      </div>

      <div className='mt-10'>

        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className='grid grid-cols-2 gap-5'>
            <InputResume className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" register={register} errors={errors} name="firstNameUser" label="First Name" placeholder="Enter Your First Name" disabled={!isEditMode} />

            <InputResume className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" register={register} errors={errors} name="lastNameUser" label="Last Name" type="text" placeholder="Enter Your Last Name" disabled={!isEditMode} />
            
            <InputResume className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" register={register} errors={errors} name="dateOfBirth" label="Date of Birth" type="date" placeholder="Enter Your Email" disabled={!isEditMode} />

            <InputResume className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" register={register} errors={errors} name="emailUser" label="Email" type="email" placeholder="Enter Your Email" disabled={!isEditMode} />

            <InputResume className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" register={register} errors={errors} name="phoneNumberUser" label="Phone Number" type="text" placeholder="Enter Your Phone Number" disabled={!isEditMode} />
          </div>

          {isEditMode && (
            <div className='flex flex-row mt-8 gap-5 w-100 ml-auto mr-15'>
              <button className='bg-[#30866D] rounded-lg p-4  text-white w-full font-medium text-base cursor-pointer' type="button"
                onClick={() => setIsEditMode(false)}>Not Now</button>
              <button className='bg-[#30866D] rounded-lg p-4  text-white w-full font-medium text-base cursor-pointer' type='submit'>  {isLoading ? "Saving..." : "Update Your Profile"}</button>
            </div>
          )}

        </form>
      </div>
    </div>

  )
}

export default PersonalInformation;
