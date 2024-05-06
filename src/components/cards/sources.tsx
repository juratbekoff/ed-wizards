import {MdOpenInNew} from "react-icons/md";
import {Link} from "react-router-dom";

type SourcesCardProps = {
    title: string,
    createdAt: string,
    url: string
}

const SourcesCard = (data: SourcesCardProps) => {
    return (
        <Link to={data.url} target={"_blank"} className={"flex flex-col bg-white p-4 shadow-sm border rounded-md"}>
            <div className={"flex gap-1"}>
                <MdOpenInNew className={"text-xl mt-[2.5px]"}/>
                <h1 className={"pb-2"}>{data.title}</h1>
            </div>

            <div className={"flex justify-end"}>
                <h1 className={"text-xs"}>{data.createdAt}</h1>
            </div>
        </Link>
    );
};

export default SourcesCard;