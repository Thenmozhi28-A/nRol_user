import React from 'react'
import InputResume from './InputResume'
import Heading from './Heading'
import { useState } from 'react'

const Social = ({register,errors}) => {
      const [show, setShow] = useState(true)

            const handel=()=>{
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
            <Heading HeadingName="Social Media" open={handel} isOpen={show}/>

        {show &&(    <div>
                <p className='text-[#b5b5bc] text-sm mt-5'>Share your professional website and social media profiles to connect your online presence. This helps others learn more about your professional background and interests.</p>
            
            <div className='grid grid-cols-2 gap-3 mt-5'>
                <InputResume label='LinkedIn' placeholder='Enter your LinkedIn profile URL' className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="linkedIn"/>
                 
                <InputResume label='Twitter Profile' placeholder='Enter your GitHub profile URL' className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="twitter"/>
            </div>
            </div>
        )}

    </div>
  )
}

export default Social