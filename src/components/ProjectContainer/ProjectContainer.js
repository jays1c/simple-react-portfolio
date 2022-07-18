import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import cert1 from '../../Resources/ITsupport.png'
import cert2 from '../../Resources/ITautomation.png'

const ProjectContainer = ({ project }) => (

    <div className='project'>
        <h3>{project.name}</h3>
        <img src={cert1} height={100} width={100} alt=""/>
        {project.skills && (
            <ul className='project__stack'>
                {project.skills.map((item) => (
                    <li key={uniqid()} className='project__stack-item'>
                        {item}
                    </li>
                ))}
            </ul>
        )}

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