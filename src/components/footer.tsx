import MaxWidthWrapper from './max-width-wrapper';
import velonzeLogo from '../assets/images/velonze-logo.svg';

const Footer = () => {
  return (
    <div className="bg-primary h-full md:h-[639.97px] py-8 md:py-6">
      <MaxWidthWrapper className="flex items-center   h-full ">
        <div className="w-full h-full flex flex-col justify-around items-center gap-y-10">
          <div className="justify-items-center grid grid-cols-2 gap-x-6 gap-y-8 md:h-[278px] md:mt-8 md:flex md:items-start md:justify-between w-full">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col h-[56.97px] w-[56px]">
                <img src={velonzeLogo} alt="" className="object-contain" />
              </div>
              <p className="text-white text-[18px] ">
                Comprehensive operations <br /> management <br /> for your school.
              </p>
            </div>
            <div className="flex flex-col space-y-7">
              <h5 className="text-white font-semibold text-xl">Company</h5>
              <ul className="text-white flex flex-col gap-y-7 ">
                <li>About Us</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Partners</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-7">
              <h5 className="text-white font-semibold text-xl">Resources</h5>
              <ul className="text-white flex flex-col gap-y-7 ">
                <li>Blog</li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>Events</li>
                <li>Newsletter</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-7">
              <h5 className="text-white font-semibold text-xl">Follow Us</h5>
              <ul className="text-white flex flex-col gap-y-7 ">
                <li>Linkedin</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>

          <div className="h-0.5 w-full bg-[#CEBEFE]  " />

          <div className=" w-full ">
            <p className="text-white text-center text-base font-medium leading-6">
              &copy; {new Date().getFullYear()} Velonze. All rights reserved
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
