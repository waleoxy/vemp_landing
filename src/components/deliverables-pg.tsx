import MaxWidthWrapper from './max-width-wrapper';
import bagIcon from '../assets/images/empty-wallet-time.png';
import salesDetails from '../assets/images/Sales Details.png';

const DeliverablesPg = () => {
  return (
    <div className="bg-red-50/25 min-h-[878px] h-full">
      <MaxWidthWrapper className="h-full">
        <section className="flex flex-col mt-28 items-center justify-center">
          <div className="flex flex-col items-center space-y-6">
            <h5 className="text-[20px] leading-[30px] font-semibold">Why choose us</h5>
            <h3 className="text-clamp4xl leading-[60px] font-bold text-[#040815] text-center">
              Efficiency Meets Education
            </h3>
            <p className="text-clampxl font-normal leading[25.2px] text-[#596780] text-center pl-4">
              From student enrollment to staff management, we&apos;ve got you covered.
            </p>
          </div>
        </section>
        <section className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 h-full md:h-[413px] gap-10">
          <article className="w-full h-full">
            <ul className="flex flex-col w-full  md:space-y-10">
              <li className="flex items-start space-x-5 ">
                <span className="bg-primary p-2 rounded-xl mt-2">
                  <img src={bagIcon} className="object-contain h-[24px] w-{24px}" />
                </span>
                <div className="flex flex-col items-start max-w-[415px]">
                  <h5 className="text-clamp2xl font-semibold leading-[36px] tracking-tight">
                    Student and Academic Management
                  </h5>
                  <p className="text-base leading-6 mt-2 font-normal">
                    Streamline student records, learning, and assessment to focus on educational outcomes.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-5 ">
                <span className="bg-primary p-2 rounded-xl mt-2">
                  <img src={bagIcon} className="object-contain h-[24px] w-{24px}" />
                </span>
                <div className="flex flex-col items-start max-w-[415px]">
                  <h5 className="text-clamp2xl font-semibold leading-[36px] tracking-tight">
                    Administrative and Operations Management
                  </h5>
                  <p className="text-base leading-6 mt-2 font-normal">
                    Automate school operations and maximize efficiency to free up resources.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-5 ">
                <span className="bg-primary p-2 rounded-xl mt-2">
                  <img src={bagIcon} className="object-contain h-[24px] w-{24px}" />
                </span>
                <div className="flex flex-col items-start max-w-[415px]">
                  <h5 className="text-clamp2xl font-semibold leading-[36px] tracking-tight">
                    Communication and Collaboration
                  </h5>
                  <p className="text-base leading-6 mt-2 font-normal">
                    Foster stronger connections with parents, students, and staff for improved engagement.
                  </p>
                </div>
              </li>
            </ul>
          </article>
          <div className="bg-[#07D3DE26] h-[413px]">
            <img src={salesDetails} className=" h-full object-contain" />
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default DeliverablesPg;
