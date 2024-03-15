import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { VerticalFeaturesKontakt } from './VerticalFeaturesKontakt';

const BaseKontakt = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <VerticalFeaturesKontakt />
    <Footer />
  </div>
);

export { BaseKontakt };
