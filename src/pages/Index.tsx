import { useState } from "react";
import { MapPin, Camera, Mountain, Clock, Users, Leaf, Gift, Wind, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-grindelwald.jpg";
import edelweissImage from "@/assets/edelweiss-flower.png";
import swissAirJar from "@/assets/swiss-air-jar.png";
import PaymentModal from "@/components/PaymentModal";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToWhatIsThis = () => {
    const element = document.getElementById('what-is-this');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="Панорама Гриндельвальда в Швейцарских Альпах" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
        </div>

        {/* Header with Shop and Language */}
        <header className="absolute top-0 left-0 right-0 z-20 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="font-serif text-xl text-alpine-snow drop-shadow-lg">
              #SwissAirGame
            </div>
            <div className="flex items-center gap-4">
              <Link to="/shop">
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-2 text-alpine-snow hover:bg-alpine-snow/10 hover:text-alpine-snow border border-alpine-snow/30"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {t('souvenirShop')}
                </Button>
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-alpine-snow mb-6 drop-shadow-lg">
            #SwissAirGame
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-alpine-snow mb-4 italic drop-shadow-md">
            {t('heroSubtitle')}
          </p>
          <p className="text-alpine-snow/95 text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md whitespace-pre-line">
            {t('heroText')}
          </p>
          <Button variant="hero" size="xl" onClick={scrollToWhatIsThis}>
            {t('startJourney')}
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse-slow">
          <div className="w-6 h-10 rounded-full border-2 border-alpine-snow/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-alpine-snow/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* What is this section */}
      <section id="what-is-this" className="section-padding bg-alpine-mist">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-8 text-foreground">
            {t('whatIsThis')}
          </h2>
          <p className="text-lg md:text-xl text-center text-muted-foreground leading-relaxed mb-12">
            {t('whatIsThisText')}
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <FeatureCard icon={Clock} title={t('hours')} subtitle={t('leisurelyWalk')} />
            <FeatureCard icon={Users} title={t('forAll')} subtitle={t('couplesFamiliesSolo')} />
            <FeatureCard icon={Mountain} title={t('noRush')} subtitle={t('noCompetition')} />
            <FeatureCard icon={Leaf} title={t('withNature')} subtitle={t('inHarmony')} />
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-foreground">
            {t('howItWorks')}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <StepCard number={1} icon={MapPin} title={t('getRoute')} />
            <StepCard number={2} icon={Mountain} title={t('visitPlaces')} />
            <StepCard number={3} icon={Camera} title={t('completeTasks')} />
            <StepCard number={4} icon={Camera} title={t('takePhotos')} />
            <StepCard number={5} icon={Leaf} title={t('collectEdelweiss')} />
            <StepCard number={6} icon={Gift} title={t('getPrize')} />
          </div>
        </div>
      </section>

      {/* What awaits you section */}
      <section className="section-padding bg-gradient-to-b from-alpine-mist to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-12 text-foreground">
            {t('whatAwaits')}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <TaskCard text={t('panoramicViews')} />
            <TaskCard text={t('waterfalls')} />
            <TaskCard text={t('oldChalets')} />
            <TaskCard text={t('momentsOfSilence')} />
            <TaskCard text={t('photosNoFilters')} />
            <TaskCard text={t('attentionToDetail')} />
          </div>

          <p className="text-center text-muted-foreground text-lg italic max-w-2xl mx-auto whitespace-pre-line">
            {t('awaitsPoem')}
          </p>
        </div>
      </section>

      {/* Prize section */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <img src={swissAirJar} alt="Баночка со швейцарским воздухом" className="w-64 h-64 object-contain animate-float" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
                {t('realSwissAir')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t('prizeText')}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <PrizeBadge text={t('limitedEdition')} />
                <PrizeBadge text={t('uniqueNumber')} />
                <PrizeBadge text={t('placeAndAltitude')} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecology section */}
      <section className="section-padding bg-alpine-mist">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
            {t('ecologyTitle')}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
            {t('ecologyText')}
          </p>
        </div>
      </section>

      {/* Location section */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-foreground">
            {t('whereGame')}
          </h2>
          <p className="text-2xl font-serif text-primary mb-4">
            {t('grindelwald')}
          </p>
          <p className="text-muted-foreground">
            {t('locationNote')}
          </p>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-gradient-to-b from-background via-alpine-mist to-alpine-sky/20">
        <div className="max-w-3xl mx-auto text-center">
          <img src={edelweissImage} alt="Эдельвейс" className="w-24 h-24 mx-auto mb-8 animate-float" />
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
            {t('readyForJourney')}
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            {t('discoverGrindelwald')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={() => setPaymentOpen(true)}>
              {t('findEdelweiss')}
            </Button>
            <Link to="/shop">
              <Button variant="alpineOutline" size="xl">
                {t('souvenirShop')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wind className="w-5 h-5" />
            <span className="font-serif text-lg">#SwissAirGame</span>
          </div>
          <p className="text-primary-foreground/60 text-sm">
            {t('footerLocation')}
          </p>
        </div>
      </footer>

      <PaymentModal open={paymentOpen} onOpenChange={setPaymentOpen} />
    </main>
  );
};

// Feature Card Component
const FeatureCard = ({
  icon: Icon,
  title,
  subtitle
}: {
  icon: any;
  title: string;
  subtitle: string;
}) => (
  <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
    <h3 className="font-sans font-semibold text-foreground mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground">{subtitle}</p>
  </div>
);

// Step Card Component
const StepCard = ({
  number,
  icon: Icon,
  title
}: {
  number: number;
  icon: any;
  title: string;
}) => (
  <div className="text-center group">
    <div className="relative mb-4">
      <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
        {number}
      </span>
    </div>
    <p className="text-sm font-medium text-foreground">{title}</p>
  </div>
);

// Task Card Component
const TaskCard = ({
  text
}: {
  text: string;
}) => (
  <div className="glass-card rounded-xl p-5 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
    <span className="text-foreground font-medium">{text}</span>
  </div>
);

// Prize Badge Component
const PrizeBadge = ({
  text
}: {
  text: string;
}) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
    {text}
  </span>
);

export default Index;
