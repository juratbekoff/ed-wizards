import {Link, useLocation, useNavigate} from "react-router-dom";
import {navbarItems} from "@/constants";
import {MdOutlineMenu} from "react-icons/md";
import {SheetModal} from "@/components/ui/sheet.tsx";
import {useMenuSheet} from "@/hooks"

const Navbar = () => {

    const menuSheet = useMenuSheet();
    const navigate = useNavigate();

    const onNavigate = (url: string) => {
        menuSheet.onClose();
        return navigate(url);
    };

    const path = useLocation().pathname

    return (
        <>
            <SheetModal isOpen={menuSheet.isOpen} onClose={menuSheet.onClose}>
                <div className="flex flex-col justify-between mt-5 h-screen">
                    <div className="flex flex-col gap-1">
                        {navbarItems.map((item) => (
                            <span
                                key={item.id}
                                className={`border-b pb-1`}
                                onClick={() => onNavigate(item.path)}
                            >
                                {item.name}
                            </span>
                        ))}
                    </div>
                </div>
            </SheetModal>

            <div className={"py-4 px-14 max-lg:px-8 max-xl:px-13 flex justify-between container mx-auto"}>
                <Link to={"/"} className={"text-2xl font-medium max-lg:text-xl"}>Education Wizards</Link>

                <ul className={"flex items-center gap-5 max-lg:hidden"}>
                    {navbarItems.map(item => (
                        <Link to={item.path} key={item.id}
                              className={`${item.path === path && "font-medium"}`}>{item.name}</Link>))
                    }
                </ul>

                <div className={"lg:hidden flex items-center"}>
                    <MdOutlineMenu className={"text-2xl mt-1"} onClick={menuSheet.onOpen}/>
                </div>
            </div>
        </>

    )
};

export default Navbar;