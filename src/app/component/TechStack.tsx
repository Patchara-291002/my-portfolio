import React from 'react'

export default function TechStack() {

    const techStack = [
        {
            name: "HTML",
            icon: "html"
        },
        {
            name: "CSS",
            icon: "css"
        },
        {
            name: "JavaScript",
            icon: "javascript"
        },
        {
            name: "TypeScript",
            icon: "typescript"
        },
        {
            name: "React.js",
            icon: "react"
        },
        {
            name: "Next.js",
            icon: "nextjs"
        },
        {
            name: "Tailwind CSS",
            icon: "tailwind"
        },
        {
            name: "Zustand / Context API",
            icon: "state-management"
        },
        {
            name: "Python",
            icon: "python"
        },
        {
            name: "FastAPI",
            icon: "fastapi"
        },
        {
            name: "Flask",
            icon: "flask"
        },
        {
            name: "PostgreSQL",
            icon: "postgresql"
        },
        {
            name: "MariaDB",
            icon: "mariadb"
        },
        {
            name: "SQLite",
            icon: "sqlite"
        },
        {
            name: "Docker",
            icon: "docker"
        },
        {
            name: "Render",
            icon: "render"
        },
        {
            name: "Heroku",
            icon: "heroku"
        },
        {
            name: "Postman",
            icon: "postman"
        },
        {
            name: "Figma",
            icon: "figma"
        },
        {
            name: "GitHub",
            icon: "github"
        }
    ];
    

  return (
    <div
        className='flex items-center justify-center w-full h-screen'
    >
      <div
        className='text-center'
      >
        <p
            className='text-2xl font-bold'
        >
            My Tech Stack
        </p>
        <p
            className='text-lg '
        >
            These are the tools I work with regularly to bring ideas to life.
        </p>
      </div>
    </div>
  )
}


