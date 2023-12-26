import React from 'react'
import { Bio } from '../constant/bio'
import { skills } from '../constant/skills'

function AboutDeveloper() {
    return (
        <div className="bg-gray-900 text-white min-h-screen py-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{Bio.name}</h1>
            <div className="flex justify-center mb-4">
              {Bio.roles.map((role, index) => (
                <div key={index} className="bg-gray-800 text-sm rounded-md px-2 py-1 mx-1">
                  {role}
                </div>
              ))}
            </div>
            <p className="text-lg mb-6">{Bio.description}</p>
            <div className="flex justify-center space-x-4 mb-8">
              <a href={Bio.resume} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Resume
              </a>
              <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                GitHub
              </a>
              <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                LinkedIn
              </a>
              {/* Add other social links here */}
            </div>
          </div>
          {/* Displaying skills */}
          {skills.map((skillSet) => (
            <div key={skillSet.id} className="mb-6">
              <h2 className="text-2xl font-bold mb-4">{skillSet.title}</h2>
              <div className="flex flex-wrap">
                {skillSet.skill.map((skill) => (
                  <div key={skill.id} className="w-1/4 mb-4 flex items-center justify-center">
                    <img src={skill.image} alt={skill.name} className="w-12 h-12 object-contain" />
                    <p className="text-sm ml-2">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default AboutDeveloper