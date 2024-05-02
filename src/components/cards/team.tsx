type TeamCardProps = {
    image: string
    fullname: string
    role: string
}

const TeamCard = (data: TeamCardProps) => {
    return (
        <div className={"flex flex-col gap-4 bg-white rounded-md shadow-sm border p-6"}>
            <img src={data.image} alt="not loaded" className={"h-64 w-full "}/>

            <div className={"flex flex-col  px-4"}>
                <h1 className={"font-medium text-base"}>{data.fullname}</h1>
                <span className={"text-sm"}>{data.role}</span>
            </div>
        </div>
    );
};

export default TeamCard;