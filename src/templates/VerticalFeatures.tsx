import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Agencja rekrutacyjna Rekrutuj365"
    description="Potrzebujesz profesjonalnej pomocy w znalezieniu nowej pracy lub dobrych pracowników? Nasza agencja pracy to odpowiedź na Twoje potrzeby. Specjalizujemy się w łączeniu utalentowanych kandydatów z renomowanymi firmami, zapewniając kompleksową obsługę rekrutacyjną. Dzięki naszemu doświadczeniu i szerokiemu zakresowi usług, zapewniamy efektywne dopasowanie kwalifikacji oraz potrzeb pracodawców i pracowników. Skorzystaj z naszej pomocy, aby znaleźć drogę do sukcesu zawodowego!"
  >
    <VerticalFeatureRow
      title="Indywidualne podejście"
      description="Dbamy o indywidualne potrzeby zarówno pracodawców, jak i kandydatów szukających zatrudnienia, dostosowując nasze usługi do ich wymagań i oczekiwań."
      image="/assets/images/feature.svg"
      imageAlt="Indywidualne podejście"
    />
    <VerticalFeatureRow
      title="Rzetelna selekcja kandydatów"
      description="Przeprowadzamy staranne selekcje kandydatów, weryfikując ich doświadczenie, umiejętności oraz zgodność z wymaganiami stanowiska."
      image="/assets/images/feature2.svg"
      imageAlt="Rzetelna selekcja kandydatów"
      reverse
    />
    <VerticalFeatureRow
      title="Wsparcie na każdym etapie poszukiwania pracy"
      description="Zapewniamy kompleksową pomoc i wsparcie na każdym etapie rekrutacji, począwszy od analizy potrzeb, poprzez selekcję kandydatów, aż po finalne zatrudnienie."
      image="/assets/images/feature3.svg"
      imageAlt="Wsparcie na każdym etapie poszukiwania pracy"
    />
  </Section>
);

export { VerticalFeatures };
