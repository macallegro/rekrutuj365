import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { HeroKontakt } from './HeroKontakt';
import { VerticalFeaturesAbout } from './VerticalFeaturesAbout';

const BaseAbout = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <HeroKontakt />
    <VerticalFeaturesAbout />
    <Footer />
  </div>
);

export { BaseAbout };
