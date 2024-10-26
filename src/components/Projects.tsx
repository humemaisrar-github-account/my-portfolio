import React from "react";
import Heading from "./Heading";
import { HiMenuAlt1 } from "react-icons/hi";
import Card from "./Card"
 

const data = [
  {
    id: 0,
    title: "Milestone-OnetoTwo",
    img: "/miles-1.jpg",
    tags: ["Html", "Css", "Javascript&Typescript"],
  },
  {
    id: 1,
    title: "Milestone-Three",
    img: "/mile-3.jpg",
    tags: ["Html", "Css", "Javascript&Typescript"],
  },

  {
    id: 2,
    title: "Milestone-Four",
    img: "/miles-4.jpg",
    tags: ["Html", "Css", "Javascript&Typescript"],
  },
  {
    id: 3,
    title: "Milestone-Five",
    img: "/miles-5.jpg",
    tags: ["Html", "Css", "Javascript&Typescript"],
  },
  {
    id: 4,
    title: "Id Card",
    img: "/idcard.jpg",
    tags: ["React", "Next.Js", "TailwindCss"],
  },
];

const Projects = () => {
  return(
   <div id="projects" className="container pt-32">
   <Heading title="My Projects" />
   <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
    {data.map((el)=>(<Card 
      key={el.id}
      title={el.title}
      img={el.img}
      tags={el.tags}  
      />))}
    
   </div>

   </div>
  
  
  );
};

export default Projects;
 
