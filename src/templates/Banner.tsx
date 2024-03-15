import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Tworzenie CV nigdy nie było tak łatwe. Wystarczy poświęcić kilka minut używając kreatora CV, aby mieć na biurku gotowy życiorys"
      subtitle="Kliknij, aby otworzyć kreator CV."
      button={
        <Link href="https://be-rising.pl">
          <Button>Stwórz CV</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
