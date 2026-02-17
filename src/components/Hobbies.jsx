import React, { useState } from "react";
import Heading from "./Heading";

const Hobbies = ({ errors, setValue, watch }) => {

  const [show, setShow] = useState(true);

  const [hobbyInput, setHobbyInput] = useState("");

  const hobbiesList = watch("hobbiesName") || [];

  const isAddDisabled = hobbyInput.trim() === "";

  const handel = () => setShow(!show);

  const AddHobby = () => {

    const trimmed = hobbyInput.trim();

    if (!trimmed) return;

    if (hobbiesList.includes(trimmed)) return;

    const updated = [...hobbiesList, trimmed];

    setValue("hobbiesName", updated, { shouldValidate: true });
    setHobbyInput("");
  };

  const RemoveHobby = (index) => {

    const updated = hobbiesList.filter((_, i) => i !== index);

    setValue("hobbiesName", updated, { shouldValidate: true });
  };

  return (
    <div className="bg-[#384152] rounded-xl p-8">
      <Heading HeadingName="Hobbies & Interests" open={handel} isOpen={show} />

      {show && (
        <>
          <p className="text-[#b5b5bc] mb-5 text-sm mt-2">
            List your hobbies and interests.
          </p>

         
            <p className="text-white mb-3 text-xs font-bold mt-5">Add Hobbies & Interests :</p>
         

          <div className="flex flex-row items-center gap-2">
           <input
            type="text"
            placeholder="Enter hobby"
            value={hobbyInput}
            onChange={(e) => setHobbyInput(e.target.value)}
            className="bg-[#202938] w-full text-white rounded-lg p-4 border-2 border-[#9999A3] focus:border-[#30866D] outline-none"
          />

          {/* <div
            className="p-2 bg-[#30866D] rounded-full w-10 h-10 flex items-center justify-center  mt-4"
            onClick={AddHobby}
            disabled={isAddDisabled}
          >
            +
          </div> */}

         

         <button
            type="button"
            onClick={AddHobby}
            disabled={isAddDisabled}
            className={`p-2 rounded-full w-10 h-10 flex items-center justify-center text-white transition
          ${isAddDisabled
                ? "bg-gray-500 cursor-not-allowed opacity-50"
                : "bg-[#30866D] hover:scale-105 active:scale-95"}
            `}
          >
            +
          </button>
     
           </div>


          {errors.hobbiesName && (
            <p className="text-red-500 text-sm mt-2">
              {errors.hobbiesName.message}
            </p>
          )}


          <div className="mt-4">
                        <p className="text-white mb-3 text-xs font-bold">Your Hobbies & Interests :</p>

            </div>

          <div className="mt-3 flex flex-wrap gap-2">

            {hobbiesList.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 border border-[#9999A3] rounded-full text-white bg-[#2a3344]"
              >
                <span>{item}</span>
                <button
                  type="button"
                  onClick={() => RemoveHobby(index)}
                  className="text-red-400 font-bold"
                >
                  ✕
                </button>



              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Hobbies;
