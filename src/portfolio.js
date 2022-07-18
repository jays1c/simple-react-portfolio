import JS from './sIcons/javascript.svg'
import react from './sIcons/react.svg'
import jquery from './sIcons/jquery.svg'
import css from './sIcons/css3.svg'
import boot from './sIcons/bootstrap.svg'
import php from './sIcons/php.svg'
import yarn from './sIcons/yarn.svg'
import git from './sIcons/github.svg'



const header = {
  logo: 'https://github.com/jays1c/simple-react-portfolio',
}

const about = {
  name: 'Jay',
  role: 'Front-End Developer',
  description: 'I am passionate Front-End Web Developer having an experience of web applications with Bootstrap, PHP, JavaScript, ReactJS, and Node.js',
  Resume: 'Resume.pdf',
  social: {
    github: 'https://github.com/jays1c',
    facebook: 'https://www.facebook.com/antonisjay',
    instragram: 'https://www.instagram.com/champagnexjay/',
    linkedin: 'https://www.linkedin.com/in/armandoantonis/',
  },
}

const projects = [

  {
    name: 'Google IT Support',
    skills: ['Troubleshooting', 'Computer Networking', 'IT Infrastructure Services'],
    livePreview: "https://www.credly.com/badges/b58eef4c-1a59-4d51-ac23-f4ebc60227f1/linked_in",
  },
  {
    name: 'Google IT Automation',
    skills: ['Python Programming', 'Automation', 'Cloud Networking'],
    livePreview: "https://www.credly.com/badges/34753f93-35fe-4b1a-82b3-7a38d1d0412b/linked_in",
  },
  {
    name: 'AWS Fundamentals',
    skills: ['Cloud Networking', 'AWS Cloud', 'Cloud Storage'],
    livePreview: 'https://www.coursera.org/account/accomplishments/specialization/certificate/DHEGTZ77MNCJ',
  },
]

// const certs = [ [itcert], [itautomation]
// ]

const skills = [
  [JS],[react],[jquery],[css],[boot],[php],[yarn],[git]
]

const contact = {
  email: 'antonisjay@gmail.com',

}

export { header, about, projects, skills, contact, }
