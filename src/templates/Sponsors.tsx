import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Nasi klienci już tu pracują"
    description="Pomogliśmy znaleźć zatrudnienie setkom naszych Klientów, zarówno w małych, lokalnych firmach jak i dużych korporacjach.Budujemy trwałe partnerstwa oparte na wzajemnym zaufaniu i zrozumieniu. Naszym celem jest nie tylko znalezienie dla Ciebie pracy lub pracownika, ale także wspieranie Cię w osiąganiu długoterminowego sukcesu zawodowego."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/sentry-dark.png"
              alt="Sentry"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/better-stack-dark.png"
              alt="Better Stack"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/nextlessjs.png"
              alt="React SaaS Boilerplate Next.js"
              width={260}
              height={224}
            />
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/clerk.png"
              alt="Clerk – Authentication & User Management for Next.js"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="/assets/images/turso.png"
              alt="SQLite Developer Experience"
              width={260}
              height={224}
            />
          </td>
          <td className="border-2 border-gray-300 p-3">
            <Image
              src="https://support.crowdin.com/assets/logos/core-logo/svg/crowdin-core-logo-cDark.svg"
              alt="Crowdin"
              width={260}
              height={224}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
