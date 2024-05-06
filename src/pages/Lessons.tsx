import {LessonsCard} from "../components/cards";
import {lessonsData} from "../static";

const Lessons = () => {
    return (
        <>
            {/* Title */}
            <div className={"flex flex-col items-center gap-1"}>
                <h1 className={"text-2xl font-medium max-lg:text-xl"}>* Lessons</h1>
                <div className={"bg-[#38B7BC] h-[1px] w-1/6"}></div>
            </div>

            {/* Lessons card*/}
            <div className={"grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1"}>
                {
                    lessonsData.map(lesson => (
                        <LessonsCard
                            key={lesson.id}
                            image_url={lesson.cover_image}
                            video_url={lesson.video_url}/>
                    ))
                }
            </div>
        </>
    );
};

export default Lessons;