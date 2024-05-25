import HocScroll from '../hoc/hoc-scroll';
import HeroSectionPage from '@/components/hero-section';

export const HeroPage = HocScroll(HeroSectionPage, 'home');
