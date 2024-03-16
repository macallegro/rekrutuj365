import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { HeroKontakt } from './HeroKontakt';
import { VerticalFeaturesPolityka } from './VerticalFeaturesPolityka';

const BasePolityka = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <HeroKontakt />
    <VerticalFeaturesPolityka />
    <Footer />
  </div>
);

export { BasePolityka };
