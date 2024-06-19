export const projects = [
  {
    title: "SWE Intership @",
    subtitle: "May 2022 - Aug 2022",
    location: "NYC, USA",
    description:
      "Team: Messenger > Messaging Health Signal > Privacy Approval Monitor(PAM)",
    goal: "Goal: To ensure no messenger feature accesses data from sensitive tables, visualize and identify potential issues before production release",
    image: "./pictures/meta_icon.webp",
    tech: "React, GraphQL, Python",
    tools: ["Mercurial (Version Control)", "VS Code (IDE)"],
    tasks: [
      "Developed a UI tool that detects sensitive database access in code blocks, leveraged by software team leads before code production release.",
      "Developed visual analytic tool to represent data flows within various privacy assets across Meta (e.g., data flow between mailbox API to CQL to databases)",
    ],
    // tasks: [
    //   "Collaborated with Asset Identification team and Privacy Lineage Team to uniquely identify different privacy assets [table, stored procedure (cql), mailbox_api, feature] utilizing the output of several scripts within PAM system. Each asset was formed as a node and connection among nodes were formed as edges, which was finally stored in Privacy Lineage System.",
    //   "Built a UI tool that could help in visualizing any privacy asset and their connections present in Lineage System. With this development, we could visualize data flow among different privacy components - for example, how data flows from a particular mailbox api to stored procedure (cql) and finally to a table. The design of the UI was made generic so that any asset present on the Lineage System can be accessed. Also, Data provider API was made generic to support other teams if their asset data is stored in different tables, not in Privacy Lineage System.",
    //   "Built another UI tool that could be used to get justification from a messenger feature owner if the feature is using a mailbox api in the code that interacts with sensitive table. The data could be filtered based on particular team and the UI will only show latest available data."
    // ],

  },
  {
    title: "Software Engineer @",
    subtitle: "July 2019 - Aug 2021",
    location: "Pune, Maharashtra, India",
    description:
      "Team: Wealth and Personal Banking(WPB) > Global Credit Module(GCM)",
    goal: "Worked as a Full Stack Developer on a product that  primarily addresses Relationship Managers, but some features were also customer-centric.",
    image: "./pictures/HSBC-sym.png",
    tech: "JAVA, DB2, Batch",
    tools: ["Github (Version Control)", "Jenkins (Deployment)", "G3 (Deployment)", "JIRA (Track Work in Agile SDLC)"],
    tasks: [
      "Automatic email notification features during credit limit approval, rejection.",
      "SMS notification feature to notify customers about their credit margin status.",
      "Calculation changes related to assigning rates to customer portfolio.",
      "System basket(rules) assignment to the securities received from Bloomberg in the Batch process.",
      "Jasper Reports."
    ],

  },
];

export const research = [
  {
    title: "Security and Privacy of XR systems",
    project_name: "PurSec Lab",
    project_doc: "https://pursec.cs.purdue.edu/",
    subtitle: "Spring 2022 - Current",
    location1: "Purdue University",
    location2: "",
    location1_url: "https://www.cs.purdue.edu/",
    location_url2: "",
    description:
      "Group pairing for mixed reality headsets, Dark patterns in XR\n",
    goal: "",
    images: [],
    tech: "Javascript, HTML C#, Python,",
    tools: ["Aframe, Unity, OpenPose, GitHub (Version Control)"],
    github_link: "",
    tasks: [
      "Designing a secure group pairing protocol for mixed reality headsets (e.g. - HoloLens2) by leveraging multi-modal sensors within an open-shared environment. Implemented immersive mixed-reality applications to accumulate data from sensors such as hand, eye, head, and motion sensors during pairing. Implemented GazeLoc localizer using eye and hand-tracking data to precisely localize a participant during pairing.\n",
      "Exploring effects of dark patterns in XR systems."
    ],

  },
  {
    title: "Research Engineer @",
    project_name: "ITRA Project",
    project_doc: "./pdfs/mcnrg.pdf",
    subtitle: "April 2018 - December 2018",
    location1: "MCNRG, NIT Durgapur ",
    location2: "Kalyani Government Engineering College",
    location1_url: "https://www.facebook.com/mcnreg",
    location_url2: "https://kgec.edu.in/index",
    description:
      "Post Disaster Situation Analysis and Resource Management Using Delay-Tolerant Peer-to-Peer Wireless Networks.",
    goal: "Goal: To visualize the summary of GIS data shared by victims and volunteers in a disaster-stricken area in offline mode.",
    images: ["./pictures/surakshit_1.png", "./pictures/surakshit_2.png"],
    tech: "JAVA, Python, Javascript, MongoDB",
    tools: ["GitHub (Version Control)"],
    tasks: [
      "Developed a system that continuously parses the data obtained from users (using offline syncing, not using internet), which are eventually stored in the database. Using these data, built \"Surakshit Dashboard\" that provides a periodic summary of gathered information (polygon, text, image, video). The summarized data in dashboard will help the rescue team with appropriate information to help the victims after disaster"
    ],
    github_link: "https://github.com/chandms/GIS_summarization",

  },

  {
    title: "Research Intern @",
    project_name: "CNeRG",
    project_doc: "./pdfs/cnerg.pdf",
    subtitle: "May 2018 - June 2018",
    location1: "CNeRG, IIT Kharagpur ",
    location2: "",
    location1_url: "https://cnerg-iitkgp.github.io/",
    location_url2: "",
    description:
      "Peer-to-Peer Live Video Streaming based on Scalable Video Coding - Pre-encoded videos can not adapt to channels that support different bit rates or clients that support various display capacities. During live video streaming bandwidth, delay, loss of packet may vary.",
    goal: "Goal: The primary objective was to achieve the video of optimum quality on the client side according to the network conditions and also to reduce the load on the server.",
    images: [],
    tech: "JAVA, Python",
    tools: ["GitHub (Version Control)"],
    github_link: "https://github.com/chandms/cnergWork",
    tasks: [
      "I developed a system, which could encode .mp4 files to .svc , transfer those files using BitTorrent like communication between server and client and decode back to .mp4 files."
    ],

  },
 
];

export const publications = [
  {
    title: "On designing a fast-deployable 'localized' GIS platform for using 'offline' during post-disaster situation",
    authors: "Partha Sarathi Paul, Chandrika Mukherjee, Bishakh Chandra Ghosh, Sudipta Pandit, Sujoy Saha, Subrata Nandi",
    link: "https://dl.acm.org/doi/10.1145/3288599.3295592",
  },
];

export const education = [
  {
    school: "Purdue University",
    location: "WestLafayette, Indiana, USA",
    date: "Fall 2023 - Present",
    degree: "Doctor of Philosophy (Ph.D.)",
    major: "Computer Science",
    CGPA: "CGPA: 3.95 / 4.00",


  },
  {
    school: "Purdue University",
    location: "WestLafayette, Indiana, USA",
    date: "2021-2023",
    degree: "Master of Science (M.S.)",
    major: "Computer Science",
    CGPA: "CGPA: 3.83 / 4.00",


  },
  {
    school: "National Institute of Technology, Durgapur",
    location: "Durgapur, West Bengal, India",
    date: "2015 - 2019",
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science and Engineering",
    CGPA: "CGPA: 9.16 / 10.00",


  },
  {
    school: "Serampore Girls' High School",
    location: "Serampore, West Bengal, India",
    date: "2013 - 2015",
    degree: "Higher Secondary",
    major: "Science",
    CGPA: "94.4% [20th in West Bengal]",


  },

  {
    school: "Serampore Girls' High School",
    location: "Serampore, West Bengal, India",
    date: "2013",
    degree: "Secondary",
    major: "",
    CGPA: "88.71%",


  },
];

export const skills = [
  "C++",
  "C",
  "Python",
  "Java",
  "C#",
  "React",
  "GraphQL",
  "Unity3D",
  "A-Frame",
  "HTML",
  "JavaScript",
  "CSS",
  "MongoDB",
  "DB2",
  "SQL",
  "Git",
  "Mercurial",
  "LaTex",


];

export const interests =[
  "Other than my research work, I try to spend good amount of time in enhancing my problem solving skills.",
  "I started reading English Novels - J.K Rowling's Harry Potter is my all-time favorite, also to mention some of my other favorite novels - Khaled Hosseini's Kite Runner, A Thousand Splendid Suns, Amish Tripathi's Shiva Trilogy.",
  "I was the Dance Wing Head of SPICMACAY at NIT Durgapur (April 2018 - March 2019). Making new dance videos gives me immense pleasure. Also, I am a huge fan of TV series - especially The Big Bang Theory, Friends, and Brooklyn Nine-Nine."
]

export const teaching = [
  {
    role: "Graduate Teaching Assistant at EPICS and VIP in Purdue",
    desc: ['GTA for 4 undergraduate teams working with different community partners to deliver engineering products by employing design process'],
    sems : 'Fall 2022 & Spring 2023 & Fall 2023'
  },
  {
    role: "Graduate Teaching Assistant at First Year Engineering in Purdue",
    desc: ["Course prep and in-person teaching for ENGR 133 Summer Prep - Introduction to Excel, Python, MATLAB"],
    sems : 'Summer 2023'
  }
]

