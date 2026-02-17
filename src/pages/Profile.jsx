import React from 'react'
import Button from "../components/Button"
import Card from "../components/Card"
import { useNavigate } from 'react-router-dom'

const Profile = () => {

  const navigate = useNavigate()

  const handleBuildProfile = () => {
  navigate('/profile/build');
}

  return (
     <div className='bg-[#202938] rounded-xl p-8 lg:p-10 h-100% xl:h-full flex flex-col justify-center items-center mb-10'>

       <div>
        <p className='text-base lg:text-xl xl:text-3xl text-white font-bold text-center mb-10 lg:mb-15'>How would you like to build your profile?</p>
      </div>

      <div className='flex flex-col xl:flex-row items-center justify-center gap-10 '>
        <div>
        <Card
        icon= {<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
          class="lucide lucide-circle-plus-icon lucide-circle-plus text-[#4caf50]"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>}

   
        title= "Start with a new profile"

        subtext="Enter your details to create a new profile. This helps us customize your experience just for you."
        
        text="Build Profile" className="w-50 bg-[#30866D] text-white text-sm lg:text-lg font-medium py-3 rounded-lg cursor-pointer" onClick={handleBuildProfile}
        />
      </div>

      <div>
        <Card
        icon= {<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-upload-icon lucide-cloud-upload text-[#4caf50]">
          <path d="M12 13v8"/>
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/></svg>}

   
        title= "Upload an existing resume"

        subtext="Click to upload or drag and drop upload your details to build your profile. This helps us customize your experience just for you"
        
        text="Submit" className="w-50  bg-[#30866D] text-white text-sm lg:text-lg font-medium py-3 rounded-lg cursor-not-allowed "
        />
      </div>

  </div>

  </div>
  )
}

export default Profile


