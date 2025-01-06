import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/js.png";
import reactImage from "../assests/react.png";
import rxjs from "../assests/rxjs.png";
import redux from "../assests/redux.png";
import mf from "../assests/mf.png";
import api from "../assests/api.png";
import git from "../assests/github.png";
import eCommerce from "../assests/eCommerce.png";
import jpmc from "../assests/jpMorgan.png";
import lwc from "../assests/lwc.png";

export const Bio = {
  name: "Srinivas",
  roles: [
    "Frontend Developer",
    "React Developer",
  ],
  description:
    `Frontend developer with 3+ years of hands-on experience in designing and implementing scalable web applications. Proficient
    in utilizing a diverse tech stack including JavaScript, Redux and React.js to deliver robust solutions. Skilled in micro frontends
    architecture, ensuring modular and maintainable codebases. Proven ability to collaborate effectively in cross-functional
    teams to meet project goals and deadlines. Known for delivering high-quality solutions. Strong problem-solving abilities and
    passionate about continuously learning and implementing best practices in software development to deliver exceptional
    user experiences`,
  github: "https://github.com/rishavchanda",
  resume:
    "https://drive.google.com/file/d/1txFKZD3LNIXMc329jD9c995AU8LItOXK/view?usp=drive_link",
  linkedin: 'https://www.linkedin.com/in/tharugusrinivasulu',
  git: "https://github.com/srinivas9109/srinivas/tree/projects/portfolio",
  insta: 'https://www.instagram.com/tsr_vicky/',
  facebook: "https://www.snapchat.com/add/srinivasvicky21?share_id=ujDDZ3wYvxU&locale=en-GB"
};

export const techs = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactImage,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: rxjs,
    title: "RxJS",
    style: "shadow-pink-600",
  },
  {
    id: 6,
    src: redux,
    title: "Redux",
    style: "shadow-violet-600",
  },
  {
    id: 7,
    src: mf,
    title: "Micro Frontend",
    style: "shadow-green-600",
  },
  {
    id: 8,
    src: api,
    title: "RESTFul api's",
    style: "shadow-blue-600",
  },
  {
    id: 9,
    src: git,
    title: "GitHub",
    style: "shadow-violet-600",
  },
  {
    id: 10,
    src: lwc,
    title: "LWC",
    style: "shadow-blue-600",
  }
];

export const projects = [

  {
    id: 1,
    src: eCommerce,
    name: "Livestock",
    company: "Cognizant",
    client: ' Internal Project',
    duration: "Mar 2022 - Aug 20223",
    category: "eCommerce",
    tech: ['HTML', 'JavaScript', 'CSS', 'React Js', 'Redux', 'Node.js', 'Express JS', 'Postman', 'Bootstrap', 'MongoDB', 'Git'],
    description: `Our platform connects farmers, breeders, and buyers in the livestock industry. Browse and purchase a wide
      range of livestock, including cattle, poultry, goats, and more. Explore detailed listings and view health records. Whether you
      are a farmer seeking quality animals or a buyer looking to invest, livestock platform simplifies the process.`,
    responsibilities: [
      `Implemented responsive and user friendly React components, ensuring high-quality code and optimal performance.`,
      `Designed and implemented server-side logic using Node.js and Express.js, ensuring efficient and scalable code.`,
      `Created and managed RESTful APIs to enable seamless communication between the client and server.`,
      `Designed, developed and optimized MongoDB database, including schema design and indexing.`,
      `Implemented data models and performed CRUD operations to manage application data effectively.`,
      `Utilized Debugging tools and technologies to identify and resolve issues in both development and production environments.`,
      `Conducted code reviews, identified and fixed bugs, and optimized application performance.`,
      `Implemented continuous integration and development (CI/CD) practices to enhance development workflow and productivity.`,
      `Provided clear and concise technical documentation to facilitate knowledge sharing.`
    ]
  },
  {
    id: 2,
    src: jpmc,
    name: "JPMC AWM NA - PB AMS CASII",
    company: "Cognizant",
    client: ' JPMorgan Chase',
    duration: "Oct 2022 - Dec 2023",
    category: "Banking",
    tech: ['HTML', 'JavaScript', 'CSS', 'React Js', 'Redux', 'RxJS', 'RESTful APIs', 'Git', 'Connect', 'Jira'],
    description: ` The JP Morgan Chase banking project is a comprehensive financial platform that provides a wide range of
    services to customers. It includes features such as online account management, fund transfers, bill payments, investment
    tracking`,
    responsibilities: [
      `Designed and implemented a new high - visibility responsive user interface screen, enhancing the project’s usability and visual
appeal.`,
      `Enhanced existing project functionality by integrating and deploying new features, aligning with project goals and client
requirements.`,
      `Identified, tracked, and resolved bugs to ensure the application’s stability and performance.`,
      `Integrated APIs to facilitate seamless data exchange and improve application functionality.`,
      `Refactored and optimized code to improve application performance and maintainability.`,
      `Utilized Splunk for real - time monitoring and debugging of production incidents, ensuring rapid issue resolution and system
stability.`,
      `Maintained repository hygiene by monitoring and removing redundant branches, optimizing the workflow efficiency and
storage utilization.`,
      `Created comprehensive technical documentation to support ongoing maintenance and future development.`,
      `Efficiently updated Jira tickets and completed tasks to ensure sprint objectives were met promptly and accurately.`
    ]
  },
  {
    id: 3,
    src: jpmc,
    name: "JPMC AWM NA - PAM Core App",
    company: "Cognizant",
    client: ' JPMorgan Chase',
    duration: "Jan 2024 - Present",
    category: "Banking",
    tech: ['HTML', 'JavaScript', 'CSS', 'React Js', 'Angular Js', 'RxJS', 'Micro Frontend', 'API', 'Git', 'Connect', 'Jira', 'Splunk'],
    description: ` The JP Morgan Chase banking project is a comprehensive financial platform that provides a wide range of
    services to customers. It includes features such as online account management, fund transfers, bill payments, investment
    tracking`,
    responsibilities: [
      `Designed and implemented new user interfaces to enhance user experience and accessibility.`,
      `Integrated new features to enhance application capabilities, driven by business requirements and user feedback.`,
      `Integrated APIs to facilitate seamless data exchange and improve application functionality.`,
      `Worked on Angular to React migration, ensuring a seamless transition of core functionalities and improved user experience.`,
      `Followed incremental approach of integrating React components inside Angular using micro frontend (during Angular to
React migration) to reduce overall migration time.`,
      `Refactored and optimized code to enhance application performance, reducing load times and boosting efficiency.`,
      `Analyzed and resolved production issues to maintain application stability and ensure a seamless user experience.`,
      `Utilized Splunk for real-time monitoring and debugging of production incidents, ensuring rapid issue resolution and system
stability.`,
      `Conducted code reviews and provided mentorship to freshers, fostering a collaborative and knowledge sharing environment.`,
      `Practiced in Agile ceremonies, such as sprint planning and retrospectives, to ensure smooth project progress.`
    ]
  },

];


