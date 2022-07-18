import uniqid from 'uniqid'
import { Bounce, Slide } from 'react-reveal'
import { skills } from '../../portfolio'
import './Skills.css'



const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills white--space' id='skills'>

        <Slide right duration={1500}>
            <h2 className='section__title'>Skills</h2>
        </Slide>

        <Bounce bottom duration={1500}>
              <ul className='skills__list'>
                {skills.map((skill) => (
                  <img key={uniqid()} className='skills__list-item btn skills--icons'
                      src={skill}
                   alt="skills"/>
                ))}

              </ul>
        </Bounce>

    </section>
  )
}

export default Skills
