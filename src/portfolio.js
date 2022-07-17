const header = {
  // all the properties are optional - can be left empty or deleted
  logo: 'https://github.com/jays1c/simple-react-portfolio',
  title: 'AA.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jay',
  role: 'Front End Engineer',
  description: 'An energetic and imaginative young web developer who is able to work alongside other talented IT professionals in creating websites to the very highest standards. Jay has a high awareness of industry issues and trends, particularly in regard to accessibility, usability, emerging technologies, and open source CMS. He is an ambitious type who wants to get noticed, and has the drive and massive energy needed to really make a difference to a project. Right now he is looking for an entry level position with an exciting company that wants to attract talented people.',
  Resume: 'https://example.com',
  social: {
    facebook: 'https://www.facebook.com/',
    linkedin: 'https://www.linkedin.com/in/armandoantonis/',
    github: 'https://github.com/jays1c',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
