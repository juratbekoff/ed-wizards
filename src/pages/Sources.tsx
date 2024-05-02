import {SourcesCard} from "../components/cards";

const Sources = () => {
    return (
        <>
            {/* Title */}
            <div className={"flex flex-col items-center gap-1"}>
                <h1 className={"text-2xl font-medium max-lg:text-xl"}>* Useful sources</h1>
                <div className={"bg-[#38B7BC] h-[1px] w-1/6"}></div>
            </div>

            {/* Sources card*/}
            <div className={"grid grid-cols-1 gap-2"}>
                <SourcesCard title={"The 37 Greatest Math Quotes of All Time"} createdAt={"20.08.2024"}/>
                <SourcesCard title={"The 37 Greatest Math Quotes of All Time"} createdAt={"20.08.2024"}/>
                <SourcesCard title={"The 37 Greatest Math Quotes of All Time"} createdAt={"20.08.2024"}/>
                <SourcesCard title={"The 37 Greatest Math Quotes of All Time"} createdAt={"20.08.2024"}/>
            </div>
        </>
    );
};

export default Sources;