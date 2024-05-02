type StatsCardProps = {
    icon: string
    label: string
    amount: number
}

const StatsCards = (data: StatsCardProps) => {
    return (
        <div className={"flex gap-3 items-center border px-2 py-3 rounded-lg"}>
            <div>
                <img src={data.icon} alt="not loaded" className={"h-[50px]"}/>
            </div>

            <div className={"flex flex-col"}>
                <span className={"text-base font-medium text-gray-600"}>{data.label}</span>
                <span className={"text-sm text-green-600 font-medium"}>{data.amount}</span>
            </div>
        </div>
    )
};

export default StatsCards;