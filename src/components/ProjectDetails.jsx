import React from 'react'
import InputResume from './InputResume'
import TextArea from './TextArea'
import Heading from './Heading'
import { useState } from 'react'


const ProjectDetails = ({register,errors}) => {
    const [show, setShow] = useState(true);

          const handel=()=>{
              setShow(!show);
          }
  return (
        <div className='bg-[#384152] rounded-xl p-8 '>
{/* 
           <div className='flex flex-row items-center justify-between mb-5'>
            <p className='text-lg text-white font-bold'>Project Details</p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-chevron-down-icon lucide-chevron-down text-white"><path d="m6 9 6 6 6-6" /></svg>
                 </div>
            </div> */}

            <Heading HeadingName='Project Details' open={handel} isOpen={show}/>
            
            {show&&(<div>
              <p className='text-[#b5b5bc] mt-5'>Showcase your projects to demonstrate your practical experience and achievements. Include details about your role, objectives, and project duration.</p>
            
            <div className='mt-5 gap-6 flex flex-col'>
              <InputResume label='Project Name' placeholder='Enter your project name'className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="projectName"/>
                <div className='flex flex-col gap-2'>
                  <p className='text-base font-medium text-white'>Project Objective</p>

                <TextArea name="projectObjective" style={{height:"200px",width:"100%"}} register={register} errors={errors}/>
                </div>
            <div className='grid grid-cols-2 gap-3'>
               <InputResume label='Duration (In Months)' placeholder='Enter your duration' className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] 
               focus:outline-none" register={register} errors={errors} name="projectMonth"/>

              <InputResume label='Your Role' placeholder='Enter your role' className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="role"/>
            </div>
            
             </div>
            
            
            </div>
            )}
        </div>

  )
}

export default ProjectDetails