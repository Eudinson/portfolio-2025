import react from '../assets/react.svg';
import nodejs from '../assets/nodejs.svg';
import postgresql from  '../assets/postgresql.svg';
import express from '../assets/express.svg';

import { Divider } from '@mui/material';
import '../styles/layout.css'

const techStackImages = [
    {
        id: 1,
        source: react
    },
    {
        id: 2,
        source: nodejs
    },
    {
        id: 3,
        source: postgresql
    },
    {
        id: 4,
        source: express
    },
]

const AboutPage = () => {
    return ( 
        <div className="about-page-main-container">
            <h1>Hello World, I'm Eudin</h1>
            <div className='tech-stack-image-container'>
                {
                    techStackImages.map((img) => (
                        <img key={img.id} src={img.source} className='tect-stack-image'/>
                    ))
                }
            </div>
            <Divider/>
            <p>I'm a full-stack web application developer specializing in React.js, PostgreSQL, Node.js, and Express.js.</p>
            <Divider/>
            <p>Technologies I work with include TypeScript, Redux, Redux-Saga, Azure, MUI, Axios, JWT, SQL Server, Cloudinary, Heroku, Netlify, and WordPress.</p>
        </div>
     );
}
 
export default AboutPage;