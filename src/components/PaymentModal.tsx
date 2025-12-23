import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreditCard, Smartphone } from "lucide-react";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PaymentModal = ({ open, onOpenChange }: PaymentModalProps) => {
  const handlePayment = (method: string) => {
    // Placeholder for payment logic
    console.log(`Payment method selected: ${method}`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-center">
            Выберите способ оплаты
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          <Button
            variant="outline"
            className="h-14 justify-start gap-4 px-6 hover:bg-foreground hover:text-background transition-colors"
            onClick={() => handlePayment("apple_pay")}
          >
            <Smartphone className="w-6 h-6" />
            <span className="text-lg font-medium">Apple Pay</span>
          </Button>
          
          <Button
            variant="outline"
            className="h-14 justify-start gap-4 px-6 hover:bg-foreground hover:text-background transition-colors"
            onClick={() => handlePayment("google_pay")}
          >
            <Smartphone className="w-6 h-6" />
            <span className="text-lg font-medium">Google Pay</span>
          </Button>
          
          <Button
            variant="outline"
            className="h-14 justify-start gap-4 px-6 hover:bg-foreground hover:text-background transition-colors"
            onClick={() => handlePayment("card")}
          >
            <CreditCard className="w-6 h-6" />
            <span className="text-lg font-medium">Visa / MasterCard</span>
          </Button>
          
          <Button
            variant="outline"
            className="h-14 justify-start gap-4 px-6 hover:bg-foreground hover:text-background transition-colors"
            onClick={() => handlePayment("paypal")}
          >
            <span className="text-lg font-bold text-[hsl(var(--accent))]">P</span>
            <span className="text-lg font-medium">PayPal</span>
          </Button>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Безопасная оплата • SSL шифрование
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
