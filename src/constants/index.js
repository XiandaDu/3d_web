import {
  borealis,
  cynorix,
  ltimindtree,
  shijixinyuan,
  codemao,
  watai,
} from "../assets/images";
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
  pytorch,
  c,
  google_cloud,
  k8s,
  postgresql,
  r,
  opencv,
  pandas,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: react,
    name: "React",
    type: "Framework",
  },
  {
    imageUrl: springboot,
    name: "Spring Boot",
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
    imageUrl: k8s,
    name: "Kubernetes",
    type: "Technical Tool",
  },
  {
    imageUrl: google_cloud,
    name: "GCP",
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
    imageUrl: pytorch,
    name: "PyTorch",
    type: "Machine Learning Related",
  },
  {
    imageUrl: opencv,
    name: "OpenCV",
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
    imageUrl: pandas,
    name: "Pandas",
    type: "Machine Learning Related",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Language",
  },
  {
    imageUrl: c,
    name: "C",
    type: "Language",
  },
  {
    imageUrl: cpp,
    name: "C++",
    type: "Language",
  },
  {
    imageUrl: java,
    name: "Java",
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
    imageUrl: r,
    name: "R",
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
    imageUrl: postgresql,
    name: "PostgreSQL",
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
  },
];

export const experiences = [
  {
    title: "Research Assistant",
    link: "https://aclanthology.org/2025.findings-acl.207.pdf",
    company_name: "RBC Borealis AI X McGill University",
    icon: borealis,
    iconBg: "#E1E8F0",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Co-authored <strong>WXImpactBench (ACL 2025)</strong>, the first benchmark for LLMs' understanding of historical disruptive weather impacts, combining NLP and meteorology.",
      "Processed <strong>53K+ OCR-scanned articles</strong> with GPT-4o post-OCR correction, LDA topic modeling, and expert curation; annotated <strong>1.7K samples</strong> across six societal impact categories.",
      "Designed <strong>multi-label classification</strong> and <strong>ranking-based QA</strong> tasks; benchmarked 12 LLMs (GPT, DeepSeek, LLaMA, Mistral, Qwen, Gemma) with metrics including F1, row-wise accuracy, Hit@1, and nDCG@5.",
      "Developed the <strong>ranking-based QA evaluation</strong> using GPT-4o for pseudo-question generation and a <strong>sliding window re-ranking pipeline</strong> implemented in <strong>Python, HuggingFace Transformers, and NumPy/pandas</strong>.",
      "Developing a RAG study (ICLR-targeted) creating a climate-domain benchmark to assess <strong>retriever accuracy, climate adaptation, and generation quality</strong> for improving LLM reliability in domain specific tasks.",
    ],
  },
  {
    title: "WatAI RAG Project Technical Lead",
    company_name: "University of Waterloo, WatAI",
    icon: watai,
    iconBg: "#ffffff",
    date: "April 2025 - December 2025",
    points: [
      "Built a flexible <strong>LangChain</strong> layer that can switch between <strong>Qwen, OpenAI, and Gemini</strong>; supports <strong>streaming</strong> responses, <strong>custom prompts</strong>, per-user <strong>API keys</strong>, and simple guardrails (rate and token limits).",
      "Delivered a production <strong>RAG</strong> flow: ingest & chunk course PDFs/slides, embed and store in a <strong>Supabase</strong>, retrieve top passages (optional <strong>hybrid</strong> dense+BM25), <strong>re-rank</strong>, and answer with grounded <strong>citations</strong>.",
      "Added <strong>agent</strong> tools (retrieval, file parsing, syllabus/FAQ lookup) and a router that picks the best model by <strong>speed, cost, and capability</strong>; included timeouts, retries, and safe <strong>fallbacks</strong>.",
      "Set up <strong>evaluation & monitoring</strong>: retrieval metrics (<strong>Recall@k, nDCG</strong>), <strong>LLM-as-judge</strong> faithfulness checks, and run tracing (model, prompt version, retriever settings) to tune RAG with real chats.",
    ],
  },
  {
    title: "Platform Engineer",
    link: "https://app.vluence.com/",
    company_name: "University of Waterloo, ECE Department",
    icon: cynorix,
    iconBg: "#FFF9C4",
    date: "Sept 2024 - Dec 2024",
    points: [
      "Developed dynamic <strong>React and React Native</strong> web applications, integrating with backend APIs powered by <strong>Express</strong>.",
      "Established a comprehensive <strong>CI/CD pipeline on GCP</strong>, setting up <strong>Network Endpoint Groups, Load Balancers, and GKE</strong> workloads to streamline deployment. Ensured consistent performance and reliability across <strong>Dockerized</strong> environments.",
      "Implemented and optimized news feed sorting algorithms using advanced techniques like <strong>Reciprocal Rank Fusion (RRF)</strong>, enhancing data relevance and improving more than <strong>50%</strong> of the original data on information-heavy interfaces.",
      "Leveraged <strong>Jupyter</strong> to fine-tune <strong>Hugging Face</strong> models. Visualized and analyzed results from different fine-tuned models to refine the model outputs for enhanced media content classification with an <strong>80% accuracy rate</strong>.",
      "Used <strong>pandas</strong> to manage and label collected data, creating a pipeline to convert embeddings and data from a <strong>PostgreSQL database on GKE</strong> into a self-designed <strong>neural network (NN)</strong> to classify scraped articles.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "LTIMindtree",
    icon: ltimindtree,
    iconBg: "#accbe1",
    date: "Jan 2024 - April 2024",
    points: [
      "Played a pivotal role in the development, test and deployment of some crucial internal APIs. Achieved seamless data transformation and system integration using <strong>Spring, OAuth2, and Jazz</strong>.",
      "Diligently debugged complex codebases of large-scale projects, collaborating effectively with cross-functional teams and utilizing skills in database management using <strong>SQL and JDBC</strong>.",
      "Engineered a standalone project automating cloud-based log downloads, leveraging script automation, <strong>Gson, HttpClient, SOAPUI and MuleSoft</strong> for development and stress testing",
      "Actively documented challenges, analyzed development and deployment hurdles, and proactively annotated legacy code to enhance company efficiency across various aspects.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Shenzhen Dianmao Tech Co. Ltd",
    icon: codemao,
    iconBg: "#fbc3bc",
    date: "May 2023 - Aug 2023",
    points: [
      "Developed a company bot to test natural language processing AIs using <strong>Spring Boot</strong>.",
      "Utilized <strong>OkHttp, Retrofit2, Postman and Jackson</strong> to connect the APIs of natural language AI into the company bot for my colleagues to use and test.",
      "Created <strong>RESTful APIs</strong> optimized for high <strong>QPS (Queries Per Second)</strong> and deployed it into the company server for commercial use.",
      "Collected and created dataset for the fine-tuning of AIs. I explored the possibility to combine the current business with customized AI.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Guizhou shijixinyuan Tech Co. Ltd",
    icon: shijixinyuan,
    iconBg: "#b7e4c7",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Applied <strong>Vue.js, Vue Router, JavaScript, and CSS</strong> to create and improve the company's website with more customized color and layout.",
      "Used <strong>Ajax</strong> to send asynchronous HTTP requests, interact with the backend for data, and update and render the page based on the returned results.",
      "Perused the documents of the cooperative company's products, sorted out the flow chart to colleagues, and improved the overall efficiency of the company.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/XiandaDu",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://ca.linkedin.com/in/xianda",
  },
];

export const projects = [
  {
    iconUrl: videoplayer,
    theme: "btn-back-red",
    name: "ViewTube",
    description:
      "This project is a dynamic video-playing platform that showcases my expertise in web development. With a sleek interface powered by React.js, materialUI, axios and RapidAPI, it offers seamless video playback, real-time recommendations, and data synchronization in channel or video statistics.",
    link: "https://github.com/XiandaDu/ViewTube",
    demo: "http://viewtube.allendu.me",
  },
  {
    iconUrl: note,
    theme: "btn-back-black",
    name: "Note-App",
    description:
      "This is a note-taking application that seamlessly integrates with Google login for user authentication via Passport.js. This project crafted MongoDB for data storage and Mongoose for ORM. Also, leveraging the fusion of Express.js and EJS, it delivers a user-friendly interface.",
    link: "https://github.com/XiandaDu/Note-App",
    demo: null,
  },
  {
    iconUrl: digit,
    theme: "btn-back-blue",
    name: "Digit Recognition",
    description:
      "This is a digit recognition project, powered by Python, TensorFlow, and Jupyter Notebook for model training and evaluation, coupled with React.js for the frontend deployed on Vercel, enables the accurate identification of handwritten digits.",
    link: "https://github.com/XiandaDu/Digit-Recognition",
    demo: "http://digit.allendu.me",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Real Time Chat",
    description:
      "Real-time chat application, crafted using Vue.js for the frontend, Spring Boot for the backend, and Websocket technology facilitated by socket.js, fosters real-time communication allowing users to exchange messages instantaneously in a dynamic and interactive environment.",
    link: "https://github.com/XiandaDu/Real-Time-Chat",
    demo: null,
  },
  {
    iconUrl: school,
    theme: "btn-back-green",
    name: "Campus Management System",
    description:
      "The Campus Management System, developed using Spring Boot, MyBatis, and MySQL, along with Vue.js for the frontend, offers an integrated platform for streamlining administrative tasks, student management and teacher management within educational institutions.",
    link: "https://github.com/XiandaDu/Campus-Management-System",
    demo: null,
  },
];
