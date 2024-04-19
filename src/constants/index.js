import { ltimindtree, shijixinyuan, codemao } from "../assets/images";
import {
    car,
    contact,
    css,
    digit,
    note,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    videoplayer,
    react,
    snapgram,
    tailwindcss,
    school,
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
    jupyter,
    express,
    materialUI,
    passport,
    numpy,
    tensorflow,
    pytorch
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
        imageUrl: express,
        name: "ExpressJs",
        type: "Framework",
    },
    {
        imageUrl: nodejs,
        name: "NodeJs",
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
    // {
    //     imageUrl: passport,
    //     name: "Passport",
    //     type: "Technical Tool"
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Technical Tool",
    },
    {
        imageUrl: materialUI,
        name: "MaterialUI",
        type: "Technical Tool",
    },
    {
        imageUrl: jupyter,
        name: "Jupyter",
        type: "Machine Learning Related",
    },
    {
        imageUrl: numpy,
        name: "numpy",
        type: "Machine Learning Related",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "Machine Learning Related",
    },
    {
        imageUrl: pytorch,
        name: "PyTorch",
        type: "Machine Learning Related",
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
        imageUrl: typescript,
        name: "TypeScript",
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
           "Played a pivotal role in the development, test and deployment of some crucial internal APIs. Achieved seamless data transformation and system integration using Spring, OAuth2, and Jazz.",
           "Diligently debugged complex codebases of large-scale projects, collaborating effectively with cross-functional teams and utilizing skills in databse management using SQL and JDBC.",
           "Engineered a standalone project automating cloud-based log downloads, leveraging script automation, Gson, HttpClient, SOAPUI and MuleSoft for development and stress testing",
           "Actively documented challenges, analyzed development and deployment hurdles, and proactively annotated legacy code to enhance company efficiency across various aspects."
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
        link: 'https://github.com/XiandaDu',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://ca.linkedin.com/in/xianda',
    }
];

export const projects = [
    {
        iconUrl: videoplayer,
        theme: 'btn-back-red',
        name: 'ViewTube',
        description: 'This project is a dynamic video-playing platform that showcases my expertise in web development. With a sleek interface powered by React.js, materialUI, axios and RapidAPI, it offers seamless video playback, real-time recommendations, and data synchronization in channel or video statistics.',
        link: 'https://github.com/XiandaDu/ViewTube',
        demo: 'http://viewtube.allendu.me'
    },
    {
        iconUrl: note,
        theme: 'btn-back-black',
        name: 'Note-App',
        description: 'This is a note-taking application that seamlessly integrates with Google login for user authentication via Passport.js. This project crafted MongoDB for data storage and Mongoose for ORM. Also, leveraging the fusion of Express.js and EJS, it delivers a user-friendly interface.',
        link: 'https://github.com/XiandaDu/Note-App',
        demo: null
    },
    {
        iconUrl: digit,
        theme: 'btn-back-blue',
        name: 'Digit Recognition',
        description: 'This is a digit recognition project, powered by Python, TensorFlow, and Jupyter Notebook for model training and evaluation, coupled with React.js for the frontend deployed on Vercel, enables the accurate identification of handwritten digits.',
        link: 'https://github.com/XiandaDu/Digit-Recognition',
        demo: 'http://digit.allendu.me'
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Real Time Chat',
        description: 'Real-time chat application, crafted using Vue.js for the frontend, Spring Boot for the backend, and Websocket technology facilitated by socket.js, fosters real-time communication allowing users to exchange messages instantaneously in a dynamic and interactive environment.',
        link: 'https://github.com/XiandaDu/Real-Time-Chat',
        demo: null
    },
    {
        iconUrl: school,
        theme: 'btn-back-green',
        name: 'Campus Management System',
        description: 'The Campus Management System, developed using Spring Boot, MyBatis, and MySQL, along with Vue.js for the frontend, offers an integrated platform for streamlining administrative tasks, student management and teacher management within educational institutions.',
        link: 'https://github.com/XiandaDu/Campus-Management-System',
        demo: 'http://3.228.74.131:81'
    },
];