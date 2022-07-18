import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import {Facebook, Instagram} from "@material-ui/icons";
import { Typewriter } from 'typewriting-react';
import { about } from '../../portfolio'
import '../../Resources/Resume.pdf'
import './About.css'



const About = () => {
  const { name, role, description, Resume, social } = about

  return (
    <div className='about center'>
      {name && (
          <h1>
              <Typewriter words={[' Hi, I am Armando!']}
                          nextWordDelay={1000000000}
                          typingSpeed={120}
                          erasingSpeed={120}
              />

          </h1>
      )}

      {role && <h2 className='about__role about__name'>{role}
          <span className="laptop" role="img" aria-labelledby="laptop"> 💻</span>
      </h2>}

      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
              {Resume && (
                  <a href={Resume} download="Resume.pdf">
                      <button type='submit' className='btn btn--outline'>
                          Resume
                      </button>
                  </a>
              )}


        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

              {social.facebook && (
                  <a
                      href={social.facebook}
                      aria-label='facebook'
                      className='link link--icon'
                  >
                      <Facebook />
                  </a>
              )}

              {social.instragram && (
                  <a
                      href={social.instragram}
                      aria-label='instagram'
                      className='link link--icon'
                  >
                      <Instagram />
                  </a>
              )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
