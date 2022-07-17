import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'


const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title mb-5'>Projects</h2>


      <div className='projects__grid mt-5'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project}
          />

        ))}
      </div>
    </section>
  )
}

export default Projects
