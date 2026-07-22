'use client'

import { projects } from '@/data/projects'
import React, { useMemo, useState } from 'react'
import ProjectCard from './ProjectCard';
import Modal from './Modal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projectData = useMemo(() => {
    return projects;
  }, [])

  return (
    <section id='projects' className='max-w-5xl mx-auto py-20 px-5 bg-white'>
      <h2 className="text-3xl font-bold mb-5">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-5">
        {
          projectData.map(p =>
            <ProjectCard
              key={p.id}
              project={p}
              onView={setSelectedProject}
            />
          )
        }
      </div>

      {/* Modal */}
      <Modal
        // isOpen={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {
          selectedProject && (
            <div className='space-y-4'>
              <h2 className="text-2xl font-bold">
                {selectedProject.title}
              </h2>
              <p>
                {selectedProject.description}
              </p>
            </div>
          )
        }
      </Modal>
    </section>
  )
}