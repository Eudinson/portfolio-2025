import NavMenu from "./components/NavMenu";
import { Outlet } from "react-router-dom";
import './styles/layout.css'

const Layout = () => {
    return (
        <div className="layout-main-container">
            <div className="layout-sub-container">
                <Outlet />
            </div>
            <NavMenu />
        </div>
    );
}

export default Layout;