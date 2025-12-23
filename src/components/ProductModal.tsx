import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mountain, MapPin, QrCode, Hash, ShoppingCart, X } from "lucide-react";
import swissAirJar from "@/assets/swiss-air-jar.png";

interface JarProduct {
  id: string;
  mountain: string;
  altitude: string;
  region: string;
  series: "grindelwald" | "interlaken";
  price: number;
  available: boolean;
}

interface ProductModalProps {
  product: JarProduct | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBuy: () => void;
}

const ProductModal = ({ product, open, onOpenChange, onBuy }: ProductModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="bg-gradient-to-br from-alpine-mist to-alpine-sky/20 p-8 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
            <img 
              src={swissAirJar} 
              alt={`Баночка с воздухом ${product.mountain}`}
              className="w-48 md:w-64 h-48 md:h-64 object-contain animate-fade-in"
            />
          </div>
          
          {/* Info Section */}
          <div className="p-8 md:p-12 flex flex-col">
            <div className="mb-2">
              <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                {product.series === "grindelwald" ? "🏔 Серия Гриндельвальд" : "🌊 Серия Интерлакен"}
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              {product.mountain}
            </h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-lg">
                <Mountain className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">{product.altitude}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">{product.region}, Швейцария</span>
              </div>
            </div>
            
            <div className="border-t border-border pt-6 mb-6">
              <h3 className="font-medium text-foreground mb-3">Что на баночке:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mountain className="w-4 h-4" />
                  <span>Название горы</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-lg">⛰</span>
                  <span>Высота в метрах</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Регион</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <QrCode className="w-4 h-4" />
                  <span>QR-код</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                  <Hash className="w-4 h-4" />
                  <span>#SwissAirGame</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border pt-6 mb-6">
              <h3 className="font-medium text-foreground mb-2">Производство:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 3D-печать</li>
                <li>• Экологичный материал</li>
                <li>• Минималистичный альпийский дизайн</li>
              </ul>
            </div>
            
            <div className="mt-auto">
              <p className="text-3xl font-bold text-foreground mb-4">CHF {product.price}</p>
              <Button 
                variant={product.available ? "alpine" : "outline"}
                size="lg"
                className="w-full"
                disabled={!product.available}
                onClick={onBuy}
              >
                {product.available ? (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Купить сейчас
                  </>
                ) : (
                  "Скоро в продаже"
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
