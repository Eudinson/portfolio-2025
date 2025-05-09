
import vimsa_1 from '../assets/projects/vimsa/vimsa_1.png';
import vimsa_2 from '../assets/projects/vimsa/vimsa_2.png';
import vimsa_3 from '../assets/projects/vimsa/vimsa_3.png';
import vimsa_4 from '../assets/projects/vimsa/vimsa_4.png';
import vimsa_5 from '../assets/projects/vimsa/vimsa_5.png';
import vimsa_6 from '../assets/projects/vimsa/vimsa_6.png';
import vimsa_7 from '../assets/projects/vimsa/vimsa_7.png';
import vimsa_8 from '../assets/projects/vimsa/vimsa_8.png';
import vimsa_9 from '../assets/projects/vimsa/vimsa_9.png';
import vimsa_10 from '../assets/projects/vimsa/vimsa_10.png';

import apphia_1 from '../assets/projects/apphia/apphia_1.png';
import apphia_2 from '../assets/projects/apphia/apphia_2.png';
import apphia_3 from '../assets/projects/apphia/apphia_3.png';

import blu_1 from '../assets/projects/blusubsea/blu_1.png';
import blu_2 from '../assets/projects/blusubsea/blu_2.png';
import blu_3 from '../assets/projects/blusubsea/blu_3.png';

import bent_1 from '../assets/projects/bentech/bent_1.png';
import bent_2 from '../assets/projects/bentech/bent_2.png';
import bent_3 from '../assets/projects/bentech/bent_3.png';
import bent_4 from '../assets/projects/bentech/bent_4.png';

import todo from '../assets/projects/todo/todo.png';

import demo_1 from '../assets/projects/demo-shop/demo_1.png';
import demo_2 from '../assets/projects/demo-shop/demo_2.png';
import demo_3 from '../assets/projects/demo-shop/demo_3.png';
import demo_4 from '../assets/projects/demo-shop/demo_4.png';

import plmaze_1 from '../assets/projects/plmaze/plmaze_1.png';
import plmaze_2 from '../assets/projects/plmaze/plmaze_2.png';
import plmaze_3 from '../assets/projects/plmaze/plmaze_3.png';

import qpi_1 from '../assets/projects/qpi/qpi_1.png';
import qpi_2 from '../assets/projects/qpi/qpi_2.png';
import qpi_3 from '../assets/projects/qpi/qpi_3.png';

import bible_quiz_1 from '../assets/projects/bible-quiz-game/bible_quiz_1.png';

import cgmi_1 from '../assets/projects/cgmi/cgmi_1.png';
import cgmi_2 from '../assets/projects/cgmi/cgmi_2.png';
import cgmi_3 from '../assets/projects/cgmi/cgmi_3.png';

type ImageType = {
    id: number,
    source: string
}

type ProjectsItemTypes = {
    id: number,
    title: string,
    description: string,
    link: string,
    images: ImageType[]
}[]

const projectsItem: ProjectsItemTypes = [
    {
        id: 1,
        title: "Vessel Information Management System",
        description: "A system designed to efficiently manage and organize data and information related to vessels. It provides users with a centralized platform to store, track, and analyze vessel-related details. This app was built using React.js and TypeScript on the frontend, with state management handled via Redux-Saga and routing through React Router. The backend is powered by Node.js and Express.js, with PostgreSQL as the database. Real-time features were implemented using Socket.IO, while JWT is used for authentication. The UI leverages MUI, and the app is deployed and managed through Microsoft Azure.",
        link: "",
        images: [
            {
                id: 1,
                source: vimsa_1
            },
            {
                id: 2,
                source: vimsa_2
            },
            {
                id: 3,
                source: vimsa_3
            },
            {
                id: 4,
                source: vimsa_4
            },
            {
                id: 5,
                source: vimsa_5
            },
            {
                id: 6,
                source: vimsa_6
            },
            {
                id: 7,
                source: vimsa_7
            },
            {
                id: 8,
                source: vimsa_8
            },
            {
                id: 9,
                source: vimsa_9
            },
            {
                id: 10,
                source: vimsa_10
            },
        ]
    },
    {
        id: 2,
        title: "Apphia Worship",
        description: "An app that provies you with lyrics and easy to understand chords exclusive only for praise & worship songs of different versions you will find on YouTube with the functionality to transpose the chord key of your choice. This project was built using TypeScript and React.js, with routing handled by React Router and styling done through MUI and CSS. State management is implemented using Redux, animations are powered by Lottie, and communication features like contact forms are handled via EmailJS.",
        link: "https://apphia-worship.netlify.app/",
        images: [
            {
                id: 1,
                source: apphia_1
            },
            {
                id: 2,
                source: apphia_2
            },
            {
                id: 3,
                source: apphia_3
            },
        ]
    },
    {
        id: 3,
        title: "Blu Subsea",
        description: "A static web that provides information about the company. This project is built with Next.js for server-side rendering and routing. Animations are integrated using Lottie, and react-google-maps/api is used for embedding and interacting with Google Maps. Contact functionality is implemented with EmailJS, and styling is handled using CSS.",
        link: "https://www.blusubsea.com/",
        images: [
            {
                id: 1,
                source: blu_1
            },
            {
                id: 2,
                source: blu_2
            },
            {
                id: 3,
                source: blu_3
            },
        ]
    },
    {
        id: 4,
        title: "Bent-Tech",
        description: "A static web that provides information about the company. Built with React.js for the frontend framework and styled using MUI and CSS. EmailJS is used for handling contact form submissions, and Lottie is integrated to add smooth, interactive animations.",
        link: "https://www.bent-tech.com/",
        images: [
            {
                id: 1,
                source: bent_1
            },
            {
                id: 2,
                source: bent_2
            },
            {
                id: 3,
                source: bent_3
            },
            {
                id: 4,
                source: bent_4
            },
        ]
    },
    {
        id: 5,
        title: "Simple To-do List App",
        description: "Web app that allows user to add, edit, update, and delete task. Developed using React.js for building the user interface and styled with CSS to create a responsive and clean design.",
        link: "https://eudinson.github.io/todo-app-local-storage/",
        images: [
            {
                id: 1,
                source: todo
            },
        ]
    },
    {
        id: 6,
        title: "Ecommerce Demo Shop",
        description: "A demo e-commerce website showcasing product listings and basic user interaction features. Built with React.js and CSS for the frontend, and integrated Google OAuth for user authentication.",
        link: "https://demo-shop-by-eudin.netlify.app/",
        images: [
            {
                id: 1,
                source: demo_1
            },
            {
                id: 2,
                source: demo_2
            },
            {
                id: 3,
                source: demo_3
            },
            {
                id: 4,
                source: demo_4
            },
        ]
    },
    {
        id: 7,
        title: "Play-A-Maze",
        description: "A WordPress-based semi e-commerce website that showcases detailed information about the company and its products/services, with limited online purchasing features.",
        link: "https://plmaze.com/",
        images: [
            {
                id: 1,
                source: plmaze_1
            },
            {
                id: 2,
                source: plmaze_2
            },
            {
                id: 3,
                source: plmaze_3
            },
        ]
    },
    {
        id: 8,
        title: "QPI Technical Services LLC",
        description: "A WordPress website designed to showcase company information, featuring integrated WhatsApp support for direct customer inquiries and communication.",
        link: "https://qpi.ae/",
        images: [
            {
                id: 1,
                source: qpi_1
            },
            {
                id: 2,
                source: qpi_2
            },
            {
                id: 3,
                source: qpi_3
            },
        ]
    },
    {
        id: 8,
        title: "Bible Quiz Game",
        description: "A fun and interactive Bible quiz game developed using C# WinForms with SQLite for local data storage.",
        link: "https://eudinson.github.io/Bible-Quiz-Game/",
        images: [
            {
                id: 1,
                source: bible_quiz_1
            },
        ]
    },
    {
        id: 9,
        title: "CGMI Church",
        description: "A WordPress website developed for a local church, featuring service information, upcoming events, media content, and contact details — designed to keep the congregation informed and connected.",
        link: "https://churchcgmi.com/",
        images: [
            {
                id: 1,
                source: cgmi_1
            },
            {
                id: 2,
                source: cgmi_2
            },
            {
                id: 3,
                source: cgmi_3
            },
        ]
    }
]


export default projectsItem