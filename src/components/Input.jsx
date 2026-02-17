const Input = ({ label, register, name, errors, icon, ...rest }) => {

  return (
    <div className="w-full">
   
      <div className="relative w-full">
        <input
          {...register(name)}
          {...rest}
          placeholder=" "
          className="
            peer w-full rounded-lg
            px-4 pr-10 py-4 lg:py-6
            text-xs md:text-sm lg:text-base
            text-gray-900
            border border-[#DEE2E6]
            bg-white
            focus:outline-none focus:border-[#155F38]
            hover:border-[#155F38]
          "
        />

    
        {icon && (
          <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none ">
            {icon}
          </div>
        )}

        <label
          className="
            absolute left-3 top-1/2 -translate-y-1/2
            bg-white px-1
            text-xs md:text-sm lg:text-base
            text-[#868E96]
            pointer-events-none
            transition-all duration-200

            peer-placeholder-shown:top-1/2
            peer-placeholder-shown:-translate-y-1/2

            peer-focus:top-0
            peer-focus:-translate-y-1/2
            peer-focus:text-[#155F38]

            peer-not-placeholder-shown:top-0
            peer-not-placeholder-shown:-translate-y-1/2
            peer-not-placeholder-shown:text-[#155F38]
          "
        >
          {label}
        </label>
      </div>

      <div className=" absolute mt-0.5">
        {errors?.[name] && (
          <p className="text-xs text-red-500">
            {errors[name].message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;

