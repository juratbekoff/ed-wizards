import {Navbar} from "../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div className={"bg-white shadow-sm "}>
                <Navbar/>
            </div>

            <div className={"px-14 max-lg:px-8 mt-5 container mx-auto pb-5"}>
                <Outlet/>
            </div>
        </div>
    )
};

export default MainLayout;