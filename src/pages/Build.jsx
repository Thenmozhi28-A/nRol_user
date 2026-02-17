import React, { useEffect } from 'react'
import Button from '../components/Button'
import CardResume from '../components/CardResume'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resume } from "../validation/Yup";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { useCreateProfileMutation } from '../services/ProfileApi';
import ResumeWrite from '../components/ResumeWrite';
import { toast } from 'react-hot-toast';
import { useGetProfileQuery } from '../services/ProfileApi';
import { useUpdateProfileMutation } from '../services/ProfileApi';
import { useWatch } from "react-hook-form";
import { useMemo } from "react";
import { useSelector } from 'react-redux'

const Build = () => {


const userId = useSelector((state) => 
  state.auth.user?._id || 
  state.auth.user?.id || 
  state.auth.user?.userId
)


// const userInfo = {
//   userId: "12345",
// };

// const queryParams = {
//   conversationId: "8878788",
//   page: 1,
//   limit: 10,
//   search: "ram",
//   sort: "latest",
// };

// const filters = {
//   status: "active",
//   role: "user",
//   isActive: true,
//   isBlocked: false,
// };

// const meta = {
//   device: "mobile",
//   os: "android",
//   browser: "chrome",
//   timezone: "IST",
// };

// const profileRequest = {
//   userId: 1,
//   conversationId: 2,
//   page: 1,
//   limit: 10,
//   search: "ram",
//   sort: "latest",
//   status: "active",
//   role: "user",
//   isActive: true,
//   isBlocked: false,
//   device: "mobile",
// };

// const { data: apiResponse }=useGetProfileQuery(profileRequest);


//   const { data: apiResponse } = useGetProfileQuery({
//   userInfo,
//   queryParams,
//   filters,
//   meta,
// });

const {data:apiResponse} = useGetProfileQuery(userId)


  const profile = apiResponse?.data;

  const isEditMode = !!profile?._id || !!profile?.id;

  const [createProfile] = useCreateProfileMutation();

  const [updateProfile] = useUpdateProfileMutation();

  // const [theme, setTheme] = useState(1)


  // const navigate = useNavigate()

  // const handleBuild = () => {
  //   navigate('/profile')
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    setValue,
    reset,
    control,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(Resume),
    defaultValues: {
      skills: [],
      hobbiesName: [],
    },
  });

  // console.log("Form Values:", errors);

  const watchedValues = useWatch({ control });

  const onSubmit = async (data) => {

    const formData = new FormData()

    if (data.profileImage) {
      formData.append("profileImage", data.profileImage)
    }

    const profileObject = {
      profileImage: data.profileImage ? undefined : profile?.profileImage,
      firstName: data.firstName,
      lastName: data.lastName,
      nameOnIRCCertificate: data.certificateName,
      gender: data.gender,
      phoneNo: data.mobileNumber,
      email: data.email,
      address: data.address,
      district: data.districtName,
      state: data.stateName,
      country: data.countryName,
      zipcode: data.pinCode,
      linkedIn: data.linkedIn,
      twitter: data.twitter,
      objective: data.careerObjective,
      dateOfBirth: data.dateOfBirth
        ? new Date(data.dateOfBirth).toISOString()
        : null,

      skills: data.skills || [],
      hobby: data.hobbiesName || [],
      educations: [
        {
          level: "10th",
          schoolName: data.schoolName10,
          board: data.boardSchoolName10,
          percentage: data.percentage10,
          from: data.startDate10,
          to: data.endDate10,
        },
        {
          level: "12th",
          schoolName: data.schoolName12,
          board: data.boardSchoolName12,
          percentage: data.percentage12,
          from: data.startDate12,
          to: data.endDate12,
        },
        {
          level: "UG",
          collegeName: data.collegeNameUG,
          course: data.courseNameUG,
          percentage: data.percentageUG,
          from: data.startDateUG,
          to: data.endDateUG,
        },
        {
          level: "PG",
          collegeName: data.collegeNamePG,
          course: data.courseNamePG,
          percentage: data.percentagePG,
          from: data.startDatePG,
          to: data.endDatePG,
        },
      ],

      projects: [
        {
          title: data.projectName,
          objective: data.projectObjective,
          role: data.role,
          duration: data.projectMonth,
        },
      ],

      experience: [
        {
          companyName: data.companyName,
          designation: data.designation,
          from: data.StartDate,
          to: data.EndDate,
        },
      ],
    };

    formData.append(
      "profile",
      new Blob([JSON.stringify(profileObject)], { type: "application/json", }), "profile.json"
    );

    try {
      let res;

      if (isEditMode) {
        res = await updateProfile({ userId, formData }).unwrap();
        toast.success("Profile Updated Successfully");
      } else {
        res = await createProfile(formData).unwrap();
        toast.success("Profile Created Successfully");
      }

      console.log("SUCCESS", res);

    } catch (err) {
      console.error("ERROR RESPONSE ", err);
      toast.error(err?.data?.message || "API Error");
    }

  };

  const isFilled = (fields = []) =>
  fields.every((value) => {
    if (Array.isArray(value)) return value.length > 0;
    return value !== undefined && value !== null && value !== "";
  });

  useEffect(() => {
    if (profile) {
      reset({
        profileImage: profile.profileImage ?? null,
        firstName: profile.firstName || "",
        lastName: profile.lastName || "",
        certificateName: profile.nameOnIRCCertificate || "",
        gender: profile.gender || "",
        mobileNumber: profile.phoneNo || "",
        email: profile.email || "",
        address: profile.address || "",
        districtName: profile.district || "",
        stateName: profile.state || "",
        countryName: profile.country || "",
        pinCode: profile.zipcode || "",
        linkedIn: profile.linkedIn || "",
        twitter: profile.twitter || "",
        careerObjective: profile.objective || "",
        dateOfBirth: profile.dateOfBirth?.split("T")[0] || "",

        skills: profile.skills || [],
        hobbiesName: profile.hobby || [],

        schoolName10: profile.educations?.[0]?.schoolName || "",
        percentage10: profile.educations?.[0]?.percentage || "",
        boardSchoolName10: profile.educations?.[0]?.board || "",
        startDate10: profile.educations?.[0]?.from?.split("T")[0] || "",
        endDate10: profile.educations?.[0]?.to?.split("T")[0] || "",

        schoolName12: profile.educations?.[1]?.schoolName || "",
        percentage12: profile.educations?.[1]?.percentage || "",
        boardSchoolName12: profile.educations?.[1]?.board || "",
        startDate12: profile.educations?.[1]?.from?.split("T")[0] || "",
        endDate12: profile.educations?.[1]?.to?.split("T")[0] || "",

        collegeNameUG: profile.educations?.[2]?.schoolName || "",
        percentageUG: profile.educations?.[2]?.percentage || "",
        courseNameUG: profile.educations?.[2]?.course || "",
        startDateUG: profile.educations?.[2]?.from?.split("T")[0] || "",
        endDateUG: profile.educations?.[2]?.to?.split("T")[0] || "",

        collegeNamePG: profile.educations?.[3]?.schoolName || "",
        percentagePG: profile.educations?.[3]?.percentage || "",
        courseNamePG: profile.educations?.[3]?.course || "",
        startDatePG: profile.educations?.[3]?.from?.split("T")[0] || "",
        endDatePG: profile.educations?.[3]?.to?.split("T")[0] || "",

        projectName: profile.projects?.[0]?.title || "",
        projectObjective: profile.projects?.[0]?.objective || "",
        role: profile.projects?.[0]?.role || "",
        projectMonth: profile.projects?.[0]?.duration || "",

        companyName: profile.experiences?.[0]?.companyName || "",
        designation: profile.experiences?.[0]?.designation || "",
        StartDate: profile.experiences?.[0]?.from?.split("T")[0] || "",
        EndDate: profile.experiences?.[0]?.to?.split("T")[0] || "",
      });
    }
  }, [profile, reset]);

 const progress = useMemo(() => {

  let score = 10;

  if (isFilled([watchedValues?.profileImage])) score += 10;

  if (isFilled([
    watchedValues?.firstName,
    watchedValues?.lastName,
    watchedValues?.dateOfBirth,
    watchedValues?.certificateName,
    watchedValues?.gender
  ])) score += 10;

  if (isFilled([watchedValues?.careerObjective])) score += 10;

  if (isFilled([
    watchedValues?.mobileNumber,
    watchedValues?.email,
    watchedValues?.address,
    watchedValues?.districtName,
    watchedValues?.stateName,
    watchedValues?.countryName,
    watchedValues?.pinCode
  ])) score += 10;

  if (isFilled([watchedValues?.skills])) score += 10;

  if (isFilled([
    watchedValues?.projectName,
    watchedValues?.projectObjective,
    watchedValues?.role,
    watchedValues?.projectMonth
  ])) score += 10;

  if (isFilled([
    watchedValues?.companyName,
    watchedValues?.designation,
    watchedValues?.StartDate,
    watchedValues?.EndDate
  ])) score += 10;

  if (isFilled([watchedValues?.linkedIn, watchedValues?.twitter])) score += 10;

  if (isFilled([watchedValues?.hobbiesName])) score += 10;

  return Math.min(score, 100); 

}, [watchedValues]);


  return (

    <div className='bg-[#202938] rounded-xl p-6 mb-10'>

      <div className='grid grid-cols-12 gap-5' >

        <div className='col-span-6 h-full p-3'>

          <form
            onSubmit={handleSubmit(onSubmit)}
          >

            <div className='flex flex-col  sticky top-0 z-20 bg-[#202938] '>

              {/* <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        className="lucide lucide-chevrons-left-icon lucide-chevrons-left text-[#30866D] cursor-pointer" onClick={handleBuild}><path d="m11 17-5-5 5-5" /><path d="m18 17-5-5 5-5" /></svg> */}

              <div className='flex flex-row items-center justify-between gap-2'>
                <div className='flex flex-row items-center gap-3'>
                  <div className='p-2 bg-[#f66062] rounded-full '>
                    <p className='text-white h-10 w-10 text-lg flex items-center justify-center '>{progress}%</p>

                  </div>

                  <div>
                    <p className='text-base text-white font-medium'>Your Profile Score</p>
                  </div>
                </div>

                <div>
                  <Button text={isEditMode ? "Update" : "Save"}
                    type="submit" className="bg-[#30866D] text-white rounded-lg px-5 py-3 mt-3 cursor-pointer" />
                </div>

              </div>

              <div className="w-full h-1 bg-[#2e3a4d] rounded-lg mt-5 overflow-hidden">
                <div
                  className="h-full bg-[#30866D] rounded-lg transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

            </div>

            <div className='flex flex-col gap-3 mt-5'>
              <CardResume register={register} errors={errors} getValues={getValues}
                setValue={setValue} watch={watch} />
            </div>

          </form>

        </div>

        <div className='col-span-6 '>

          <div className='flex flex-col gap-5 sticky top-0 z-20 bg-[#202938] '>

            <div className='flex flex-row justify-between items-center'>

              <p className='text-lg text-white'>Choose the theme for your CV</p>

              <div className='flex flex-row gap-2 items-center text-[#30866D] text-lg cursor-pointer rounded-lg hover:underline'>
                <MdOutlinePictureAsPdf /> <p>Download CV</p>
              </div>

            </div>
          </div>
          <div>
            <ResumeWrite watch={watch} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Build


