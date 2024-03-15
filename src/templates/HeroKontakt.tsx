import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const HeroKontakt = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/o-nas">O nas</Link>
        </li>
        <li>
          <Link href="/kontakt">Kontakt</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Skontaktuj się z nami\n'}
            <span className="text-primary-500">ludzi spragnionych sukcesu</span>
          </>
        }
        description="Najłatwiejsza droga do znalezienia wymarzonej pracy. Setki ofert pracy, najlepsi pracodawcy."
        button={
          <Link href="/kontakt">
            <Button xl>Napisz do nas</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { HeroKontakt };
