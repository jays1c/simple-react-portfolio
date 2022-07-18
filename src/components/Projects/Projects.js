import uniqid from 'uniqid'
import { Zoom , Slide } from 'react-reveal'
import {BsArrowRight} from "react-icons/bs";
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'



const Projects = () => {
    if (!projects.length) return null

    return (

        <section id='projects' className='section projects'>
            <Slide right duration={3000}>
            <h2 className='section__title'>Certification and Badges</h2>
            </Slide>
            <Zoom effect="fadeInUp" duration={2200}>
                <div className='projects__grid'>
                    {projects.map((project) => (
                        <ProjectContainer key={uniqid()} project={project} />
                    ))}
                </div>
            </Zoom>

            <div style={{float:"right"}} className="container--seemore">
                <a
                    href='http:/example.com/'
                    aria-label='live preview'
                    className='see-more'
                >
                    See more <BsArrowRight className="arrow--icon"/>
                </a>
            </div>
        </section>


    )
}

export default Projects
