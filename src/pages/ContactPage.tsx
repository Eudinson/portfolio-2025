import { Divider } from '@mui/material';
import {
    Email,
    LinkedIn,
    GitHub
} from "@mui/icons-material"
import '../styles/layout.css'

const ContactPage = () => {
    return ( 
        <div className="contact-page-main-container">
            <h1>Contact</h1>
            <p><Email /> <a href="mailto:eudinson_uy29@yahoo.com"><span className="script-command">eudinson_uy29@yahoo.com</span></a></p>
            <Divider/>
            <p><LinkedIn/> <a href="https://www.linkedin.com/in/eudinson-uy-6970a1128/" target='_blank'><span className="script-command">in/eudinson-uy</span></a></p>
            <Divider/>
            <p><GitHub/> <a href="https://github.com/Eudinson" target='_blank'><span className="script-command">github.com/eudinson</span></a></p>
        </div>
     );
}
 
export default ContactPage;