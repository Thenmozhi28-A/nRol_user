
import React, { useState } from 'react';

const ResumeWrite = ({ watch }) => {

  const [activeTheme, setActiveTheme] = useState(1);

  const previewImage = watch("profileImage");
  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const dateOfBirth = watch("dateOfBirth");
  const gender = watch("gender");
  const careerObjective = watch("careerObjective");
  const mobileNumber = watch("mobileNumber");
  const whatsNumber = watch("whatsNumber");
  const email = watch("email");
  const districtName = watch("districtName");
  const stateName = watch("stateName");
  const pinCode = watch("pinCode");
  const countryName = watch("countryName");
  const schoolName10 = watch("schoolName10");
  const boardSchoolName10 = watch("boardSchoolName10");
  const percentage10 = watch("percentage10");
  const startDate10 = watch("startDate10");
  const endDate10 = watch("endDate10");
  const schoolName12 = watch("schoolName12");
  const boardSchoolName12 = watch("boardSchoolName12");
  const percentage12 = watch("percentage12");
  const startDate12 = watch("startDate12");
  const endDate12 = watch("endDate12");
  const collegeNameUG = watch("collegeNameUG");
  const courseNameUG = watch("courseNameUG");
  const percentageUG = watch("percentageUG");
  const startDateUG = watch("startDateUG");
  const endDateUG = watch("endDateUG");
  const collegeNamePG = watch("collegeNamePG");
  const courseNamePG = watch("courseNamePG");
  const percentagePG = watch("percentagePG");
  const startDatePG = watch("startDatePG");
  const endDatePG = watch("endDatePG");
  const skills = watch("skills");
  const projectName = watch("projectName");
  const projectObjective = watch("projectObjective");
  const role = watch("role");
  const projectDate = watch("projectDate");
  const linkedIn = watch("linkedIn");
  const twitter = watch("twitter");
  const hobbiesName = watch("hobbiesName");

  return (
    <div>


      <div className='grid grid-cols-2 gap-3 bg-[#414350] p-2 rounded-lg mt-4 sticky top-0 z-20'>

          <div
            className={`rounded-lg p-3 text-center cursor-pointer transition-all
              ${activeTheme === 1 ? 'bg-[#30866D] scale-105' : 'bg-transparent hover:bg-[#4a4d5e]'}`}
            onClick={() => setActiveTheme(1)}
          >
            <p className="text-lg text-white font-medium">THEME 1</p>
          </div>

          <div
            className={`rounded-lg p-3 text-center cursor-pointer transition-all
              ${activeTheme === 2 ? 'bg-[#30866D] scale-105' : 'bg-transparent hover:bg-[#4a4d5e]'}`}
            onClick={() => setActiveTheme(2)}
          >
            <p className="text-lg text-white font-medium">THEME 2</p>
          </div>

        </div>

      <div className="bg-white rounded-xl overflow-y-scroll hide-scrollbar h-[calc(100vh-150px)] mt-5">
        
        {activeTheme === 1 && (
          <div className="p-8">

            <div className="flex items-center gap-6 border-b border-gray-300 pb-6 mb-6">
              <div className="w-32 h-32 flex items-center justify-center">
                {previewImage ? (
                  <img
                    src={previewImage instanceof File ? URL.createObjectURL(previewImage) : previewImage}
                    alt="profile"
                    className="w-40 h-30 rounded-full object-cover border-4 border-[#30866D]"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-200"></div>
                )}
              </div>

              <div>
                <p className="text-3xl font-bold text-black mb-2">
                  {firstName} {lastName}
                </p>
                <p className="text-sm text-gray-700">{email}</p>
                <p className="text-sm text-gray-700">{linkedIn}</p>
                <p className="text-sm text-gray-700">
                  {districtName}, {stateName}, {countryName}, {pinCode}
                </p>
              </div>
            </div>

            {careerObjective && (
              <div className="mt-5">
                <p className="text-xl text-black font-bold border-b-2 pb-2 border-gray-100">
                  Career Objective
                </p>
                <p className="text-sm mt-4 px-5 mb-3">{careerObjective}</p>
              </div>
            )}

            <div className="mt-5">
              <p className="text-xl text-black font-bold border-b-2 pb-2 border-gray-100">
                Education
              </p>

              {schoolName10 && (
                <div>
                  <div className="flex flex-row justify-between items-center mt-4 mb-4 px-5">
                    <div className="flex flex-row gap-3 items-center">
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                      <p className="text-base font-black text-black">{schoolName10}</p>
                    </div>
                    <div className="flex flex-row gap-5 text-[10px] text-gray-500">
                      <p>{startDate10}</p>
                      <p>-</p>
                      <p>{endDate10}</p>
                    </div>
                  </div>
                  <div className="px-10">
                    <p className="text-sm">{boardSchoolName10}</p>
                    <p className="text-sm text-gray-500">{percentage10}%</p>
                  </div>
                </div>
              )}

              {schoolName12 && (
                <div>
                  <div className="flex flex-row justify-between items-center mt-4 mb-4 px-5">
                    <div className="flex flex-row gap-3 items-center">
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                      <p className="text-base font-black text-black">{schoolName12}</p>
                    </div>
                    <div className="flex flex-row gap-5 text-[10px] text-gray-500">
                      <p>{startDate12}</p>
                      <p>-</p>
                      <p>{endDate12}</p>
                    </div>
                  </div>
                  <div className="px-10">
                    <p className="text-sm">{boardSchoolName12}</p>
                    <p className="text-sm text-gray-500">{percentage12}%</p>
                  </div>
                </div>
              )}

              {collegeNameUG && (
                <div>
                  <div className="flex flex-row justify-between items-center mt-4 mb-4 px-5">
                    <div className="flex flex-row gap-3 items-center">
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                      <p className="text-base font-black text-black">{collegeNameUG}</p>
                    </div>
                    <div className="flex flex-row gap-5 text-[10px] text-gray-500">
                      <p>{startDateUG}</p>
                      <p>-</p>
                      <p>{endDateUG}</p>
                    </div>
                  </div>
                  <div className="px-10">
                    <p className="text-sm">{courseNameUG}</p>
                    <p className="text-sm text-gray-500">{percentageUG}%</p>
                  </div>
                </div>
              )}

              {collegeNamePG && (
                <div>
                  <div className="flex flex-row justify-between items-center mt-4 mb-4 px-5">
                    <div className="flex flex-row gap-3 items-center">
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                      <p className="text-base font-black text-black">{collegeNamePG}</p>
                    </div>
                    <div className="flex flex-row gap-5 text-[10px] text-gray-500">
                      <p>{startDatePG}</p>
                      <p>-</p>
                      <p>{endDatePG}</p>
                    </div>
                  </div>
                  <div className="px-10">
                    <p className="text-sm">{courseNamePG}</p>
                    <p className="text-sm text-gray-500">{percentagePG}%</p>
                  </div>
                </div>
              )}
            </div>

            {skills && (
              <div className="mt-5">
                <p className="text-xl text-black font-bold border-b-2 pb-2 border-gray-100">
                  Technical Skill
                </p>
                <p className="text-sm mt-4 px-5 mb-3">{skills}</p>
              </div>
            )}

            {projectName && (
              <div>
                <p className="text-xl text-black font-bold border-b-2 pb-2 border-gray-100 mt-5">
                  Project Details
                </p>
                <div className="mt-4 flex flex-row justify-between px-5">
                  <div>
                    <div className="flex flex-row gap-3 items-center">
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                      <p className="text-sm font-bold">
                        Project Name: <span className="font-medium">{projectName}</span>
                      </p>
                    </div>
                    <p className="text-sm mt-2 text-gray-500 px-5">Role in Project: {role}</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    Duration: <span className="text-sm font-medium">{projectDate}</span>
                  </p>
                </div>
                <div className="mt-4 px-9">
                  <p>{projectObjective}</p>
                </div>
              </div>
            )}

            {hobbiesName && (
              <div className="mt-5">
                <p className="text-xl text-black font-bold border-b-2 pb-2 border-gray-100">
                  Hobbies
                </p>
                <p className="text-sm mt-4 px-5 mb-3">{hobbiesName}</p>
              </div>
            )}

            <div className="mt-5">
              <p className="text-xl text-black font-bold border-b-2 pb-2 border-gray-100">
                Contact Details
              </p>
              <p className="text-sm mt-4 px-5">Name: {firstName}</p>
              <p className="text-sm mt-4 px-5">Gender: {gender}</p>
              <p className="text-sm mt-4 px-5">Date of Birth: {dateOfBirth}</p>
              <p className="text-sm mt-4 px-5">Mobile Number: {mobileNumber}</p>
              <p className="text-sm mt-4 px-5">Whatsapp Number: {whatsNumber}</p>
              <p className="text-sm mt-4 px-5">Email: {email}</p>
              <p className="text-sm mt-4 px-5">LinkedIn: {linkedIn}</p>
              <p className="text-sm mt-4 px-5">Twitter: {twitter}</p>
            </div>
          </div>
        )}

        {activeTheme === 2 && (
          <div className="flex min-h-full">

            <div className="w-1/3 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-8">

              <div className="flex justify-center mb-6">
                {previewImage ? (
                  <img
                    src={previewImage instanceof File ? URL.createObjectURL(previewImage) : previewImage}
                    alt="profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-blue-400"></div>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-400 pb-2">
                  CONTACT
                </h3>
                <div className="space-y-2 text-sm">
                  {email && <p>📧 {email}</p>}
                  {mobileNumber && <p>📱 {mobileNumber}</p>}
                  {whatsNumber && <p>💬 {whatsNumber}</p>}
                  {linkedIn && <p>🔗 {linkedIn}</p>}
                  {twitter && <p>🐦 {twitter}</p>}
                </div>
              </div>

              {(districtName || stateName || countryName || pinCode) && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-400 pb-2">
                    ADDRESS
                  </h3>
                  <p className="text-sm">
                    {districtName && <>{districtName}<br /></>}
                    {stateName && <>{stateName}<br /></>}
                    {countryName && pinCode && <>{countryName} - {pinCode}</>}
                  </p>
                </div>
              )}

              {(dateOfBirth || gender) && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-400 pb-2">
                    PERSONAL
                  </h3>
                  <div className="space-y-2 text-sm">
                    {dateOfBirth && <p><strong>DOB:</strong> {dateOfBirth}</p>}
                    {gender && <p><strong>Gender:</strong> {gender}</p>}
                  </div>
                </div>
              )}

              {hobbiesName && (
                <div>
                  <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-400 pb-2">
                    HOBBIES
                  </h3>
                  <p className="text-sm">{hobbiesName}</p>
                </div>
              )}
            </div>

            <div className="w-2/3 p-8">

              <div className="mb-8">
                <h1 className="text-4xl font-bold text-blue-800 mb-2">
                  {firstName} {lastName}
                </h1>
                <div className="h-1 w-24 bg-blue-600"></div>
              </div>

              {careerObjective && (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                    <span className="w-2 h-8 bg-blue-600"></span>
                    CAREER OBJECTIVE
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed pl-4">
                    {careerObjective}
                  </p>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                  <span className="w-2 h-8 bg-blue-600"></span>
                  EDUCATION
                </h2>

                <div className="space-y-4 pl-4">

                  {schoolName10 && (
                    <div className="border-l-4 border-blue-400 pl-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-gray-800">{schoolName10}</h3>
                        <span className="text-xs text-gray-500">
                          {startDate10} - {endDate10}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{boardSchoolName10}</p>
                      <p className="text-sm text-blue-600 font-semibold">{percentage10}%</p>
                    </div>
                  )}

                  {schoolName12 && (
                    <div className="border-l-4 border-blue-400 pl-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-gray-800">{schoolName12}</h3>
                        <span className="text-xs text-gray-500">
                          {startDate12} - {endDate12}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{boardSchoolName12}</p>
                      <p className="text-sm text-blue-600 font-semibold">{percentage12}%</p>
                    </div>
                  )}

                  {collegeNameUG && (
                    <div className="border-l-4 border-blue-400 pl-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-gray-800">{collegeNameUG}</h3>
                        <span className="text-xs text-gray-500">
                          {startDateUG} - {endDateUG}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{courseNameUG}</p>
                      <p className="text-sm text-blue-600 font-semibold">{percentageUG}%</p>
                    </div>
                  )}

                  {collegeNamePG && (
                    <div className="border-l-4 border-blue-400 pl-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-gray-800">{collegeNamePG}</h3>
                        <span className="text-xs text-gray-500">
                          {startDatePG} - {endDatePG}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{courseNamePG}</p>
                      <p className="text-sm text-blue-600 font-semibold">{percentagePG}%</p>
                    </div>
                  )}
                </div>
              </div>

              {skills && (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                    <span className="w-2 h-8 bg-blue-600"></span>
                    TECHNICAL SKILLS
                  </h2>
                  <p className="text-gray-700 text-sm pl-4">{skills}</p>
                </div>
              )}

              {projectName && (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                    <span className="w-2 h-8 bg-blue-600"></span>
                    PROJECTS
                  </h2>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-800">{projectName}</h3>
                      <span className="text-xs text-gray-500">{projectDate}</span>
                    </div>
                    <p className="text-sm text-blue-600 mb-2">Role: {role}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {projectObjective}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeWrite;