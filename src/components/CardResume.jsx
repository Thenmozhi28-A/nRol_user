import React from 'react'
import ProfileCard from "../components/ProfileCard"
import CareerObj from './CareerObj'
import Contact from './Contact'
import Education from './Education'
import Skills from './Skills'
import ProjectDetails from './ProjectDetails'
import Experience from './Experience'
import Social from './Social'
import Hobbies from './Hobbies'

const CardResume = ({register,errors,getValues,setValue,watch}) => {
  return (
 <div className='flex flex-col gap-5 mt-5  overflow-y-scroll hide-scrollbar h-[calc(100vh-80px)]'>
  
     <ProfileCard  register={register} errors={errors} watch={watch} setValue={setValue}/>
     <CareerObj register={register} errors={errors} watch={watch}/>
     <Contact register={register} errors={errors} watch={watch}/>
     <Education register={register} errors={errors} watch={watch}/>
     <Skills register={register} errors={errors} getValues={getValues}
        setValue={setValue} watch={watch}/>
     <ProjectDetails register={register} errors={errors} watch={watch}/>
     <Experience  watch={watch} register={register} errors={errors}/>
     <Social register={register} errors={errors} watch={watch}/>
     <Hobbies register={register} errors={errors} watch={watch} setValue={setValue}/>

 </div>
  )
}

export default CardResume