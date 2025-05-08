import { Divider } from '@mui/material';
import '../styles/layout.css'

const AboutPage = () => {
    return ( 
        <div className="about-page-main-container">
            <h1>Hello World, I'm Eudin</h1>
            <p>I'm a full-stack web application developer specializing in React.js, PostgreSQL, Node.js, and Express.js.</p>
            <Divider/>
            <p>Technologies I work with include TypeScript, Redux, Redux-Saga, Azure, MUI, Axios, JWT, SQL Server, Cloudinary, Heroku, Netlify, and WordPress.</p>
        </div>
     );
}
 
export default AboutPage;