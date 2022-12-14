import { useState } from "react";
import Project from "../components/ProjectsPage/Project";

export default function ProjectsPage() {
  const categories = [
    "Programming",
    "Graphic Design",
    "Economie",
    "AI",
    "Electronics",
  ];

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const projects = [
    {
      image1: "https://placehold.co/64x64.png",
      image2: "https://placehold.co/64x64.png",
      title: "Book Store Gallery",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.!",
      image2title: "DRIBLLE",
      stars: 4.8,
      studentsNumber: 0,
      hours: 17
    },
    {
      image1: "https://placehold.co/64x64.png",
      image2: "https://placehold.co/64x64.png",
      title: "Book Store Gallery",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.!",
      image2title: "DRIBLLE",
      stars: 4.8,
      studentsNumber: 0,
      hours: 17
    },
    {
      image1: "https://placehold.co/64x64.png",
      image2: "https://placehold.co/64x64.png",
      title: "Book Store Gallery",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.!",
      image2title: "DRIBLLE",
      stars: 4.8,
      studentsNumber: 0,
      hours: 17
    },
    {
      image1: "https://placehold.co/64x64.png",
      image2: "https://placehold.co/64x64.png",
      title: "Book Store Gallery",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.!",
      image2title: "DRIBLLE",
      stars: 4.8,
      studentsNumber: 0,
      hours: 17
    },
  ]

  return (
    <>
      <div>
        <div className="flex text-2xl font-medium gap-x-16 my-4">
          {categories.map((category, index) => (
            <button 
              className={`${category === currentCategory ? "text-blue-700" : ""} outline-none`}
              onClick={() => setCurrentCategory(category)} key={index}>
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 my-8">
          {projects.map((project, index) => {
            return (
              <Project key={index} project={project}/>
            )
          })}
        </div>
      </div>
    </>
  );
}
