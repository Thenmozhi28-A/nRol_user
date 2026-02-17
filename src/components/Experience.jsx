import React from 'react'
import Heading from './Heading'
import { useState } from 'react'
import InputResume from './InputResume'


const Experience = ({ register, errors }) => {
  const [show, setShow] = useState(true)

  const handel = () => {
    setShow(!show);
  }
  return (
    <div className='bg-[#384152] rounded-xl p-8 '>

      {/* <div className='flex flex-row items-center justify-between mb-5'>
            <p className='text-lg text-white font-bold'>Experience Details</p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-chevron-down-icon lucide-chevron-down text-white"><path d="m6 9 6 6 6-6" /></svg>
                 </div>
            </div> */}

      <Heading HeadingName="Experience Details" open={handel} isOpen={show} />

      {show && (

        <div >
          <p className='text-[#b5b5bc] text-sm mt-5'>Add your work experience to showcase your professional background. Include company names, positions, and employment periods.</p>

          <div className=' flex flex-row items-center gap-3 mt-8 '>
            <input type="checkbox" className="w-4 h-4" />
            <p className='text-base text-white'>Do you have any work experience?</p>
          </div>

          <div className='mt-4 flex flex-col gap-5'>
            <InputResume label="Company Name" type="text" placeholder="Enter your company name" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="companyName" />
            <InputResume label="Designation" type="text" placeholder="Enter your designation" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="designation" />
            <div className='grid grid-cols-2 gap-6'>
              <InputResume label="Start Date" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3]  focus:border-2 focus:border-[#30866D] focus:outline-none" type="date" placeholder="Enter your start date" register={register} errors={errors} name="StartDate" />

              <InputResume label="End Date" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3]  focus:border-2 focus:border-[#30866D] focus:outline-none" type="date" placeholder="Enter your end date" register={register} errors={errors} name="EndDate" />
            </div>
          </div>






        </div>
      )}

    </div>
  )
}

export default Experience