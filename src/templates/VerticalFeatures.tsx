import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Agencja zatrudnienia Rekrutuj365"
    description="Witaj w naszej agencji pracy, miejscu, gdzie Twoje zawodowe marzenia stają się rzeczywistością! Jesteśmy tu po to, by Ci pomóc w osiągnięciu sukcesu zawodowego oraz zapewnić Ci najlepsze rozwiązania rekrutacyjne, które sprostają Twoim oczekiwaniom. Korzystanie z usług naszej agencji otwiera przed Tobą szereg zalet, które sprawią, że proces poszukiwania pracy lub znalezienie idealnego pracownika stanie się szybszy, łatwiejszy i bardziej efektywny.

    Pierwszą i najważniejszą zaletą korzystania z agencji pracy jest indywidualne podejście. Rozumiemy, że każda osoba i firma jest inna, dlatego też nasza praca opiera się na dogłębnym zrozumieniu Twoich potrzeb, celów i oczekiwań. Niezależnie od tego, czy jesteś kandydatem poszukującym nowych możliwości zawodowych, czy przedsiębiorcą poszukującym idealnego pracownika, dostosujemy nasze usługi do Twoich wymagań, zapewniając Ci personalizowane wsparcie na każdym etapie.
    
    Kolejną zaletą, która wyróżnia naszą agencję, jest solidna selekcja kandydatów. Dzięki naszemu doświadczeniu i eksperckiej wiedzy jesteśmy w stanie dokładnie ocenić umiejętności, doświadczenie oraz potencjał każdego kandydata. Przeprowadzamy staranne badania, weryfikujemy referencje i prowadzimy rozmowy kwalifikacyjne, aby zapewnić Ci dostęp do najlepszych profesjonalistów na rynku pracy.
    
    Szybkość działania to kolejny atut, którym się wyróżniamy. Działamy sprawnie i efektywnie, minimalizując czas oczekiwania zarówno dla pracodawców, jak i kandydatów. Rozumiemy, jak ważne jest dla Ciebie szybkie znalezienie pracy lub pracownika, dlatego też podejmujemy wszelkie działania, aby proces rekrutacji przebiegał jak najszybciej i jak najbardziej sprawnie.
    
    Wspieramy Cię również na każdym etapie procesu rekrutacyjnego, zapewniając kompleksowe wsparcie i doradztwo. Nasz zespół ekspertów służy Ci pomocą w analizie potrzeb, selekcji kandydatów, prowadzeniu rozmów kwalifikacyjnych oraz finalnym procesie zatrudnienia. Możesz liczyć na naszą profesjonalną pomoc i wsparcie na każdym kroku.
    
    Bezpieczeństwo i dyskrecja to dla nas priorytet. Dbamy o pełną poufność informacji, zarówno tych dotyczących pracodawców, jak i kandydatów. Twoje dane są u nas bezpieczne, a każda informacja traktowana jest z najwyższą troską i szacunkiem.
    
    Długofalowe relacje to kolejny filar naszej działalności. Budujemy trwałe partnerstwa oparte na wzajemnym zaufaniu i zrozumieniu. Naszym celem jest nie tylko znalezienie dla Ciebie pracy lub pracownika, ale także wspieranie Cię w osiąganiu długoterminowego sukcesu zawodowego.
    
    Ostatnią, ale nie mniej istotną zaletą naszej agencji jest dostosowanie do zmieniających się potrzeb rynku pracy. Śledzimy najnowsze trendy i zmiany na rynku, stale doskonaląc nasze podejście, aby zapewnić Ci najlepsze rozwiązania rekrutacyjne, które będą odpowiadały na bieżące i przyszłe wyzwania.
    
    Zaufaj naszej agencji pracy i pozwól nam wesprzeć Cię w osiągnięciu sukcesu zawodowego. Razem możemy osiągnąć wszystko!"
  >
    <VerticalFeatureRow
      title="Indywidualne podejście"
      description="Dbamy o indywidualne potrzeby zarówno pracodawców, jak i kandydatów, dostosowując nasze usługi do ich wymagań i oczekiwań."
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
      title="Wsparcie na każdym etapie"
      description="Zapewniamy kompleksową pomoc i wsparcie na każdym etapie rekrutacji, począwszy od analizy potrzeb, poprzez selekcję kandydatów, aż po finalne zatrudnienie."
      image="/assets/images/feature3.svg"
      imageAlt="Wsparcie na każdym etapie"
    />
  </Section>
);

export { VerticalFeatures };
