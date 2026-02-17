import React from 'react'

const InputSelect = ({ label, className,errors,name,register,Option1,Option2 }) => {

  return (
    <div className='relative w-full'>
    <div className="flex flex-col gap-2">
      <label className="text-base font-medium text-white">{label}</label>
    <select className={`${className} custom-select`} {...register(name)}>
        <option>{Option1}</option>
        <option>{Option2}</option>
      
      </select>
    </div>
      <div className=" absolute mt-0.5">
        {errors?.[name] && (
          <p className="text-[13px] text-red-500">
            {errors[name].message}
          </p>
        )}
      </div>
      </div>
  );
};

export default InputSelect
