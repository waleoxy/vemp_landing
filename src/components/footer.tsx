import MaxWidthWrapper from './max-width-wrapper';
import velonzeLogo from '../assets/images/velonze-logo.svg';
import { Link } from 'react-scroll';
import FooterLinksComp from './footer-link-comp';
import { footerLinksData } from '@/mock-data/footer-links-data';

const Footer = () => {
  return (
    <div className=" bg-primary h-full md:h-[639.97px] py-8 md:py-6">
      <MaxWidthWrapper className="flex items-center   h-full ">
        <div className="w-full h-full flex flex-col justify-around items-center gap-y-10">
          <div className="justify-items-center grid grid-cols-2 gap-x-6 gap-y-8 md:h-[278px] md:mt-8 md:flex md:items-start md:justify-between w-full">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col h-[56.97px] w-[56px]">
                <Link to="home" spy={true} smooth={true} offset={0} duration={1000}>
                  <img src={velonzeLogo} alt="" className="object-contain cursor-pointer" />
                </Link>
              </div>
              <p className="text-white text-[18px] ">
                Comprehensive operations <br /> management <br /> for your school.
              </p>
            </div>
            {footerLinksData.map((dataLink, index) => (
              <FooterLinksComp key={index} title={dataLink.title} links={dataLink.links} />
            ))}
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
