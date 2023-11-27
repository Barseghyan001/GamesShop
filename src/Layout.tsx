import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <div className="mainContent">
                <Outlet />
            </div>
            <Footer/>
        </>
    );
}

export default Layout;