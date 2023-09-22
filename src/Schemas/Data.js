export const Data = {
  profile: {
    name: "Jakub Hajto",
    ocupation: "Elixir Software Engineer / Tech Lead",
    location: "Kraków, Poland",
    email: "hajtosek@gmail.com",
    telephone: "+48 511 725 970",
    image: "images/avatar.jpeg",
  },
  aboutMe: {
    label: "Profile",
    description:
      `I have a rich and diverse programming background spanning since 2014. Over the years, I have worked with a plethora of programming languages and technologies, including JavaScript (JS), TypeScript (TS), CoffeeScript, Scala, Java, C, C++, C#, Swift, Erlang, and Elixir. In addition to my technical expertise, I have taken on leadership roles, conducting workshops on React Native and Elixir, sharing knowledge, and fostering skill development within the teams I've worked with. My passion for staying at the forefront of emerging technologies and my commitment to continuous learning have been instrumental in my ability to adapt and excel in the ever-evolving field of software development.`
  },
  skills: {
    technicalLabel: "Skills",
    softLabel: "Skills",
    technicalSkills: [
      "Software Architecture Design",
      "Elixir",
      "Scala",
      "React",
      "React Native",
      "NodeJS",
      "SQL",
      "Git",
    ],

  },
  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "Linkedin",
        name: "linkedin",
        url: "https://www.linkedin.com/in/hajto",
        className: "bxl-linkedin-square",
      },
      {
        label: "Github",
        name: "github",
        url: "https://github.com/hajto",
        className: "bxl-github",
      }
    ],
  },
  experience: {
    works: [
      {
        title: "Elixir Software Engineer",
        period: "Jan 2022 - Sep 2023",
        company: "Hawku",
        description: [
          "Designed and spearheaded the implementation of a highly efficient transaction system, ensuring seamless and secure data handling.",
          "Engineered a data ingestion system that dramatically enhanced data processing speed, reducing battle data ingestion time from a cumbersome 1.5 days to an astounding 19 minutes during full reingestion.",
          "Played a pivotal role in a strategic data processing project, contributing to the foundational elements that drove its execution. Demonstrated expertise in architecting systems for scalability, reliability, and performance, resulting in significant improvements in data processing capabilities and system responsiveness."
        ],
      },
      {
        title: "Elixir Tech Lead / Software Engineer",
        period: "Jan 2021 - Jan 2022",
        company: "BlockFi",
        description: [
          "Led a cross-functional team of three members in the successful design and implementation of a robust event bus system using the Broadway framework, enabling efficient, asynchronous communication between various system components. This initiative streamlined data flow, enhanced system scalability, and improved overall system performance.",
          "Defined and implemented Key Performance Indicators (KPIs) to assess the event bus's effectiveness, including latency reduction, message throughput, and system response times. Developed comprehensive monitoring and logging mechanisms to gather real-time data, enabling continuous performance optimization. "
        ],
      },
      {
        title: "Elixir and Python Software Engineer",
        period: "Oct 2018 - Jan 2021",
        company: "Software Mansion",
        description: [
          "I played a pivotal role in a dynamic project that involved the creation of three iterations of an ETL (Extract, Transform, Load) process. I contributed to the development of a continuous data ingestion system, ensuring that our data pipelines remained up-to-date and responsive, facilitating data-driven decision-making.",
          "I led a collaborative effort to design and develop a cutting-edge WebRTC-based meeting platform using Elixir, Redis, Janus, and React. The result was a robust and feature-rich meeting platform that provided seamless, high-quality video conferencing and collaboration tools for users, contributing to enhanced remote work capabilities and team collaboration"
        ]
      }
    ],
    academic: [
      {
        career: "Engineer (Bachelor) of Information Technology",
        date: "2016 - 2020",
        institution: "Cracow University of Technology",
      },
    ],
    proyects: [
      {
        name: "Membrane Framework",
        company: "Software Mansion",
        period: "Nov 2018 - Oct 2019",
        description: [
          "Membrane is a developer-friendly multimedia framework for Elixir. Easily understandable and customisable, with dozens of ready-to-use plugins for most used cases: WebRTC videoconferencing, broadcasting using RTP, RTSP, RTMP or HLS protocols, and Audio/Video processing using wide range of codecs.",
        ],
      },
      {
        name: "Erlang Performance Lab, erlang.pl",
        company: "OSS",
        period: "March 2017",
        description: [
          "Erlang VM (BEAM) process introspection tool."
        ]

      }
    ],
  },
};
