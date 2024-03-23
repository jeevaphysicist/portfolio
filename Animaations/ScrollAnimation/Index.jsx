
import React from "react";
import { ContainerScroll } from "./ScrollAnimation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col mt-[-10rem] md:mt-[-5rem] overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1  leading-none">
                Education
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    Name: "PSG College Of Arts and Science",
    Degree: "Bachlore of Science",
    Field: "Electronics",
    Start: "July , 2018",
    End: "July , 2021",
    CGPA:"6.5"
  },
  {
    Name: "Edureka",
    Degree: "Internship",
    Field: "Full Stack Web Developer",
    Start: "March , 2022",
    End: "August , 2022",
    CGPA:"",
    Achievements:"Super Intern"
  },
];
