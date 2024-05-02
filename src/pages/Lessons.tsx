import {LessonsCard} from "../components/cards";

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
                <LessonsCard
                    image_url={"https://cdn1.byjus.com/wp-content/uploads/2018/11/maths/2016/06/07120628/Algebra1.png"}
                    video_url={"https://robocontest.uz/assets/icons/programming/009-programmer.png"}/>
                <LessonsCard
                    image_url={"https://cdn1.byjus.com/wp-content/uploads/2018/11/maths/2016/06/07120628/Algebra1.png"}
                    video_url={"https://robocontest.uz/assets/icons/programming/009-programmer.png"}/>
                <LessonsCard
                    image_url={"https://cdn1.byjus.com/wp-content/uploads/2018/11/maths/2016/06/07120628/Algebra1.png"}
                    video_url={"https://robocontest.uz/assets/icons/programming/009-programmer.png"}/>
                <LessonsCard
                    image_url={"https://cdn1.byjus.com/wp-content/uploads/2018/11/maths/2016/06/07120628/Algebra1.png"}
                    video_url={"https://robocontest.uz/assets/icons/programming/009-programmer.png"}/>
            </div>
        </>
    );
};

export default Lessons;