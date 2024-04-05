import { meta, shopify, starbucks, tesla, maruti, igdtu, assetmerkle} from "../assets/images";
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
    typescript,
    mngwise,
    umatter,
    transcare
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
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
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
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
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Research Internship",
        company_name: "IGDTUW",
        icon: igdtu,
        iconBg: "#fbc3bc",
        date: "June 2022 - August 2022",
        points: [
            "A 6-week long research internship program offered by IGDTUW under Dr. Devendra K. Tayal, CSE Department",
            "Worked on a research project in a group of three where we analysed the application and effects of monotonic properties using various machine learning algorithms",
        ],
    },
    {
        title: "Digital Enterprise Intern",
        company_name: "Maruti Suzuki India Limted",
        icon: maruti,
        iconBg: "#accbe1",
        date: "June 2023 - July 2023",
        points: [
            "Done the sentiment analysis of the google reviews extracted from various websites about the dealers of Maruti Suzuki by their customers and analyzed the performance in the market.",
            "Build a project named 'Critical Parameter' to evaluate the values of Cp and Cpk to determine the dimensions of auto components using PySpark from data provided by the supply chain of various vendors associated with Maruti.",
        ],
    },
    {
        title: "Technical Core at AssetMerkle IGDTUW",
        company_name: "AssetMerkle",
        icon: assetmerkle,
        iconBg: "#b7e4c7",
        date: "March 2023 - Dec 2023",
        points: [
            "Developed the fullstack Assetmantle's official website using React.",
            "Using Git, code was pushed via the development, integration, and staging environments.",
            "Member of the organising team for the 24-hour offline hackathon 'Build for the future' and contributed in the development of the hackathon website.",
        ],
    },
    {
        title: "Research Internship",
        company_name: "IGDTUW",
        icon: igdtu,
        iconBg: "#fbc3bc",
        date: "June 2023 - Present",
        points: [
            "Developing a full-stack web application for dairy management, emphasizing A2 milk products and facilitating efficient distribution.",
            "Implementing an intuitive admin dashboard enabling dairy farm owners to oversee operations, manage cattle, and track product sales seamlessly.",
            "Focused on promoting healthy A2 milk products while streamlining dairy operations through innovative technological solutions.",
            "Grounded in extensive research, the project represents a pioneering effort to modernize and optimize dairy management practices for enhanced efficiency and sustainability.",
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
        link: 'https://github.com/Mansi168',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mansi-jangra-33a77622a/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-green',
        name: 'IGDTUW-CSE-Research-Conclave',
        description: 'Built website for research conclave organised by CSE department of IGDTUW, an event full of speaker sessions of cutting edge technologies and other competitions.',
        link: 'https://github.com/Mansi168/igdtuw-cse-research-showcase',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Emotional Well Being Chatbot',
        description: 'Built a conversational chatbot using LLM Gemini-AI and Streamlit, offering a user-friendly interface for emotional well being interactions. The chatbot employs Gemini-AI advanced capabilities to understand and respond to user queries effectively.',
        link: 'https://github.com/Mansi168/emowellbeing',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'Cervical Shield',
        description: 'At CervicalShield, we are dedicated to raising awareness, providing resources, and offering guidance on cervical cancer prevention and screening. Our web app serves as a one-stop destination for individuals seeking information, support, and access to cervical cancer resources.',
        link: 'https://github.com/Mansi168/cervical-shield',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Automate Verification with Discord Bot',
        description: 'Are you tired of manually verifying participant entries for challenges like 30 days of code, code-everyday, or open-source-september? Say goodbye to time-consuming verification processes and hello to automation with our Discord bot!',
        link: 'https://github.com/Mansi168/OpenQuest-DiscordBot',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'EV-Charging-Stations-Analysis',
        description: 'The project aims to analyze charger station uptime comprehensively. It examines daily/hourly patterns, compares station performance, explores correlations with station attributes, and attempts predictive analysis for future uptime. This multifaceted approach seeks to uncover usage trends, outliers, and potential influencing factors, aiding proactive maintenance and operational efficiency. ',
        link: 'https://github.com/Mansi168/EV-Charging-Stations-Analysis',
    },
    {
        iconUrl: mngwise,
        theme: 'btn-back-blue',
        name: 'ManageWise Clone',
        description: 'It is a landing page clone of the website ManageWise made in html, css, js.',
        link: 'https://github.com/Mansi168/HireQuotient',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Spotify-Google-Review-NLP',
        description: 'This is a natural language processing project where analysis is done on a large dataset of Spotify google reviews.',
        link: 'https://github.com/Mansi168/Spotify-Google-Review-NLP',
    },
    {
        iconUrl: umatter,
        theme: 'btn-back-black',
        name: 'UMatter',
        description: 'UMatter is a one and all platform to help people quit bad habits by providing them with personalized sessions and one-to-one consultations with professionals.',
        link: 'https://github.com/Mansi168/BugSmashers',
    },
    {
        iconUrl: transcare,
        theme: 'btn-back-yellow',
        name: 'TransCare',
        description: 'This initiative is dedicated to fostering an inclusive and supportive environment that empowers individuals from marginalized genders to access information, discuss, and explore topics related to sexual health and their community life experiences. ',
        link: 'https://github.com/Mansi168/TransCare',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-black',
        name: 'Game Development- Diamond Digger',
        description: 'In this Endless runner game, you will be controlling a character Kate running through an endless terrain. You will have to dodge obstacles and collect coins as you go. You will also have to use your special abilities to help you get to the end of the level as fast as you can.',
        link: 'https://github.com/Mansi168/Game1',
    },
];