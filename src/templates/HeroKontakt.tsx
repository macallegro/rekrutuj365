import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const HeroKontakt = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/about">O nas</Link>
        </li>
        <li>
          <Link href="/kontakt">Kontakt</Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { HeroKontakt };
