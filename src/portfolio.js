/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vishnuraj Saravanan",
  title: "Hi all, I'm Vishnu",
  subTitle: emoji(
    "A passionate Python developer 🐍 specialized in advanced machine learning, AI, and data analytics, adept at crafting innovative solutions to complex business problems"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vishnurajsaravanan",
  linkedin: "https://www.linkedin.com/in/vishnuraj-saravanan/",
  gmail: "vishnurajs.personal@gmail.com",
  gitlab: "https://gitlab.com/vishnurajsaravanan",
  facebook: "https://www.facebook.com/vishnurajsaravanan",
  medium: "https://medium.com/@vishnurajsaravanan",
  stackoverflow: "https://stackoverflow.com/users/18034146/vishnuraj-saravanan",
  instagram: "https://www.instagram.com/_sarav_iku.zo",
  twitter: "https://twitter.com/VishnurajSarav2",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fa fa-cloud"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SNS College of Engineering",
      logo: require("./assets/images/snslogo.png"),
      subHeader: "Bachelor of Technology in Artificial Intelligence and Data Science",
      duration: "Nov 2020 - May 2024",
      desc: "SNS Kalvi Nagar, Sathy Main Road, Kurumbapalayam, PO, Coimbatore, Tamil Nadu 641107",
      descBullets: [
        "Lead - Google Developer Students Club (2023-2024)",
        "SNS Merit Scholarship Student",
        "Event Organiser of Googleathon 2.0 - 24 Hours Generative AI Hackathon (2023)",
        "Research Paper (TIJER2404178)- Revolutionizing the User Experience through AI powered Search and Retrieval System",
        "Research Paper (GRJ/3220) - Survey on Efficienct and working principle of Prolog using Design Thinking",
      ]
    },
    {
      schoolName: "Shri Nehru Vidyalaya Matriculation Higher Secondary School",
      logo: require("./assets/images/snvlogo.png"),
      subHeader: "Higher Secondary School",
      duration: "Jun 2018 - May 2020",
      desc: "26, Tibrewal Nagar, Robertson Road, R.S. Puram, Coimbatore – 641 002, Tamil Nadu, India.",
      descBullets: [
        "School Topper - 10th Standard (2018)", 
        "School Topper in Mathematics - 12th Standard (2020)",
        "School Topper in Physics - 12th Standard (2020)",
        "Proud NSS Volunteer",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science Intern",
      company: "Gravity AI",
      companylogo: require("./assets/images/gravityailogo.jpeg"),
      date: "Feb 2024 – Mar 2024",
      desc: "KCT Tech Park, Coimbatore, Tamil Nadu 641035, IN",
      descBullets: [
        "Focused on acquiring and cleaning data from US colleges using web scraping techniques and Python libraries like Pandas and NumPy.",
        "Also specialized in visualizing insights using Matplotlib, Seaborn, Plotly, and Tableau, contributing to impactful data-driven analyses and solutions."
      ]
    },
    {
      role: "Data Analytics Consulting",
      company: "KPMG AU",
      companylogo: require("./assets/images/kpmglogo.png"),
      date: "Jun 2023 – Jul 2023",
      desc: "Work from home",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Python Developer",
      company: "VDiSTiE Technolgies",
      companylogo: require("./assets/images/vdistielogo.jpeg"),
      date: "Jul 2022 – Aug 2022",
      desc: "Work from home",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "GoZen Technologies",
      companylogo: require("./assets/images/gozenlogo.png"),
      date: "May 2017 – May 2018",
      desc: "Nava India Rd, near Radisson Blu, Coimbatore, Tamil Nadu 641004",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "My projects showcase my skills and experience in the field of AI, Data Science, and Python Programming.",
  projects: [
    {
      image: require("./assets/images/swiftsearchlogo.jpg"),
      projectName: "Swift Search",
      projectDesc: "Revolutionizing user experience with AI-powered search and retrieval system tailored for effortless exploration of product snapshots",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://thozhartensor.github.io/Swift-Search/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/fakelinkdetection.webp"),
      projectName: "Fake Link Detection",
      projectDesc: "Detecting fake, malicious web links using machine learning and phishtank database",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/vishnurajsaravanan/FakeLink-Detection"
        }
      ]
    },
    {
      image: require("./assets/images/rainpredictionlogo.jpeg"),
      projectName: "Real Time Rainfall Prediction",
      projectDesc: "Using Random forest regression predicting rainfall for the districts in Theni",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/vishnurajsaravanan/FakeLink-Detection"
        }
      ]
    },
    {
      image: require("./assets/images/croppriceprediction.jpeg"),
      projectName: "Crop Price Prediction",
      projectDesc: "A web app predicting crop yield based on Random Forest ML model trained on 20+ years of Maharashtra data with live weather integration, achieving 86% accuracy.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/vishnurajsaravanan/Crop-Price-Prediction"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9003837297",
  email_address: "vishnurajs.personal@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "VishnurajSarav2", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
