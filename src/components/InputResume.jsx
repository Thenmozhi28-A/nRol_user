import React from 'react'

const InputResume = ({ label, className, type,placeholder, errors, name, register,disabled } )=> {
   if (!register) return null; 
 
  return (
    <div className='relative w-full'>
   <div className='flex flex-col gap-2'>
    <label className='text-base font-medium text-white'>{label}</label>
  <input
        className={className}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        disabled={disabled}
      
      />
      
     </div>
      <div className=" absolute mt-0.5 mb-0.5">
        {errors?.[name] && (
          <p className="text-[13px] text-red-500">
            {errors[name].message}
          </p>
        )}
      </div>
   </div>
  )
}

export default InputResume