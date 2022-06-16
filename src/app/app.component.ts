import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  resumeData: any;

  constructor(){

  }

  ngOnInit() {
    this.resumeData = this.avantikaData;
    this.priyaData = null;
  }

  sachinData: any = {
    theme: '#088F8F',
    profilePic: 'assets/sachin.jpg',
    name: 'Sachin Singh',
    designation: 'Senior Software Engineer',
    summary: '4+ years of experience as a Full Stack Developer',
    email: 'sachinx1000@gmail.com',
    phone: '8962917734',
    address: '482, Omaxe Hills, Indore, India',
    dob: '07 July, 1995',
    workExperiences: [
      {
        designation: 'Senior Software Engineer',
        company: 'InfoBeans Technologies LTD.',
        duration: '04/2022 - Present',
        achievementsOrTasks: [
          'Full Stack Development using VueJS + NodeJS + MongoDB + ExpressJS stack and functional unit testing',
          'Client Communication',
          'Efforts Estimation',
          'Acting lead for UI team of 4'
        ]
      },
      {
        designation: 'Software Engineer',
        company: 'InfoBeans Technologies LTD.',
        duration: '10/2020 - 03/2022',
        achievementsOrTasks: [
          'Full Stack Development using VueJS + NodeJS + MongoDB + ExpressJS stack and functional unit testing',
          'Client Communication',
          'Efforts Estimation',
          'Acting lead for UI team of 4'
        ]
      },
      {
        designation: 'Associate Software Engineer',
        company: 'InfoBeans Technologies LTD.',
        duration: '07/2019 - 09/2020',
        achievementsOrTasks: [
          'Full Stack Development using Angular + Spring Boot + MySQL stack and functional unit testing',
          'Front End Development using ReactJS',
          'Client Communication',
          'Efforts Estimation',
          'Acting lead for UI team of 5'
        ]
      },
      {
        designation: 'Trainee Software Engineer',
        company: 'InfoBeans Technologies LTD.',
        duration: '07/2018 - 06/2019',
        achievementsOrTasks: [
          'Front End Development using Angular',
          'Client Communication',
          'Functional Unit Testing'
        ]
      }
    ],
    educations: [
      {
        course:'M.Tech(Integrated)',
        schoolOrCollege: 'International Institute of Professional Studies, DAVV, Indore',
        duration: '07/2013 - 12/2018',
        score: '8.64'
      },
      {
        course:'XII Standard',
        schoolOrCollege: 'Kendriya Vidhyalaya, MHOW',
        duration: '04/2011 - 03/2012',
        score: '84.4%'
      },
      {
        course:'X Standard',
        schoolOrCollege: 'Kendriya Vidhyalaya, MHOW',
        duration: '04/2009 - 03/2010',
        score: '8.8'
      }
    ],
    skills: ['HTML','CSS','JavaScript','Angular','ReactJS','VueJS','NodeJS','MongoDB','ExpressJS','BootStrap','Front End Development','Full Stack Development','Communication','Team Work','JAVA','Spring Boot','MySQL','Effort Estimation','TypeScript','Leadership'],
    projects: [
      {
        name: 'Vehicle Commerce',
        duration: '12/2020 - Present',
        description: 'An E-commerce web application to buy and sell used cars',
        teamSize: '19',
        role: 'Full stack Developer (VueJS, NodeJS, MongoDB, ExpressJS)',
        responsibilities: [
          'UI team lead',
          'Client Communication',
          'Full Stack Development',
          'Efforts Estimation',
          'Unit testing'
        ]
      },
      {
        name: 'Claim Settlement Portal',
        duration: '12/2019 - 12/2020',
        description: 'A web portal to provide online services to insurers, Healthcare, Providers and Employers',
        teamSize: '5',
        role: 'Front End Developer (Angular 9)',
        responsibilities: [
          'Team lead',
          'Client Communication',
          'Front End Development',
          'Efforts Estimation',
          'Unit testing'
        ]
      },
      {
        name: 'Providers Onboarding Portal',
        duration: '06/2020 - 09/2020',
        description: 'A web application used to onboard the new providers',
        teamSize: '4',
        role: 'Front End Developer (Angular 9)',
        responsibilities: [
          'Team lead',
          'Client Communication',
          'Front End Development',
          'Efforts Estimation',
          'Unit testing'
        ]
      },
      {
        name: 'Exit Portal',
        duration: '03/2020 - 05/2020',
        description: 'A web application to automate the exit process of an employee in an organization',
        teamSize: '7',
        role: 'Front End Developer (ReactJS)',
        responsibilities: [
          'Team lead',
          'Client Communication',
          'Front End Development',
          'Efforts Estimation',
          'Unit testing'
        ]
      },
      {
        name: 'Dynamic Reward Offering Application',
        duration: '05/2019 - 12/2019',
        description: 'A web application with admin support used to track transactions and provide dynamic rewards and offers',
        teamSize: '13',
        role: 'Full Stack Developer (Angular, Spring Boot, MySQL)',
        responsibilities: [
          'Client Communication',
          'Full Stack Development',
          'Efforts Estimation',
          'Unit testing'
        ]
      },
      {
        name: 'Storage Automation Tool',
        duration: '07/2018 - 04/2019',
        description: 'A software solution that helps to automate storage management tasks such as provisioning, migration and cloning storage',
        teamSize: '11',
        role: 'Front End Developer (Angular 4)',
        responsibilities: [
          'Client Communication',
          'Front End Development',
          'Efforts Estimation',
          'Unit testing'
        ]
      }
    ],
    languages: ['English','Hindi'],
    interests: ['Outoor Games','Drawing','Workout', 'Yoga', 'Running', 'Travelling', 'Food']
  }

  avantikaData: any = {
    theme: '#088F8F',
    profilePic: 'assets/avantika.jpg',
    name: 'Avantika Vyas',
    designation: 'Business Analyst',
    summary: 'With 4+ years of experience of working in Service and FinTech domains with SAFe-Scaled Agile Scrum model with the ability to work independently and manage business expectations within a delivery-focused approach with a team of 10+ cross-functional resources.',
    email: 'avantika.vyas21@gmail.com',
    phone: '8602699810',
    address: 'Indore',
    dob: '01 Jan, 1996',
    workExperiences: [
      {
        designation: 'Business Analyst',
        company: 'InfoBeans Technologies LTD.',
        duration: '10/2021 - Present',
        achievementsOrTasks: [
          'Responsible for gathering, validating and documenting business requirements​ while working for a US client for development of a system on Salesforce for better management of tasks at their end.',
          'Worked with UI/UX team in close alignment to determine flow and ensure excellent customer experience.',
          'Responsible for Effective stakeholder engagement.',
          'Documented the initiatives and prepared a complete product roadmap for an ambitious project for client from US.',
          'Demonstrated Decision making ability to make decisions around things such as requirement prioritisation, scope, assessing viability of solutions etc.',
        ]
      },
      {
        designation: 'Product Analyst',
        company: 'Worldpay from FIS',
        duration: '07/2020 - 10/2021',
        achievementsOrTasks: [
          'Requirement elicitation and successful end to end integration of one of prominent portal of organization.',
          'With above mentioned project was able to grab opportunity (My team was chosen from 10 other teams) for integration of whole another product within organization.',
          'Elicitation of Business functional requirements from stakeholders and capturing of NFRs into Product Backlog by continuously refining and prioritizing it, along with Product Management team for scrum team to work on.',
          'Worked with Network, CI and Sales teams to ensure excellent customer experience and services post product launching',
          'Extensive Agile and Scrum experience.',
          'Ability to learn and adapt to complex situations, demonstrated with the success of several products and projects',
        ]
      },
      {
        designation: 'Product Owner',
        company: 'Worldpay',
        duration: '11/2018 - 06/2020',
        achievementsOrTasks: [
          'Provided technical insight for product teams to drive decision making.',
          'Worked with quality assurance, product managers and manufacturing to ensure timely delivery of the project is achieved.',
          'Working with 11 Agile teams focused on continuous end to end epic/software delivery and deployment enabled by micro-services architecture. Also ensuring the release quality with the UAT.',
          'Ability to build and maintain strong working relationships with senior and junior business sponsors, as well as technical specialists in-depth knowledge of System Development Life Cycle(SDLC) methodologies like Agile, Rational Unified Process, Waterfall.',
          'Able to work and communicate effectively with stakeholders of diverse backgrounds and cultures.',
          'Effective interpersonal and communication skills, both verbal and written.',
          'Competent Microsoft Office skills, particularly with Word, Excel and PowerPoint.'
        ]
      },
      {
        designation: 'Software Developer Trainee',
        company: 'Worldpay',
        duration: '08/2018 - 11/2028',
        achievementsOrTasks: [
          'Responsible for high level design, development and unit testing of epics and it\'s enhancements.',
          'Ensured Production and customer issues are fixed within the time of warranty support.',
          'Responsible for end-to-end deployment of solutions on servers and post-production testing.'
        ]
      }
    ],
    educations: [
      {
        course:'M.Tech(Integrated)',
        schoolOrCollege: 'International Institute of Professional Studies, DAVV, Indore',
        duration: '07/2013 - 12/2018',
        score: '8.64'
      },
      {
        course:'XII Standard',
        schoolOrCollege: 'Marthoma Higher Secondary School, Indore',
        duration: '04/2012 - 03/2013',
        score: '82%'
      },
      {
        course:'X Standard',
        schoolOrCollege: 'Sarada Ram Krishna Vidhya Mandir',
        duration: '04/2010 - 03/2011',
        score: '88%'
      }
    ],
    skills: [
      'Product Backlog Creation & Refinement',
      'UI/UX',
      'Stakeholder Communication & Management',
      'Payment Processing',
      'FinTech',
      'PCI - DSS',
      'Product Ownership',
      'Epic & Feature Creation',
      'Product Roadmap Creation',
      'Requirements Gathering',
      'User Story Creation',
      'JIRA',
      'Agile Methodologies',
      'Product Management',
      'Software Development Life Cycle (SDLC)',
      'Confluence',
      'Rally',
      'Leadership Skills',
      'Excellent Communication Skills'
    ],
    projects: [
      {
        name: 'Personal Management System',
        duration: '11/2021 - Present',
        description: 'Development of system for personnel and processes management for a non -profit organization in US',
        teamSize: '22',
        role: 'Business Analyst',
        responsibilities: [
          'Gathering, validating and documenting business requirements​.',
          'Creating and managing backlog of requirements in the form of user stories.',
          'Identifying issues, risks and benefits of existing and proposed solutions and outlining business impacts.',
          'Creating functional specifications for solutions​.'
        ]
      },
      {
        name: 'Transaction Listing Portal',
        duration: '02/2020 - 10/2021',
        description: 'Development of one of the prominent product of the organisation - The portal used for transaction listing',
        teamSize: '12',
        role: 'Product Analyst',
        responsibilities: [
          'Coordinated with various teams such as - Network Team, UAT Team, UI Team, etc. situated of globally diverse situations.'
        ]
      },
      {
        name: 'Integration of multi factor authentication with product',
        duration: '04/2020 - 12/2020',
        description: 'Integration of MFA (Multi Factor Authentication) with our portal and services for SCA (Strong Customer Authentication)',
        teamSize: '10',
        role: 'Product Analyst',
        responsibilities: [
          'Coordinated with variety of verticals and horizontals to get SCA implemented with the services and portals we offer to the customers using MFA.'
        ]
      },
      {
        name: 'Cloud migration of accounting files',
        duration: '01/2021 - 07/2021',
        description: 'Supported Cloud Migration of Accounting files through our Billing Portal',
        teamSize: '12',
        role: 'Product Analyst',
        responsibilities: [
          'Worked with Oracle cloud team (external) and FIS Accounting team (From other product) to implement desired changes in files to make them cloud ready for the migration.'
        ]
      },
      {
        name: 'Aquirer Integration for US payment processing',
        duration: '01/2019 - 07/2020',
        description: 'Delivered server side solution for integrating overall solution with one of the leading acquirers for US payment processing',
        teamSize: '8',
        role: 'Product Owner',
        responsibilities: [
          'Managed the feature development and defect backlog on a daily basis to ensure that priorities adhere to the strategic direction outlined by the [Product Manager'
        ]
      }
    ],
    languages: ['English','Hindi'],
    interests: ['Cooking', 'Yoga', 'Travelling', 'Food'],
    domain: ['PAYMENT','SALESFORCE']
  }

  priyaData: any = {
    theme: '#088F8F',
    profilePic: 'assets/priya.jpg',
    name: 'Priya Singh',
    designation: 'Business Development Executive',
    summary: '3+ years of experience',
    email: 'priyaljoe@gmail.com ',
    phone: '9340136541',
    address: 'Indore',
    dob: '11 Oct, 1997',
    workExperiences: [
      {
        designation: 'Business Development Executive',
        company: 'Vishesh Jupiter Hospital',
        duration: 'May, 2022 - Present',
        achievementsOrTasks: []
      },
      {
        designation: 'Business Development Executive',
        company: 'Dr. Agrawal Eye Hospital, Indore',
        duration: 'Dec, 2021 - Apr, 2022',
        achievementsOrTasks: []
      },
      {
        designation: 'Assistant in Business Development',
        company: 'Shalby Multispecialty Hospital, ',
        duration: 'Jan, 2020 - Nov, 2021',
        achievementsOrTasks: []
      }
    ],
    educations: [
      {
        course:'M.B.A.(Hospital Administration)',
        schoolOrCollege: 'Institute of Management Studies, DAVV, Indore',
        duration: '07/2018 - 05/2020',
        score: '8.22 CGPA',
        achievementsOrTasks: [
          'Was a Delegate in the event Health Conclave held on September 21, 2019.',
          'Participated in 2nd National Level NABH Workshop on “NABH Accreditation Improving Quality and Patient Care” held at Sri Aurobindo Institute of Management & Science, Indore'
        ]
      },
      {
        course:'B.B.A.(Hospital Administration)',
        schoolOrCollege: 'Institute of Management Studies, DAVV, Indore',
        duration: '07/2015 - 05/2018',
        score: '76.5%',
        achievementsOrTasks: [
          'Was a Delegate in the event Health Conclave held on March 27, 2017.',
          'Participated in seminar on “Value Based Management Education”'
        ]
      },
      {
        course:'XII Standard(CBSE)',
        schoolOrCollege: 'St Mary’s H.S. School, MHOW',
        duration: '04/2014 - 03/2015',
        score: '76.6%',
        achievementsOrTasks: [
          'Scored 13th Rank in the School in NOF’s International Biology Olympiad in 2015.',
          'Secured first position in the United Carol Singing competition organized by ICYM.'
        ]
      },
      {
        course:'X Standard(CBSE)',
        schoolOrCollege: 'St Mary’s H.S. School, MHOW',
        duration: '04/2012 - 03/2013',
        score: '7.6 CGPA',
        achievementsOrTasks: [
          'Won First prize in Shot-put Competition held in St. Mary’s H.S. School.',
          'Won First prize in 200m race Competition held in St. Mary’s H.S. School.'
        ]
      }
    ],
    skills: [
      'Business Development',
      'Human Resource',
      'Academic Counseling',
      'Coordinating Hospital Visits of Institute',
      'Reviewing Contract',
      'Maintaining Revenue Record',
      'Giving Hospital Orientation to Institutes',
      'Generating Lead',
      'Fostering B2B relationships',
      'Facility Rounds',
      'Assisted in completing joining formalities of Medical and non-medical staff',
      'Assisted monthly induction program',
      'Interview calls to candidates',
      'Volunteered employee engagement activities'
    ],
    projects: [
      {
        name: 'Bombay Hospital, Indore',
        duration: '13/05/19 - 30/6/19',
        description: 'Audit of Turn Around Time in Operation Theatre'
      },
      {
        name: 'Bombay Hospital, Indore',
        duration: '13/05/19 - 30/6/19',
        description: 'Study of NABH Quality Indicator (Mortality Rate) in ICU’s'
      },
      {
        name: 'Sri Aurobindo Institute of Medical Sciences',
        duration: '27/05/17 - 10/07/17',
        description: 'General Administration in Hospital'
      },
      {
        name: 'Sri Aurobindo Institute of Medical Sciences',
        duration: '27/05/17 - 10/07/17',
        description: 'Turn Around Time in Pathology'
      },
      {
        name: 'Holamed Healthcare Technologies PVT. LTD.',
        duration: 'July, 2015 - August, 2015',
        description: 'Marketing and Publicity'
      }
    ],
    languages: ['English','Hindi'],
    interests: ['Cooking', 'Yoga', 'Travelling', 'Food']
  }

}
