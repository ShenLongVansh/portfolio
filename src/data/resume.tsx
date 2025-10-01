import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vansh Sharma",
  initials: "VS",
  url: "#",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Aspiring DevOps Engineer",
summary: 
  "Hello! I'm Vansh Sharma, a Computer Science graduate from Roorkee Institute of Technology, class of 2025. My tech journey began in full-stack web development, where I delivered multiple client projects using React and the MERN stack during my internship. \n \n It was during this internship, while configuring hosting environments and managing deployments, that I discovered my true passion: the complete process that gets code from a developer's machine to a live user, efficiently and reliably.\n\nThis led me to dive deep into DevOps principles. I am currently reinforcing my hands-on skills by completing the **KodeKloud DevOps Engineer Path**. Through this, I am mastering Docker and Jenkins, and building my foundational knowledge in **Kubernetes** and **AWS**. My goal is to leverage my development background to build better automation and contribute to a culture of seamless, continuous delivery.",

  avatarUrl: "/me.png",
  skills: [
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Terraform",
    "AWS",
    "Linux",
    "Git",
    "Shell Scripting",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog",  },  Will fix in next patch ~ ~
  ],
  contact: {
    email: "shenlong.codes@gmail.com",
    tel: "+919667152321",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ShenLongVansh",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vansh-sharma-4a6882245/",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },

  work: [

    {
      company: "Web Spider Solutions",
      href: "https://webspidersolutions.com/", 
      badges: ["Intern"],
      location: "Noida", 
      title: "Full Stack Developer Intern",
      logoUrl: "/webspider.png", 
      start: "Aug 2024", 
      end: "March 2025", 
      description:
        "Developed and delivered full-stack projects using the MERN stack for multiple clients, meeting all deadlines. My role extended to operations, where I configured hosting environments for live applications. I also managed all team source code using Git-based version control and collaborated with cross-functional teams to enhance workflow efficiency.",
    }, 
  ],
  education: [
    {
      school: "Roorkee Institute of Technology",
      degree: "Bachelor of Technology in Computer Science & Engineering (BTech CSE)",
      badges: ["Undergrad"],
      href: "https://ritroorkee.com/",
      logoUrl: "/rit.png",
      start: "2021",
      end: "2025",
    },
  ],
 projects: [
    {
      title: "Automated CI/CD Pipeline for This Portfolio",
      href: "https://github.com/ShenLongVansh/portfolio",
      dates: "Sepetember 2025", 
      active: true,
      description: "Designed and implemented a zero-touch CI/CD pipeline for this Next.js portfolio. The pipeline, defined via GitHub Actions, triggers on push to GitHub, builds a multi-stage Docker image, and deploys the container automatically to a DigitalOcean droplet, exposing the site on port 80.",
      technologies: [
        "GitHub Actions",
        "Docker",
        "Git",
        "GitHub",
        "Linux",
        "Next.js",
        "React",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/ShenLongVansh/portfolio",
          icon: <Icons.github className="size-3" />, 
        },
      ],
      image: "", // will work using s3 bucket in the future
      video: "./Automated-Portfolio.webm", // using local for now
    },
  ],

  hackathons: [
    {
      title: "Hackathon 2024 - Be a tech geek.",
      dates: "March 9th, 2024",
      location: "RIT Roorkee",
      description:
        "Won 1st Place and a 5,000 INR prize in a college-wide hackathon. Developed a Python application using OpenCV to analyze real-time video feeds, measure vehicle density, and intelligently automate traffic light signaling to optimize flow.",
      image:
        "./hackathon-python.jpg",
          links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShenLongVansh/Traffic-Detection-",
        },]
    },
    
    { 
      // triggering new build
      title: "NO ESCAPE CTF 2022",
      dates: "November 25th - 26th, 2022",
      location: "RIT Roorkee",
      description:
        "[1st in College, 17th Worldwide] Secured a top-20 Global and 2nd National ranking in a major international Capture The Flag event on CTFtime.org, solving complex challenges requiring advanced problem-solving, binary manipulation, and forensic tool usage.",
      image:
        "./hackathon-CTF.png",
          links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ctftime.org/team/3055",
        },]
    }, ]
} as const;
