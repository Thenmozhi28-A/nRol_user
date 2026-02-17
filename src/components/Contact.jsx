import React from 'react'
import InputResume from './InputResume'
import InputSelect from './InputSelect'
import Heading from './Heading'
import { useState } from 'react'


const Contact = ({register,errors}) => {

       const [show, setShow] = useState(true)
    
        const handel=()=>{
            setShow(!show);
        }

  return (
    <div className='bg-[#384152] rounded-xl p-8 '>

          {/* <div className='flex flex-row items-center justify-between mb-5'>
            <p className='text-lg text-white font-bold'>Contact Details</p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-chevron-down-icon lucide-chevron-down text-white"><path d="m6 9 6 6 6-6" /></svg>
                 </div>
            </div> */}

            <Heading HeadingName="Contact Details" isOpen={show} open={handel}/>

{show && (
            <div className='flex flex-col gap-6 mt-5'>

                <div className='grid grid-cols-2 gap-5'>
                <div>
                    <InputResume label='Phone Number' placeholder='Enter your phone number' type='text' 
                    className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="mobileNumber"/>
                </div>
                <div>
                    <InputSelect label="Is it WhatsApp number" Option1="True" Option2="False" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="whatsNumber"/>
                </div>
            </div>

            <div>
                <InputResume label='Email' placeholder='Enter your email' type='text' className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="email"/>
            </div>

            <div>
                <InputResume label="Address" placeholder='Enter your address' type='text' className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="address"/>
            </div>

            <div className='grid grid-cols-2 gap-6'>
                <InputResume label="District" placeholder="Enter your district" type="text" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="districtName"/>

                <InputResume label="State" placeholder='Enter your state' type='text' className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="stateName"/>

                <InputResume label="Country" placeholder='Enter your country' type='text' className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none " register={register} errors={errors} name="countryName"/>

                <InputResume label="Zip Code" placeholder='Enter your zip code' type='text' className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none " register={register} errors={errors}  name="pinCode"/>
            </div>

            </div>
)}
            </div>

     
  
  )
}

export default Contact