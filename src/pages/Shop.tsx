import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Mountain, MapPin, QrCode, Hash } from "lucide-react";
import { Link } from "react-router-dom";
import swissAirJar from "@/assets/swiss-air-jar.png";
import PaymentModal from "@/components/PaymentModal";
import ProductModal from "@/components/ProductModal";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface JarProduct {
  id: string;
  mountain: string;
  altitude: string;
  region: string;
  series: "grindelwald" | "interlaken";
  price: number;
  available: boolean;
}

const products: JarProduct[] = [
  // Grindelwald Series
  { id: "eiger", mountain: "Eiger", altitude: "3 967 м", region: "Grindelwald", series: "grindelwald", price: 29, available: true },
  { id: "monch", mountain: "Mönch", altitude: "4 107 м", region: "Grindelwald", series: "grindelwald", price: 29, available: true },
  { id: "jungfrau", mountain: "Jungfrau", altitude: "4 158 м", region: "Grindelwald", series: "grindelwald", price: 29, available: true },
  { id: "first", mountain: "First", altitude: "2 168 м", region: "Grindelwald", series: "grindelwald", price: 25, available: true },
  { id: "wetterhorn", mountain: "Wetterhorn", altitude: "3 692 м", region: "Grindelwald", series: "grindelwald", price: 29, available: true },
  { id: "schreckhorn", mountain: "Schreckhorn", altitude: "4 078 м", region: "Grindelwald", series: "grindelwald", price: 29, available: false },
  
  // Interlaken Series
  { id: "harder-kulm", mountain: "Harder Kulm", altitude: "1 322 м", region: "Interlaken", series: "interlaken", price: 25, available: true },
  { id: "niesen", mountain: "Niesen", altitude: "2 362 м", region: "Interlaken", series: "interlaken", price: 27, available: true },
  { id: "brienzer-rothorn", mountain: "Brienzer Rothorn", altitude: "2 350 м", region: "Interlaken", series: "interlaken", price: 27, available: true },
  { id: "schynige-platte", mountain: "Schynige Platte", altitude: "2 076 м", region: "Interlaken", series: "interlaken", price: 25, available: true },
  { id: "mannlichen", mountain: "Männlichen", altitude: "2 343 м", region: "Interlaken", series: "interlaken", price: 27, available: false },
];

const Shop = () => {
  const { t } = useLanguage();
  const [selectedSeries, setSelectedSeries] = useState<"all" | "grindelwald" | "interlaken">("all");
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<JarProduct | null>(null);
  const [productModalOpen, setProductModalOpen] = useState(false);

  const filteredProducts = selectedSeries === "all" 
    ? products 
    : products.filter(p => p.series === selectedSeries);

  const handleProductClick = (product: JarProduct) => {
    setSelectedProduct(product);
    setProductModalOpen(true);
  };

  const handleBuyFromModal = () => {
    setProductModalOpen(false);
    setPaymentOpen(true);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-6 bg-alpine-mist border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{t('shopBackToHome')}</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="font-serif text-xl text-primary">#SwissAirGame</span>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-alpine-mist to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-6 text-foreground">
            {t('shopTitle')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('shopDescription')}
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <FeatureBadge icon={Mountain} text={t('shop3dPrint')} />
            <FeatureBadge icon={QrCode} text={t('shopQrInside')} />
            <FeatureBadge icon={Hash} text="#SwissAirGame" />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            <FilterButton 
              active={selectedSeries === "all"} 
              onClick={() => setSelectedSeries("all")}
            >
              {t('shopAllSeries')}
            </FilterButton>
            <FilterButton 
              active={selectedSeries === "grindelwald"} 
              onClick={() => setSelectedSeries("grindelwald")}
            >
              {t('shopGrindelwald')}
            </FilterButton>
            <FilterButton 
              active={selectedSeries === "interlaken"} 
              onClick={() => setSelectedSeries("interlaken")}
            >
              {t('shopInterlaken')}
            </FilterButton>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => handleProductClick(product)}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Game Element Section */}
      <section className="section-padding bg-alpine-mist">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
            {t('shopGameElement')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('shopGameElementText')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <GameStep number={1} text={t('shopStep1')} />
            <GameStep number={2} text={t('shopStep2')} />
            <GameStep number={3} text={t('shopStep3')} />
          </div>
        </div>
      </section>

      {/* Emotion Section */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-foreground">
            {t('shopNotJustAir')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <EmotionCard text={t('shopMemory')} />
            <EmotionCard text={t('shopMoment')} />
            <EmotionCard text={t('shopHeight')} />
            <EmotionCard text={t('shopPlaceYouWere')} />
            <EmotionCard text={t('shopPuritySymbol')} />
            <EmotionCard text={t('shopPartOfCollection')} />
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="section-padding bg-gradient-to-b from-alpine-mist to-alpine-sky/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-foreground">
            {t('shopShareSocial')}
          </h2>
          <p className="text-2xl font-serif text-primary mb-6">#SwissAirGame</p>
          <p className="text-muted-foreground mb-8">
            {t('shopShowHeight')}<br />
            {t('shopWhatAirHome')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('shopBestPhotos')}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-serif text-lg">#SwissAirGame</span>
          <p className="text-primary-foreground/60 text-sm mt-2">
            {t('shopFooter')}
          </p>
        </div>
      </footer>

      <ProductModal 
        product={selectedProduct}
        open={productModalOpen}
        onOpenChange={setProductModalOpen}
        onBuy={handleBuyFromModal}
      />
      <PaymentModal open={paymentOpen} onOpenChange={setPaymentOpen} />
    </main>
  );
};

// Helper Components
const FeatureBadge = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
    <Icon className="w-4 h-4" />
    <span className="text-sm font-medium">{text}</span>
  </div>
);

const FilterButton = ({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-full font-medium transition-all ${
      active 
        ? "bg-primary text-primary-foreground" 
        : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-foreground"
    }`}
  >
    {children}
  </button>
);

const ProductCard = ({ product, onClick, t }: { product: JarProduct; onClick: () => void; t: (key: string) => string }) => (
  <div 
    className="glass-card rounded-2xl p-6 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer group"
    onClick={onClick}
  >
    <img 
      src={swissAirJar} 
      alt={`${product.mountain} air jar`}
      className="w-32 h-32 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
    />
    <h3 className="font-serif text-2xl text-foreground mb-1">{product.mountain}</h3>
    <div className="flex items-center gap-2 text-primary font-medium mb-2">
      <Mountain className="w-4 h-4" />
      <span>{product.altitude}</span>
    </div>
    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
      <MapPin className="w-3 h-3" />
      <span>{product.region}</span>
    </div>
    <p className="text-2xl font-semibold text-foreground mb-4">CHF {product.price}</p>
    <span className={`text-sm font-medium ${product.available ? 'text-primary' : 'text-muted-foreground'}`}>
      {product.available ? t('shopClickDetails') : t('shopComingSoon')}
    </span>
  </div>
);

const GameStep = ({ number, text }: { number: number; text: string }) => (
  <div className="glass-card rounded-xl p-6">
    <span className="inline-flex w-10 h-10 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold mb-3">
      {number}
    </span>
    <p className="font-medium text-foreground">{text}</p>
  </div>
);

const EmotionCard = ({ text }: { text: string }) => (
  <div className="p-4 rounded-xl bg-primary/5 text-foreground font-medium">
    {text}
  </div>
);

export default Shop;
