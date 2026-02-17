
import React, { useState } from "react";
import Heading from "./Heading";

const Skills = ({ errors, setValue, watch }) => {
  const [show, setShow] = useState(true);
  const [skillInput, setSkillInput] = useState("");

  const skillsList = watch("skills") || []; 

    const isAddDisabled = skillInput.trim() === "";


  const toggle = () => setShow(!show);

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed) return;

    if (skillsList.includes(trimmed)) return;

    const updatedSkills = [...skillsList, trimmed];
    setValue("skills", updatedSkills, { shouldValidate: true });

    setSkillInput("");
  };

  const removeSkill = (index) => {
    const updatedSkills = skillsList.filter((_, i) => i !== index);
    setValue("skills", updatedSkills, { shouldValidate: true });
  };

  return (
    <div className="bg-[#384152] rounded-xl p-8">
      <Heading HeadingName="Skills" open={toggle} isOpen={show} />

      {show && (
        <>
          <p className="text-[#b5b5bc] mb-4 text-sm mt-5">
            Add your technical and professional skills
          </p>

             <div>
            <p className="text-white mb-3 text-xs font-bold">Add Skills :</p>
          </div>
<div className="flex flex-row items-center gap-2">
          <input
            type="text"
            placeholder="Enter skill (eg: HTML)"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            className="bg-[#202938] w-full text-white rounded-lg p-4
            border-2 border-[#9999A3] focus:border-[#30866D] outline-none"
          />

          {/* <div
            className="mt-3 w-10 h-10 flex items-center justify-center
            bg-[#30866D] rounded-full cursor-pointer"
            onClick={addSkill}
          >
            <span className="text-white text-xl">+</span>
          </div> */}

                    <button
            type="button"
            onClick={addSkill}
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

          {errors.skills && (
            <p className="text-red-500 text-sm mt-2">
              {errors.skills.message}
            </p>
          )}


           <div className="mt-4">
                        <p className="text-white mb-3 text-xs font-bold">Your Skills :</p>

            </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {skillsList.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2
                border border-[#9999A3] rounded-full text-white bg-[#2a3344]"
              >
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
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

export default Skills;
