import React from "react";
import {
  useBoardSelectQuery,
  useUgSelectQuery,
  usePgSelectQuery,
} from "../services/ProfileApi";

const SelectBoardCourse = ({
  label,
  type,
  name,
  register,
  errors,
  className = "",
}) => {

  const {data:boardRes} = useBoardSelectQuery();
  const {data:ugRes} = useUgSelectQuery();
  const {data:pgRes} = usePgSelectQuery();

  const options = type === "board" ? boardRes?.data : type === "ug" ? ugRes?.data : pgRes?.data;
  const labelKey = type === "board" ? "board" : "course";


  return (
 
    <div className="relative w-full"> 
    
    <div className="flex flex-col gap-2"> 
      <label className="text-base font-medium text-white">{label}</label>
      <select
        {...register(name)}
        className={`${className} custom-select`}
        defaultValue=""
      >
        <option value="" disabled>
          Select {label}
        </option>

        {options?.map((item) => (
          <option key={item.id} value={item.id}>
            {item[labelKey]}
          </option>
        ))}
      </select>
    </div>

    {errors?.[name] && (
      <p className="text-[13px] text-red-500 mt-1">
        {errors[name].message}
      </p>
    )}

    </div>

  );
};

export default SelectBoardCourse;
