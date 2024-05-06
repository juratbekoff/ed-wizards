import {TeamCard} from "../components/cards";

const Team = () => {
    return (
        <>
            {/* Title */}
            <div className={"flex flex-col items-center gap-1"}>
                <h1 className={"text-2xl font-medium max-lg:text-xl"}>* Our team</h1>
                <div className={"bg-[#38B7BC] h-[1px] w-1/6"}></div>
            </div>

            {/* Team card*/}
            <div className={"grid grid-cols-5 gap-5 max-xl:grid-cols-2 max-lg:grid-cols-1"}>
                <TeamCard fullname={"Name Surname"}
                          image={"https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"}
                          role={"Web developer"}/>
            </div>
        </>
    );
};

export default Team;