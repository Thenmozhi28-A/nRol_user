
import React from "react";

const TextArea = ({ style, register, name, errors }) => {

  if (!register || !name) return null;

  return (
    <div className="relative">
      <textarea
        {...register(name)}
        style={style}
        className="text-start border-2 border-[#9999A3] text-white text-sm p-4 bg-[#202938] focus:border-[#30866D] focus:outline-none rounded-lg overflow-y-scroll hide-scrollbar"
      />

      {errors?.[name] && (
        <p className="text-[13px] text-red-500 mt-1">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default TextArea;
