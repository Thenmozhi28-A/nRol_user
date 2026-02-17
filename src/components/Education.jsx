import React from 'react'
import InputResume from './InputResume'
import InputSelect from './InputSelect'
import Heading from './Heading'
import { useState } from 'react'
import SelectBoardCourse from './SelectBoardCourse'
const Education = ({ register, errors }) => {


    const [show, setShow] = useState(true)

    const handel = () => {
        setShow(!show);
    }
    return (
        <div className={`bg-[#384152] rounded-xl p-8 `}>

            {/* <div className='flex flex-row items-center justify-between mb-5'>
            <p className='text-lg text-white font-bold'>Education Details</p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-chevron-down-icon lucide-chevron-down text-white"><path d="m6 9 6 6 6-6" /></svg>
                 </div>
            </div> */}

            <Heading HeadingName="Education Details" isOpen={show} open={handel} />
            {show && (
                <div>
                    <div className='border-b pb-8 border-gray-400 mt-5'>
                        <p className='text-white text-sm mb-5'>10th Standard</p>

                        <div className='flex flex-col gap-6'>
                            <InputResume label="School Name" type="text" placeholder="Enter your school name" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="schoolName10" />

                            <div className='grid grid-cols-2 gap-6'>
                              
                                <SelectBoardCourse
                                    label="Board"
                                    type="board"
                                    name="boardSchoolName10"
                                    register={register}
                                    errors={errors}
                                    className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-[#30866D]"
                                />

                                <InputResume label="Percentage/GPA" text="text" placeholder="Enter your percentage" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="percentage10" />

                                <InputResume label="Start Date" type="date" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3]  focus:border-2 focus:border-[#30866D] focus:outline-none" placeholder="Enter your start date" register={register} errors={errors} name="startDate10" />

                                <InputResume label="End Date" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3]  focus:border-2 focus:border-[#30866D] focus:outline-none" type="date" placeholder="Enter your end date" register={register} errors={errors} name="endDate10" />
                            </div>
                        </div>
                    </div>

                    <div className='border-b pb-8 border-gray-400 mt-5'>
                        <p className='text-white text-sm mb-5'>12th Standard</p>

                        <div className='flex flex-col gap-6'>
                            <InputResume label="School Name" type="text" placeholder="Enter your school name" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="schoolName12" />

                            <div className='grid grid-cols-2 gap-6'>
                              
                                <SelectBoardCourse
                                    label="Board"
                                    type="board"
                                    name="boardSchoolName12"
                                    register={register}
                                    errors={errors}
                                    className="bg-[#202938] w-full text-xs text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-[#30866D]"
                                />

                                <InputResume label="Percentage/GPA" text="text" placeholder="Enter your percentage" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="percentage12" />

                                <InputResume label="Start Date" type="date" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3]  focus:border-2 focus:border-[#30866D] focus:outline-none" placeholder="Enter your start date" register={register} errors={errors} name="startDate12" />

                                <InputResume label="End Date" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3]  focus:border-2 focus:border-[#30866D] focus:outline-none" type="date" placeholder="Enter your end date" register={register} errors={errors} name="endDate12" />
                            </div>
                        </div>
                    </div>

                    <div className='border-b pb-8 border-gray-400 mt-5'>
                        <p className='text-white text-sm mb-5 '>UG Details</p>

                        <div className='flex flex-col gap-6'>
                            <InputResume label="College Name" type="text" placeholder="Enter your college name" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="collegeNameUG" />

                            <div className='grid grid-cols-2 gap-6'>
                             
                                <SelectBoardCourse
                                    label="UG Course"
                                    type="ug"
                                    name="courseUG"
                                    register={register}
                                    errors={errors}
                                    className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-[#30866D]"
                                />


                                <InputResume label="Percentage/GPA" type="text" placeholder="Enter your percentage" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="percentageUG" />

                                <InputResume label="Start Date" type="date" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3]  focus:border-2 focus:border-[#30866D] focus:outline-none" placeholder="Enter your start date" register={register} errors={errors} name="startDateUG" />

                                <InputResume label="End Date" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3]  focus:border-2 focus:border-[#30866D] focus:outline-none" type="date" placeholder="Enter your end date" register={register} errors={errors} name="endDateUG" />
                            </div>
                        </div>
                    </div>

                    <div className='border-b pb-8 border-gray-400 mt-5'>
                        <p className='text-white text-sm mb-5 '>PG Details</p>

                        <div className='flex flex-col gap-6'>
                            <InputResume label="College Name" type="text" placeholder="Enter your college name" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="collegeNamePG" />

                            <div className='grid grid-cols-2 gap-6'>

                            <SelectBoardCourse
                                    label="PG Course"
                                    type="pg"
                                    name="coursePG"
                                    register={register}
                                    errors={errors}
                                    className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-[#30866D]"
                                />

                                <InputResume label="Percentage/GPA" type="text" placeholder="Enter your percentage" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-2 focus:border-[#30866D] focus:outline-none" register={register} errors={errors} name="percentagePG" />

                                <InputResume label="Start Date" type="date" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3]  focus:border-2 focus:border-[#30866D] focus:outline-none" placeholder="Enter your start date" register={register} errors={errors} name="startDatePG" />

                                <InputResume label="End Date" className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3]  focus:border-2 focus:border-[#30866D] focus:outline-none" type="date" placeholder="Enter your end date" register={register} errors={errors} name="endDatePG" />
                            </div>
                        </div>
                    </div>

                </div>





            )}

        </div>
    )
}

export default Education