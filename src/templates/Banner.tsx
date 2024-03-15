import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Aby aplikować na jedno ze stanowisk pracy które mamy w ofercie, stwórz CV za pomocą kreatora CV i prześlij je na nasz adres email."
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
