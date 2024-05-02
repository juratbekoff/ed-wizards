import {Link, useLocation} from "react-router-dom";
import {navbarItems} from "../constants";
import {MdOutlineMenu} from "react-icons/md";


const Navbar = () => {

    const path = useLocation().pathname

    return (
        <div className={"py-4 px-14 max-lg:px-8 max-xl:px-13 flex justify-between container mx-auto"}>
            <Link to={"/"} className={"text-2xl font-medium max-lg:text-xl"}>Ed-Wizards</Link>

            <ul className={"flex items-center gap-5 max-lg:hidden"}>
                {navbarItems.map(item => (
                    <Link to={item.path} key={item.id}
                          className={`${item.path === path && "font-medium"}`}>{item.name}</Link>))
                }
            </ul>

            <div className={"lg:hidden flex items-center"}>
                <MdOutlineMenu className={"text-2xl mt-1"}/>
            </div>
        </div>
    )
};

export default Navbar;