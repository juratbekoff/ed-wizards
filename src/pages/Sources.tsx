import {SourcesCard} from "../components/cards";
import {sourcesData} from "../static";

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
                {
                    sourcesData.map(source => (
                        <SourcesCard key={source.id} title={source.text} createdAt={source.date} url={source.url}/>
                    ))
                }
            </div>
        </>
    );
};

export default Sources;