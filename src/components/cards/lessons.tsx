import {FaPlay} from "react-icons/fa6";
import {Link} from "react-router-dom";

const LessonsCard = ({image_url, video_url}: { image_url: string, video_url: string }) => {
    return (
        <Link
            to={video_url}
            target={"_blank"}
            className={"bg-white p-2 rounded-md shadow h-[180px] bg-cover bg-center flex justify-center items-center cursor-pointer"}
            style={{backgroundImage: `url(${image_url})`}}>
            <div
                className={"w-9 h-9 flex justify-center items-center rounded-full bg-gray-100"}>
                <FaPlay className={"mt-[1px] ml-[1px]"}/>
            </div>
        </Link>
    );
};

export default LessonsCard;