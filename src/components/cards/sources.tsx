import {MdOpenInNew} from "react-icons/md";

type SourcesCardProps = {
    title: string,
    createdAt: string
}

const SourcesCard = (data: SourcesCardProps) => {
    return (
        <div className={"flex flex-col bg-white p-4 shadow-sm border rounded-md"}>
            <div className={"flex gap-1"}>
                <MdOpenInNew className={"text-xl mt-[2.5px]"}/>
                <h1 className={"pb-2"}>{data.title}</h1>
            </div>

            <div className={"flex justify-end"}>
                <h1 className={"text-xs"}>{data.createdAt}</h1>
            </div>
        </div>
    );
};

export default SourcesCard;