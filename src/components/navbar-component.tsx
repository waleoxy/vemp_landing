import MaxWidthWrapper from './max-width-wrapper';
import vempLogo from '../assets/images/velonze-logo.svg';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';
import { useState } from 'react';

const NavbarComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  return (
    <>
      <nav className="md:hidden bg text-white bg-primary h-20 fixed w-full top-0 border-b border-blue-300/20 z-[100] pt-1 px-3 flex justify-between items-center">
        <div className="col-span-1">
          <img src={vempLogo} className="object-contain h-5/6 cursor-pointer" />
        </div>
        <div className="relative">
          <Menu onClick={() => setShowMenu((prev) => !prev)} className="text-white h-10 w-10 mr-2 cursor-pointer" />
          <div>
            {showMenu && (
              <ul className="absolute right-3 rounded-sm min-w-[12.5rem] pt-2 px-0.5 bg-white/55 z-10 flex flex-col items-start text-primary font-semibold pb-3 leading-6 transition-all duration-700">
                <li className="cursor-pointer text-[17px] hover:bg-white/80 w-full py-3 pl-2 hover:text-purple-700">
                  How it works
                </li>
                <li className="flex flex-col items-start cursor-pointer text-[17px] w-full ">
                  <div className="flex  hover:bg-white w-full py-3 pl-2 hover:text-purple-700 ">
                    Products{' '}
                    {!showProductsMenu ? (
                      <ChevronRight
                        onClick={() => setShowProductsMenu((prev) => !prev)}
                        className="h-5 w-5 text-primary ml-24 mt-1 "
                      />
                    ) : (
                      <ChevronDown
                        onClick={() => setShowProductsMenu((prev) => !prev)}
                        className="h-5 w-5 text-primary ml-24 mt-1"
                      />
                    )}
                  </div>
                  {showProductsMenu && (
                    <div className="ml-3 border  bg-white/80 rounded-l-lg mt-0.5 w-[calc(100%-12px)] px-0.5 ">
                      <ul className="flex flex-col py-2">
                        <li className="cursor-pointer text-[15px] hover:bg-white w-full py-1.5  pl-2 text-blue-800 hover:text-purple-700">
                          Hello
                        </li>
                        <li className="cursor-pointer text-[15px] hover:bg-white w-full py-1.5  pl-2 text-blue-800 hover:text-purple-700">
                          Hello
                        </li>
                        <li className="cursor-pointer text-[15px] hover:bg-white w-full py-1.5  pl-2 text-blue-800 hover:text-purple-700">
                          Hello
                        </li>
                        <li className="cursor-pointer text-[15px] hover:bg-white w-full py-1.5  pl-2 text-blue-800 hover:text-purple-700">
                          Hello
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="cursor-pointer text-[17px] hover:bg-white/80 w-full py-3 pl-2 hover:text-purple-700">
                  Pricing
                </li>
                <li className="cursor-pointer text-[17px] hover:bg-white/80 w-full py-3 pl-2 hover:text-purple-700">
                  Blog
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <nav className="hidden md:inline-block bg-primary h-20 fixed w-full top-0 border-b border-blue-300/20 z-[100] pt-2">
        <MaxWidthWrapper>
          <div className="h-full grid grid-cols-4 ">
            {' '}
            <div className="col-span-1">
              <img src={vempLogo} className="object-contain h-5/6 cursor-pointer" />
            </div>
            <ul className=" flex justify-etart items-center col-span-2 text-white pb-1 md:space-x-6 lg:space-x-12  md:text-sm lg:text-base leading-6 md:pl-3 lg:pl-14 transition-all duration-300">
              <li className="cursor-pointer hover:text-primary-foreground">How it works</li>
              <li className="flex items-center cursor-pointer hover:text-primary-foreground">
                Products <ChevronDown className="h-5 w-5 text-white ml-1.5 mt-1" />
              </li>
              <li className="cursor-pointer hover:text-primary-foreground">Pricing</li>
              <li className="cursor-pointer hover:text-primary-foreground">Blog</li>
            </ul>
            <div className=" col-span-1 flex items-center justify-end space-x-0 leading-6  pb-1 md:mr-2 xl:mr-0">
              <Button
                size={'lg'}
                className={cn('rounded-full h-[42px] text-base text-white hover:text-primary-foreground px-5')}
              >
                Login
              </Button>
              <Button
                size={'lg'}
                className={cn(
                  'rounded-full h-[42px] text-base text-primary/10 w-[125px] bg-white font-semibold hover:bg-white/90 hover:text-violet-900/80'
                )}
              >
                Get Demo
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default NavbarComponent;
