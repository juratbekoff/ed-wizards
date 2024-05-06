import {LessonsCard, SourcesCard, StatsCard, TestimonialsCard} from "../components/cards";
import {Link} from "react-router-dom";
import {lessonsData, sourcesData, testimonialsData} from "../static";

const Home = () => {
    return (
        <div className={"flex flex-col gap-5"}>

            {/* Banner */}
            <div className={"w-full flex gap-5 max-xl:flex-col"}>
                <img src="/banner-image.png" alt="image not laoded"
                     className={"h-[450px] max-lg:h-[350px] max-md:h-[180px]  rounded-md "}/>

                <div className={"flex flex-col gap-5 w-full"}>

                    {/* Statistics */}
                    <div className={"w-full bg-white shadow-sm rounded-md p-3 flex flex-col gap-4"}>
                        <h1 className={"text-xl font-medium"}>Statistics</h1>

                        <div className={"grid grid-cols-3 gap-4 pb-3 max-xl:grid-cols-1"}>
                            <StatsCard icon={"https://robocontest.uz/assets/icons/programming/009-programmer.png"}
                                       label={"Lessons"} amount={5}/>
                            <StatsCard icon={"https://robocontest.uz/assets/icons/programming/029-coding.png"}
                                       label={"Sources"} amount={5}/>
                            <StatsCard icon={"https://robocontest.uz/assets/icons/programming/005-group.png"}
                                       label={"Students"} amount={"50+"}/>
                        </div>
                    </div>

                    {/* No contenct */}
                    <div
                        className={"bg-white rounded-md shadow-sm h-full max-xl:hidden flex justify-center items-center px-20"}>
                        <span className={"text-xl font-medium text-center"}> ❝ Our mission is to make math engaging and enjoyable for everyone ❞</span>
                    </div>
                </div>
            </div>

            {/* Lessons */}
            <div className={"flex flex-col gap-3"}>
                <div className={"flex flex-col gap-1"}>
                    <div className={"font-medium  flex justify-between items-center"}>
                        <h1 className={"text-2xl max-lg:text-xl"}>* Latest lessons</h1>
                        <Link to={'/lessons'} className={"text-sm text-gray-500"}>See all</Link>
                    </div>

                    <div className={"bg-[#38B7BC] h-[1px] w-1/6"}></div>
                </div>

                <div className={"grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1"}>
                    {
                        lessonsData.filter(lesson => lesson.id < 5).map(lesson => (
                            <LessonsCard
                                key={lesson.id}
                                image_url={lesson.cover_image}
                                video_url={lesson.video_url}/>
                        ))
                    }
                </div>
            </div>

            {/*  Useful sources */}
            <div className={"flex flex-col gap-3"}>
                <div className={"flex flex-col gap-1"}>
                    <div className={"font-medium flex justify-between items-center"}>
                        <h1 className={"text-2xl max-lg:text-xl"}>* Useful sources</h1>
                        <Link to={'/sources'} className={"text-sm text-gray-500"}>See all</Link>
                    </div>

                    <div className={"bg-[#38B7BC] h-[0.5px] w-1/6"}></div>
                </div>

                <div className={"grid grid-cols-1 gap-2"}>
                    {
                        sourcesData.filter(source => source.id < 5).map(source => (
                            <SourcesCard key={source.id} title={source.text} createdAt={source.date} url={source.url}/>
                        ))
                    }
                </div>
            </div>

            {/*  Testimonials */}
            <div className={"flex flex-col gap-3"}>
                <div className={"flex flex-col gap-1"}>
                    <div className={"font-medium  flex justify-between items-center"}>
                        <h1 className={"text-2xl max-lg:text-xl"}>* Testimonials</h1>
                        <Link to={'/testimonials'} className={"text-sm text-gray-500"}>See all</Link>
                    </div>

                    <div className={"bg-[#38B7BC] h-[0.5px] w-1/6"}></div>
                </div>

                <div className={"grid grid-cols-4 gap-5 max-xl:grid-cols-2 max-lg:gap-3 max-lg:grid-cols-1"}>
                    {
                        testimonialsData.filter(testimonial => testimonial.id < 5).map(testimonial => (
                            <TestimonialsCard key={testimonial.id} author={testimonial.author}
                                              feedback={testimonial.text}/>
                        ))
                    }
                </div>
            </div>

            {/* Footer */}
            <div className={"flex flex-col gap-2 items-center "}>

                <div className={"flex gap-3 font-medium max-lg:text-sm"}>
                    <Link to={"/team"}>Team</Link>
                    <Link to={"/about"}>About us</Link>
                    <Link to={"/contact"}>Contact</Link>
                </div>

                <h1 className={"max-lg:text-sm"}>2024, All rights served. Made with ❤️</h1>

            </div>
        </div>
    );
};

export default Home;