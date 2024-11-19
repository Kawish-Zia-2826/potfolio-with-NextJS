import React from 'react'
import Card from './Card'
import Heading from './Heading'

const data = [
    { 
      id:1,
title: "Intractive Web Design",
desc: "A Front-Ent and combine of front_Ent i make intractive Web page",
img: "/project1.jpg",
tags: ["TypeScript", "NodeJS", "CSS", "HTML"],
},
{
id: 2,
title: "Create Post",
desc: "Make Create Post Using JS TS and Front_Ent.",
img: "/project3.jpg",
tags: ["Next.JS", "Node", "CSS", "Typescript"],
},
{
id: 3,
title: "Discord Clone",
desc: "A simple HTML and TypeScript make a same discord clone",
img: "/project2.jpg",
tags: ["HTML", "Node", "CSS", "Ipescript"],
}, 
{
id: 4,
title: "Dynamic Interactive Resume",
desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
img: "/project4.jpg",
tags: ["HTML", "Node", "CSS", "Ipescript"],
},

];

const Project = () => {
  return (
    <div id='projects' className='conatiner pt-32'>
        <Heading title='Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key = {el.id}
        title = {el.title}
        desc = {el.desc}
        img = {el.img}
        tags = {el.tags}
        />))}
        </div>
      
    </div>
  )
}

export default Project
