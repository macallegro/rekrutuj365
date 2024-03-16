import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeaturesAbout = () => (
  <Section
    title="O nas"
    description="Naszą główną misją jest tworzenie synergii pomiędzy utalentowanymi jednostkami a przedsiębiorstwami, które poszukują profesjonalistów z pasją i kompetencjami. Nasza agencja pośrednictwa pracy to miejsce, gdzie doświadczenie spotyka się z ambicją, tworząc idealne warunki do rozwoju dla wszystkich zaangażowanych stron."
  >
    <VerticalFeatureRow
      title="Profesjonalizm"
      description="Nasz zespół składa się z doświadczonych ekspertów, którzy nie tylko posiadają głęboką wiedzę na temat rynku pracy, ale także angażują się w każdy projekt z zaangażowaniem i pasją. Działamy zgodnie z najwyższymi standardami etycznymi, zapewniając uczciwość, transparentność i pełną poufność."
      image="/assets/images/profesjonalizm.png"
      imageAlt="Profesjonalizm"
    />
    <VerticalFeatureRow
      title="Indywidualne podejście"
      description="Rozumiemy, że każdy klient i kandydat ma inne potrzeby i oczekiwania. Dlatego też nasze podejście opiera się na indywidualnym podejściu, które pozwala nam dopasować nasze usługi do konkretnych potrzeb i sytuacji."
      image="/assets/images/female.png"
      imageAlt="Indywidualne podejście"
      reverse
    />
    <VerticalFeatureRow
      title="Innowacyjność"
      description="Świat pracy stale się zmienia, dlatego też nieustannie poszukujemy nowych rozwiązań i metod, które pozwolą nam sprostać wyzwaniom współczesnego rynku. Dążymy do ciągłego doskonalenia naszych procesów, aby zapewnić naszym klientom najlepsze możliwe rezultaty."
      image="/assets/images/bulb.png"
      imageAlt="Innowacyjność"
    />
  </Section>
);

export { VerticalFeaturesAbout };
