import {TestimonialsCard} from "../components/cards";
import {testimonialsData} from "../static";

const Testimonials = () => {
    return (
        <>
            {/* Title */}
            <div className={"flex flex-col items-center gap-1"}>
                <h1 className={"text-2xl font-medium max-lg:text-xl"}>* Testimonials</h1>
                <div className={"bg-[#38B7BC] h-[1px] w-1/6"}></div>
            </div>

            {/* Testimonials card*/}
            <div className={"grid grid-cols-4 gap-5 max-xl:grid-cols-2 max-lg:gap-3 max-lg:grid-cols-1"}>
                {
                    testimonialsData.map(testimonial => (
                        <TestimonialsCard key={testimonial.id} author={testimonial.author} feedback={testimonial.text}/>
                    ))
                }
            </div>
        </>
    );
};

export default Testimonials;