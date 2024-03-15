import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { HeroKontakt } from './HeroKontakt';
import { VerticalFeatures } from './VerticalFeatures';

const BaseKontakt = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <HeroKontakt />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { BaseKontakt };
