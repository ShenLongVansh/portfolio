import { Icons } from "@/components/icons";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vansh Sharma",
  initials: "VS",
  url: "#",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "DevOps Engineer",
  summary:
    "Hello! I'm Vansh Sharma, a DevOps enthusiast with a background in full-stack development. My journey began building client applications with the MERN stack, but I quickly discovered my passion for the architecture that underpins a seamless software lifecycle, from code commit to a secure, monitored, live deployment.\n\nThis passion drove me to master modern, cloud-native tools. I have hands-on experience designing CI/CD pipelines with **GitHub Actions**, containerizing applications with **Docker**, and orchestrating them with **Kubernetes**. I build and manage infrastructure as code using **Terraform** and have implemented comprehensive monitoring stacks with **Prometheus** and **Grafana**.\n\nMy development background gives me a unique perspective, allowing me to bridge the gap between development and operations effectively. I am particularly interested in DevSecOps and am always integrating security best practices, like vulnerability scanning, directly into my automated workflows.",

  avatarUrl: "/me.png",
  skills: [
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Prometheus",
    "Grafana",
    "Terraform",
    "AWS",
    "Nginx",
    "Linux",
    "Git",
    "Shell Scripting",
    "Python",
    "React",
    "Next.js",
    "Node.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog",  },  Will fix in next patch ~ ~
  ],
  contact: {
    email: process.env.NEXT_PUBLIC_EMAIL || "shenlong.codes@gmail.com",
    //tel removed for professionalism.
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
      Discord: {
        name: "LinkedIn",
        url: "https://discord.com/users/1035865720522801222",
        icon: Icons.discord,

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
      title: "Deepfake Detection & MLOps System",
      href: "https://github.com/ShenLongVansh/Deepfake-CI-CD",
      dates: "December 2025",
      active: true,
      description:
        "Architected an end-to-end MLOps pipeline for a custom AI media verification platform. The system features a Next.js-based frontend for real-time deepfake analysis, backed by a Python API and a pre-trained ML model. The entire workload is containerized with Docker and managed via a fully automated GitHub Actions CI/CD workflow for rapid testing and deployment.",
      technologies: [
        "Docker",
        "GitHub Actions",
        "Python",
        "Next.js",
        "MLOps",
        "CI/CD",
        "Linux",
        "Digital Ocean",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // will work using s3 bucket in the future
      video: "./", // using local for now
    },

    {
      title: "Automated DevSecOps Pipeline for Portfolio",
      href: "https://github.com/ShenLongVansh/portfolio",
      dates: "October 2025",
      active: true,
      description:
        "Designed a full DevSecOps pipeline for this portfolio using GitHub Actions. The workflow includes a container vulnerability scan, builds a Docker image, and deploys to a DigitalOcean Droplet behind an Nginx reverse proxy. The entire stack is monitored in real-time using Prometheus and Grafana.",
      technologies: [
        "Docker",
        "Git",
        "GitHub Actions",
        "Prometheus",
        "Grafana",
        "Nginx",
        "Linux",
        "Digital Ocean",
        "Next.js",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/ShenLongVansh/portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // will work using s3 bucket in the future
      video: "./Automated_Project_with_Monitoring.webm", // using local for now
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
    },]
} as const;
