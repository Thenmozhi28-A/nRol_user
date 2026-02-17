import * as Yup from "yup";


export const Schema = Yup.object().shape({

  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid")
    .max(50, "Email must be at most 50 characters"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be at most 50 characters"),
});


export const ForgotPassword = Yup.object().shape({

  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid")
    .max(50, "Email must be at most 50 characters"),
});


export const Resume = Yup.object().shape({

  firstName: Yup.string()
    .required("First name is required")
    .matches(/^[A-Za-z]+$/, "First name can only contain letters")
    .max(50, "First name must be at most 50 characters"),

  lastName: Yup.string()
    .required("Last name is required")
    .matches(/^[A-Za-z]+$/, "Last name can only contain letters")

    .max(50, "Last name must be at most 50 characters"),

  certificateName: Yup.string()
    //  .matches(/^[A-Za-z]+$/, "Certificate name can only contain letters")

    .required("Please enter your name as in government-issued ID"),

  gender: Yup.string()
    .required("Gender is required"),

  dateOfBirth: Yup.date()
    .typeError("Invalid date of birth")
    .required("Date of Birth is required"),

  careerObjective: Yup.string()
    //  .matches(/^[A-Za-z]+$/, "Career Objective can only contain letters")

    .required("Career Objective is required"),

  address: Yup.string()
    //  .matches(/^[A-Za-z0-9\s\-\,\.\(\)]+$/, "Address can only contain letters, numbers, spaces, and special characters like - , . ( )")

    .required("Address is required"),

  mobileNumber: Yup.string()
    .required("Mobile Number is required")
    .matches(/^\d+$/, "Only numbers are allowed")
    .length(10, "Mobile Number must be exactly 10 digits"),

  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email (example@mail.com)")
    .max(50, "Email must be at most 50 characters"),


  districtName: Yup.string()
    .matches(/^[A-Za-z]+$/, "District name can only contain letters")

    .required("District Name is required"),

  stateName: Yup.string()
    //  .matches(/^[A-Za-z]+$/, "State name can only contain letters")

    .required("State Name is required"),

  countryName: Yup.string()
    //  .matches(/^[A-Za-z]+$/, "Country name can only contain letters")

    .required("Country Name is required"),

  pinCode: Yup.string()
    .required("Pin Code is required")
    .matches(/^\d+$/, "Only numbers are allowed")
    .length(6, "Pin Code must be exactly 6 digits"),


  schoolName10: Yup.string()
    //  .matches(/^[A-Za-\s\-\,\.\(\)]+$/, "School Name can only contain letters, numbers, spaces, and special characters like - , . ( )")

    .required("School Name is required"),

  boardSchoolName10: Yup.string()
    .required("Board School Name is required"),

  percentage10: Yup.number()
    .typeError("Percentage must be a number")
    .min(0, "Percentage cannot be less than 0")
    .max(100, "Percentage cannot be more than 100")
    .required("Percentage is required"),

  // startDate10: Yup.date()
  //   .typeError("Invalid start date")
  //   .required("Start Date is required"),

  // endDate10: Yup.date()
  //   .typeError("Invalid end date")
  //   .required("End Date is required"),

  startDate10: Yup.date()
    .typeError("Invalid start date")
    .required("Start Date is required"),

  endDate10: Yup.date()
    .typeError("Invalid end date")
    .min(
      Yup.ref("startDate10"),
      "End date cannot be before Start date"
    )
    .required("End Date is required"),



  schoolName12: Yup.string()
    //  .matches(/^[A-Za-\s\-\,\.\(\)]+$/, "School Name can only contain letters, numbers, spaces, and special characters like - , . ( )")
    .required("School Name is required"),

  boardSchoolName12: Yup.string()
    .required("Board School Name is required"),

  percentage12: Yup.number()
    .typeError("Percentage must be a number")
    .min(0, "Percentage cannot be less than 0")
    .max(100, "Percentage cannot be more than 100")
    .required("Percentage is required"),

  // startDate12: Yup.date()
  //   .typeError("Invalid start date")
  //   .required("Start Date is required"),

  // endDate12: Yup.date()
  //   .typeError("Invalid end date")
  //   .required("End Date is required"),

  startDate12: Yup.date()
    .typeError("Invalid start date")
    .required("Start Date is required"),

  endDate12: Yup.date()
    .typeError("Invalid end date")
    .min(
      Yup.ref("startDate12"),
      "End date cannot be before Start date"
    )
    .required("End Date is required"),



  collegeNameUG: Yup.string()
    //  .matches(/^[A-Za-\s\-\,\.\(\)]+$/, "College Name can only contain letters, numbers, spaces, and special characters like - , . ( )")
    .required("College Name is required"),

  courseUG: Yup.string()
    .required("Course is required"),

  percentageUG: Yup.number()
    .typeError("Percentage must be a number")
    .min(0, "Percentage cannot be less than 0")
    .max(100, "Percentage cannot be more than 100")
    .required("Percentage is required"),

  // startDateUG: Yup.date()
  //   .typeError("Invalid start date"),

  // endDateUG: Yup.date()
  //   .typeError("Invalid end date"),

  startDateUG: Yup.date()
    .typeError("Invalid start date"),

  endDateUG: Yup.date()
    .typeError("Invalid end date")
    .min(
      Yup.ref("startDateUG"),
      "End date cannot be before Start date"
    ),

  collegeNamePG: Yup.string()
    //  .matches(/^[A-Za-\s\-\,\.\(\)]+$/, "College Name can only contain letters, numbers, spaces, and special characters like - , . ( )")

    .required("College Name is required"),

  coursePG: Yup.string()

    .required("Course is required"),

  percentagePG: Yup.number()
    .typeError("Percentage must be a number")
    .min(0, "Percentage cannot be less than 0")
    .max(100, "Percentage cannot be more than 100")
    .required("Percentage is required"),

  // startDatePG: Yup.date()
  //   .typeError("Invalid start date"),

  // endDatePG: Yup.date()
  //   .typeError("Invalid end date"),

  startDatePG: Yup.date()
    .typeError("Invalid start date"),

  endDatePG: Yup.date()
    .typeError("Invalid end date")
    .min(
      Yup.ref("startDatePG"),
      "End date cannot be before Start date"
    ),

  skills: Yup.array()
    .of(Yup.string())
    .min(1, "At least one skill is required")
    .required("Skills are required"),

  hobbiesName: Yup.array()
    .of(Yup.string())
    .min(1, "At least one hobby is required")
    .required("Hobbies are required"),

  projectName: Yup.string()
    // .matches(/^[A-Za-z]+$/, "Project Name can only contain letters")
    .required("Project Name is required"),

  projectObjective: Yup.string()
    .matches(/^[A-Za-z]+$/, "Project Objective can only contain letters")
    .required("Project Objective is required"),

  role: Yup.string()
    .matches(/^[A-Za-z]+$/, "Role can only contain letters")
    .required("Role is required"),

  projectMonth: Yup.string()
    .typeError("Invalid project month")
    .matches(/^[A-Za-z0-9\s]+$/, "Project Month can only letters and numbers")
    .required("Project Month is required"),

  linkedIn: Yup.string()
    .matches(/^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/, "Enter a valid LinkedIn URL")
    .required("LinkedIn is required"),

  twitter: Yup.string()
    .matches(/^(https?:\/\/)?(www\.)?twitter\.com\/.*$/, "Enter a valid Twitter URL")
    .required("Twitter is required"),

  companyName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Company name can only contain letters")
    .required("Company Name is required"),

  designation: Yup.string()
    .matches(/^[A-Za-z]+$/, "Designation can only contain letters")

    .required("Designation is required"),

  StartDate: Yup.date()
    .typeError("Invalid start date")
    .required("Start Date is required"),

  EndDate: Yup.date()
    .typeError("Invalid end date")
    .min(
      Yup.ref("StartDate"),
      "End date cannot be before Start date"
    )
    .required("End Date is required"),


});

export const User = Yup.object().shape({
  firstNameUser: Yup.string()
    .matches(/^[A-Za-z]+$/, "First Name can only contain letters")
    .required("First Name is required"),

  lastNameUser: Yup.string()
    .matches(/^[A-Za-z]+$/, "Last Name can only contain letters")
    .required("Last Name is required"),

  dateOfBirth: Yup.date()
    .typeError("Invalid date of birth")
    .required("Date of Birth is required"),

  emailUser: Yup.string()
    .required("Email is required")
    .email("Email is invalid")
    .max(50, "Email must be at most 50 characters"),

   phoneNumberUser: Yup.string()
    .required("Mobile Number is required")
    .matches(/^\d+$/, "Only numbers are allowed")
    .length(10, "Mobile Number must be exactly 10 digits"),

})
