import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import {BsStack, DiCss3, DiHtml5, DiJavascript, DiJqueryLogo, DiPhp} from "react-icons/all";
import malapsychkitLogo from "../../Resources/malapsychkitLogo.png";

const ProjectContainer = ({ project }) => (
  <div className='project'>

    <img src={malapsychkitLogo} alt="" className="proj1"/>

    <p className='project__description '>{project.description} <BsStack/></p>
      <ul className='project__stack'>
          <li key={uniqid()} className='project__stack-item'>
              <DiHtml5/>
              <DiCss3/>
              <DiJavascript/>
              <DiJqueryLogo/>
              <DiPhp/>
          </li>
      </ul>

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
