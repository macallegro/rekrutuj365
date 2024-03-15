import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeaturesPolityka = () => (
  <Section
    title="Polityka Prywatności"
    description="Twoja prywatność jest dla nas ważna. Niniejsza Polityka Prywatności wyjaśnia, jakie informacje zbieramy od użytkowników naszej strony internetowej oraz w jaki sposób te dane są wykorzystywane i chronione."
  >
    <VerticalFeatureRow
      title="Jakie informacje zbieramy?"
      description="Podczas korzystania z naszej strony internetowej możemy zbierać różne rodzaje informacji, w tym:

      Dane osobowe: takie jak imię, nazwisko, adres e-mail, numer telefonu, adres zamieszkania, które użytkownik dobrowolnie podaje w formularzach kontaktowych lub rejestracyjnych.
      Dane dotyczące ruchu na stronie: takie jak adres IP, informacje o przeglądarce internetowej, czas spędzony na stronie, odwiedzone podstrony, które są gromadzone automatycznie przy użyciu technologii śledzenia, takiej jak pliki cookie."
      image="/assets/images/feature.svg"
      imageAlt="Informacje"
    />
    <VerticalFeatureRow
      title="Jak chronimy Twoje dane?"
      description="Dbamy o bezpieczeństwo Twoich danych i stosujemy odpowiednie środki techniczne i organizacyjne, aby zapobiec nieautoryzowanemu dostępowi, utracie, uszkodzeniu lub ujawnieniu Twoich danych osobowych."
      image="/assets/images/feature2.svg"
      imageAlt="Dane"
      reverse
    />
    <VerticalFeatureRow
      title="Pliki cookie"
      description="Nasza strona internetowa może korzystać z plików cookie i podobnych technologii śledzenia w celu poprawy jakości usług oraz dostosowania ich do potrzeb użytkowników. Użytkownik może zarządzać ustawieniami plików cookie w swojej przeglądarce internetowej."
      image="/assets/images/feature3.svg"
      imageAlt="Cookies"
    />
  </Section>
);

export { VerticalFeaturesPolityka };
