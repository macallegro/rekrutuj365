import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter logo={<Logo />} iconList={<></>}>
        <li>
          <Link href="/">Strona Główna</Link>
        </li>
        <li>
          <Link href="/about">O nas</Link>
        </li>
        <li>
          <Link href="/kontakt">Kontakt</Link>
        </li>
        <li>
          <Link href="/polityka">Polityka Prywatności</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
