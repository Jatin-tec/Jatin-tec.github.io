import React from "react";
import SkillBox from "../../chip/SkillBox";

import {
  SiJavascript,
  SiReact,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiLinux,
  SiGit,
  SiGithub,
  SiFirebase,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<SiJavascript />}
                black={"black"}
                white={"white"}
                skill={"Javascript"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"white"}
                white={"black"}
                skill={"MongoDB"}
              />
              <SkillBox
                logo={<SiMysql />}
                black={"black"}
                white={"white"}
                skill={"MySQL"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiReact />}
                black={"black"}
                white={"white"}
                skill={"React Js"}
              />
              <SkillBox
                logo={<SiFirebase />}
                black={"white"}
                white={"black"}
                skill={"Firebase"}
              />
              <SkillBox
                logo={<SiExpress />}
                black={"white"}
                white={"black"}
                skill={"Express Js"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiGit />}
                black={"white"}
                white={"black"}
                skill={"Git"}
              />
              <SkillBox
                logo={<SiGithub />}
                black={"black"}
                white={"white"}
                skill={"Github"}
              />
              <SkillBox
                logo={<SiLinux />}
                black={"black"}
                white={"white"}
                skill={"Linux"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
            <SkillBox
                logo={<SiTensorflow />}
                black={"black"}
                white={"white"}
                skill={"Tensorflow"}
              />
              <SkillBox
                logo={<SiPytorch />}
                black={"white"}
                white={"black"}
                skill={"Pytorch"}
              />
              <SkillBox
                logo={<SiDocker />}
                black={"black"}
                white={"white"}
                skill={"Docker"}  
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
