interface ITestimonialComponent {
  title: string;
  description: string;
  image: string;
  name: string;
  designation: string;
}

const TestimonialComponent = ({ description, designation, image, name, title }: ITestimonialComponent) => {
  return (
    <>
      <article className="max-w-[384px] h-[387px]  bg-[#F5F4FB59] flex flex-col space-y-10 justify-center rounded-xl shadow-md px-5 ">
        <div className=" max-w-[320px] max-h-[207px] flex flex-col space-y-3 items-start">
          <h5 className="text-[18px] font-semibold leading-[27px] text-[#0D121F] ">{title}</h5>
          <p className="text-[16px] font-[500] leading-6 text-[#596780] ">{description}</p>
        </div>
        <div className="flex space-x-6 items-center">
          <img src={image} alt="" className="max-w-[70px] h-[70px] rounded-xl" />
          <div className="flex flex-col ">
            <h5 className="text-lg font-bold leading-[27px] text-[#0D121F] ">{name}</h5>
            <h6 className="text-sm font-normal leading-[21px] text-[#596780] ">{designation}</h6>
          </div>
        </div>
      </article>
    </>
  );
};

export default TestimonialComponent;
