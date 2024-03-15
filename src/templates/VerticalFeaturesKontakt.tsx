import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeaturesKontakt = () => (
  <Section
    title="Skontaktuj się z nami"
    description="Napisz do nas wiadomość, aby uzyskać więcej informacji. Jeśli chcesz abyśmy dodali Cię do naszej bazy CV, stwórz CV za pomocą kreatora CV Be-Rising, do którego link znajdziesz na stronie głównej."
  >
    <VerticalFeatureRow
      title="Adres email"
      description="kontakt@rekrutuj365.pl"
      image="/assets/images/email.png"
      imageAlt="Kontakt email"
    />
    <VerticalFeatureRow
      title="Adres email dla pracodawców"
      description="pracodawca@rekrutuj365.pl"
      image="/assets/images/email.png"
      imageAlt="Kontakt email dla pracodawców"
      reverse
    />
  </Section>
);

export { VerticalFeaturesKontakt };
