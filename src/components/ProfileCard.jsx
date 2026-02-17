
import React, { useState, useRef } from 'react'
import InputResume from './InputResume'
import InputSelect from './InputSelect'
import Heading from './Heading'

const ProfileCard = ({ register, errors, setValue }) => {
    
    const [show, setShow] = useState(true)

    const fileInputRef = useRef()

    const handel = () => setShow(!show)

    const handleIconClick = () => {
        fileInputRef.current.click()
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setValue("profileImage", file)
        }
    }

    return (
        <div className="bg-[#384152] rounded-xl p-8">
            <Heading HeadingName="Profile Details" isOpen={show} open={handel} />

            {show && (
                <div>
                    <div className='flex flex-row items-center gap-4 mb-8 mt-5'>
                        <div
                            onClick={handleIconClick}
                            className='p-3 bg-[#30866D] rounded-full cursor-pointer'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="none" stroke="currentColor" strokeWidth="2"
                                className="text-white">
                                <path d="M12 13v8" />
                                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                                <path d="m8 17 4-4 4 4" />
                            </svg>
                        </div>

                        <p className='text-white text-lg'>Upload your image</p>

                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            className="hidden"

                        />
                    </div>

                    <div className='flex gap-6 flex-col'>
                        <div className='grid grid-cols-2 gap-5'>
                            <InputResume label="First Name" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" type="text" placeholder="Enter your first name" register={register}
                                errors={errors} name="firstName" />

                            <InputResume label="Last Name" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" type="text" placeholder="Enter your last name" register={register}
                                errors={errors} name="lastName" />

                        </div>

                        <InputResume label="IRC Certificate Name" className="bg-[#202938] text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none " type="text" placeholder="Enter your certificate name" register={register}
                            errors={errors} name="certificateName" />
                        <div className='grid grid-cols-2 gap-5'>
                            <InputSelect label="Gender" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3]  focus:border-2 focus:border-[#30866D] focus:outline-none " Option1="Female" Option2="Male" register={register}
                                errors={errors} name="gender" />
                            <InputResume label="Date of Birth" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3]  focus:border-2 focus:border-[#30866D] focus:outline-none" type="date" placeholder="Enter your date of birth" register={register}
                                errors={errors} name="dateOfBirth" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileCard
