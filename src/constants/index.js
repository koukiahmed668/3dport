import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            /*"Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",*/
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/koukiahmed668',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kouki-ahmed',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'CRUD Generator with ASP.NET Core',
        description: 'Built a dynamic CRUD generator for ASP.NET Core, enabling developers to quickly create models, services, and controllers, reducing development time.',
        link: 'https://github.com/koukiahmed668/CrudGenerator-ASP-NET-CORE',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Faculte.tn',
        description: 'Developed a web platform for universities teachers in Tunisia to manage courses, paid courses, and student performance, with an emphasis on user experience and accessibility.',
        link: 'https://github.com/koukiahmed668/faculte.tn-public',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'AI DevOps Monitoring Platform',
        description: 'Created an AI-driven DevOps monitoring platform that provides insights into system performance, automates issue detection, and optimizes workflows.',
        link: 'https://github.com/koukiahmed668/AI_DevOps_Monitoring_MonitoringService',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Job Portal',
        description: 'Developed a job portal where employers and job seekers can connect, with features like job posting, resume submission, and application tracking.',
        link: 'https://github.com/koukiahmed668/job-portal',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'PowerLift with Kouki',
        description: 'A social media platform for powerlifters that includes real-time form critique powered by AI, helping users improve their lifting techniques and connect with other lifters.',
        link: 'https://github.com/koukiahmed668/powerlift-with-kouki-public',
    }
];