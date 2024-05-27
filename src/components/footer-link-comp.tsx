import { useModal } from '@/hook/useModal';
import { Link as ScrollLink } from 'react-scroll';

export interface IFooterLinksData {
  title: string;
  links: {
    title: string;
    link: string;
  }[];
}
const FooterLinksComp = ({ links, title }: IFooterLinksData) => {
  const { setOpen } = useModal();

  return (
    <>
      <div className="flex flex-col space-y-7">
        <h5 className="text-white font-semibold text-xl">{title} </h5>
        <ul className="text-white flex flex-col gap-y-7 ">
          {links.map((dl, index) => (
            <li key={index} className="cursor-pointer hover:text-white/75">
              {dl.title === 'Pricing' || dl.title === 'Contact Us' ? (
                <ScrollLink
                  onClick={
                    dl.title === 'Contact Us'
                      ? setOpen
                      : () => {
                          return null;
                        }
                  }
                  to={`${dl.link}`}
                  spy={true}
                  smooth={true}
                  offset={-55}
                  duration={1000}
                >
                  {dl.title}
                </ScrollLink>
              ) : (
                <a href={`${dl.link}`} target="_blank" rel="noreferrer">
                  {dl.title}{' '}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterLinksComp;
