import {FaPhone} from "react-icons/fa6";
import {SiTelegram} from "react-icons/si";
import {MdAlternateEmail} from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5";

const Contact = () => {
    return (
        <>
            {/* Title */}
            <div className={"flex flex-col items-center gap-1"}>
                <h1 className={"text-2xl font-medium max-lg:text-xl"}>* Contact</h1>
                <div className={"bg-[#38B7BC] h-[1px] w-1/6"}></div>
            </div>

            <div className={"bg-white h-60 p-8 space-y-2 max-lg:space-y-4 max-md:text-sm"}>
                {/* Phone */}
                <div className={"flex gap-3"}>
                    <div className={"flex items-center gap-1"}>
                        <FaPhone className="text-green-500"/>
                    </div>
                    <h1>+998 (93) 467-12-70</h1>
                </div>

                {/* Telegram */}
                <div className={"flex gap-3"}>
                    <div className={"flex items-center gap-1"}>
                        <SiTelegram className="text-blue-500"/>
                    </div>
                    <h1>@education_wizards</h1>
                </div>

                {/* Email */}
                <div className={"flex gap-3"}>
                    <div className={"flex items-center gap-1 -ml-[2px]"}>
                        <MdAlternateEmail className="text-orange-600 text-xl"/>
                    </div>
                    <h1>educationwizardsfficial@gmail.com</h1>
                </div>


                {/* Address (location) */}
                <div className={"flex gap-3"}>
                    <div className={"flex items-center max-lg:items-start gap-1 -ml-[2px]"}>
                        <IoLocationSharp className="text-orange-600 text-xl"/>
                    </div>
                    <h1>Mirzo Babur, Amir Temur Mahalla 35, Tashkent, Tashkent Region</h1>
                </div>

            </div>
        </>


    )
};

export default Contact;