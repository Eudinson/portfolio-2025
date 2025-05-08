import { Button, ButtonGroup } from '@mui/material'
import {
    Link,
    // useLocation 
} from "react-router-dom";
import '../styles/layout.css'

const buttonItem = [
    {
        id: 1,
        label: "about",
        href: '/about'
    },
    {
        id: 2,
        label: "projects",
        href: '/projects'
    },
    {
        id: 3,
        label: "contact",
        href: '/contact'
    },
]


const NavMenu = () => {

    // const { pathname } = useLocation();

    return (
        <div className='button-container'>
            <ButtonGroup variant="contained" aria-label="Basic button group">
                {
                    buttonItem.map((item) => (
                        <Link key={item.id} to={item.href}>
                            <Button
                                sx={{ 
                                    backgroundImage: 'linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)',
                                }}
                            >
                                <span className='button-label'>{item.label}</span>
                            </Button>
                        </Link>
                    ))
                }
            </ButtonGroup>
        </div>
    );
}

export default NavMenu;