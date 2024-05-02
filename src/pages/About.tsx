const About = () => {
    return (
        <>
            {/* Title */}
            <div className={"flex flex-col items-center gap-1"}>
                <h1 className={"text-2xl font-medium max-lg:text-xl"}>* About us</h1>
                <div className={"bg-[#38B7BC] h-[1px] w-1/6"}></div>
            </div>

            {/* About */}
            <div className={"flex bg-white px-8 py-5 h-[80vh] shadow-sm "}>
                <h1 className={"text-center"}>
                    Welcome to Education Wizards, where we transform the daunting world of math into an exciting
                    adventure
                    of learning and discovery. Our dedicated team of educators is committed to making math enjoyable and
                    accessible to everyone. Through innovative teaching methods and personalized support, we aim to
                    empower
                    students to excel in math and beyond. Join us and embark on a journey to unlock the magic of
                    mathematics!
                </h1>
            </div>
        </>
    );
};

export default About;