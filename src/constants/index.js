import { ltimindtree, shijixinyuan, codemao } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    snapgram,
    tailwindcss,
    threads,
    springboot,
    docker,
    vue,
    mysql,
    redis,
    python,
    java,
    cpp,
    matlab,
    aws,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Framework",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Framework",
    },
    {
        imageUrl: vue,
        name: "Vue",
        type: "Framework",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Framework",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Technical Tool",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Technical Tool",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Technical Tool",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Technical Tool",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Technical Tool",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Language",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Language",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Language",
    },
    {
        imageUrl: matlab,
        name: "Matlab",
        type: "Language",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    }
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "LTIMindtree",
        icon: ltimindtree,
        iconBg: "#accbe1",
        date: "Jan 2024 - April 2024",
        points: [
            "Mulesoft API development",
        ],
    },
    {
        title: "Backend Developer",
        company_name: "Shenzhen Dianmao Tech Co. Ltd",
        icon: codemao,
        iconBg: "#fbc3bc",
        date: "May 2023 - Aug 2023",
        points: [
            "Developed a company bot to test natural language processing AIs using Spring Boot.",
            "Utilized OkHttp, Retrofit2, Postman and Jackson to connect the APIs of natural language AI into the company bot for my colleagues to use and test.",
            "Created RESTful APIs optimized for high QPS (Queries Per Second) and deployed it into the company server for commercial use.",
            "Collected and created dataset for the fine-tuning of AIs. I explored the possiblity to combine the current business with customized AI.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Guizhou shijixinyuan Tech Co. Ltd",
        icon: shijixinyuan,
        iconBg: "#b7e4c7",
        date: "Jun 2022 - Aug 2022",
        points: [
            "Applied Vue.js, Vue Router, JavaScript, and CSS to create and improve the company's website with more customized color and layout.",
            "Used Ajax to send asynchronous HTTP requests, interact with the backend for data, and update and render the page based on the returned results.",
            "Perused the documents of the cooperative company's products, sorted out the flow chart to colleagues, and improved the overall efficiency of the company.",
        ],
    }
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    }
];