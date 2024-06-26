import {FaStar} from "react-icons/fa";

type TestimonialsCardProps = {
    feedback: string
    author: string
}

const TestimonialsCard = (data: TestimonialsCardProps) => {
    return (
        <div
            className={"border py-3 px-10 h-44 max-lg:h-32 rounded-md shadow-sm flex flex-col gap-1 items-center justify-center bg-white"}>
            <span
                className={"text-sm text-center"}>{data.feedback}</span>
            <h1 className={"font-medium text-base"}>{data.author}</h1>

            <div className={"flex gap-1"}>
                <FaStar className={"text-yellow-500"}/>
                <FaStar className={"text-yellow-500"}/>
                <FaStar className={"text-yellow-500"}/>
                <FaStar className={"text-yellow-500"}/>
                <FaStar className={"text-yellow-500"}/>
            </div>
        </div>
    );
};

export default TestimonialsCard;