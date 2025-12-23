import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PaymentModal = ({ open, onOpenChange }: PaymentModalProps) => {
  const handlePayment = (method: string) => {
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
          {/* Apple Pay */}
          <Button
            variant="outline"
            className="h-14 justify-start gap-4 px-6 hover:bg-foreground hover:text-background transition-colors"
            onClick={() => handlePayment("apple_pay")}
          >
            <svg viewBox="0 0 50 20" className="h-5 w-auto" fill="currentColor">
              <path d="M9.6 4.2c.5-.7.9-1.6.8-2.5-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.7-.4 2.3-1.1zm.8 1.3c-1.3-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7C3.2 5.6 1.7 7 1.7 9.7c0 1.7.7 3.5 1.5 4.6.7 1 1.5 1.9 2.6 1.9 1 0 1.4-.7 2.7-.7 1.2 0 1.5.7 2.6.7 1.1 0 1.8-.9 2.5-1.9.6-.9 1-1.7 1.3-2.2 0 0-2.5-1-2.5-3.8 0-2.4 1.9-3.5 2-3.6-.8-1.3-2.5-1.4-2.8-1.4l-.2.2z"/>
              <path d="M21.6 1.5c3.3 0 5.6 2.3 5.6 5.6 0 3.3-2.4 5.6-5.7 5.6h-3.6v5.8h-2.7V1.5h6.4zm-3.7 9h3c2.3 0 3.6-1.2 3.6-3.4 0-2.2-1.3-3.4-3.6-3.4h-3v6.8zm13.2 7.2c-1.9 0-3.1-1.1-3.1-2.8 0-1.8 1.2-2.8 3.5-3l2.7-.2v-.8c0-1.2-.8-1.8-2.1-1.8-1.1 0-1.9.5-2.1 1.4h-2.4c.1-2 1.9-3.5 4.6-3.5 2.7 0 4.5 1.4 4.5 3.7v7.7h-2.5v-1.9h-.1c-.6 1.3-2 2.1-3.4 2.1l.4.1zm.7-2c1.5 0 2.6-1 2.6-2.4v-.8l-2.4.1c-1.4.1-2.1.7-2.1 1.6 0 .9.8 1.5 1.9 1.5zm7.7 6.6v-2.1c.2 0 .6.1.9.1 1 0 1.6-.4 2-1.5l.2-.6-4.3-11.9h2.8l2.9 9.3h.1l2.9-9.3H50l-4.4 12.5c-1 2.8-2.1 3.7-4.5 3.7-.3 0-.8-.1-1.1-.1l-.2-.1z"/>
            </svg>
            <span className="text-lg font-medium">Apple Pay</span>
          </Button>
          
          {/* Google Pay */}
          <Button
            variant="outline"
            className="h-14 justify-start gap-4 px-6 hover:bg-foreground hover:text-background transition-colors"
            onClick={() => handlePayment("google_pay")}
          >
            <svg viewBox="0 0 40 16" className="h-5 w-auto">
              <path fill="#4285F4" d="M15.83 8.26v3.1h-1.52V2.2h4.02c.97 0 1.8.32 2.49.97.7.65 1.05 1.44 1.05 2.37 0 .96-.35 1.75-1.05 2.39-.68.64-1.51.96-2.49.96h-2.5v-.63zm0-4.74v3.42h2.53c.58 0 1.07-.19 1.47-.57.4-.39.61-.86.61-1.42 0-.55-.2-1.01-.6-1.4-.4-.4-.9-.6-1.48-.6h-2.53v.57z"/>
              <path fill="#34A853" d="M24.64 5.02c1.12 0 2 .3 2.65.9.66.6.98 1.42.98 2.47v4.97h-1.45v-1.12h-.07c-.62.92-1.45 1.37-2.49 1.37-.88 0-1.62-.26-2.21-.79-.6-.52-.89-1.18-.89-1.96 0-.83.31-1.49.94-1.97.62-.49 1.46-.73 2.5-.73.9 0 1.63.16 2.2.5v-.35c0-.53-.21-.97-.63-1.34-.42-.36-.92-.55-1.5-.55-.86 0-1.54.36-2.04 1.1l-1.34-.84c.74-1.1 1.83-1.66 3.35-1.66zm-1.96 5.55c0 .4.17.73.5.99.34.27.74.4 1.2.4.65 0 1.22-.24 1.7-.71.5-.48.74-1.04.74-1.69-.46-.38-1.1-.57-1.93-.57-.6 0-1.1.15-1.5.44-.41.3-.61.67-.61 1.09l-.1.05z"/>
              <path fill="#FBBC04" d="M35.75 5.27l-5.03 11.57h-1.56l1.87-4.02-3.31-7.55h1.64l2.39 5.77h.03l2.33-5.77h1.64z"/>
              <path fill="#EA4335" d="M10.14 7.04c0-.46-.04-.9-.11-1.32H5.18v2.5h2.78c-.12.64-.48 1.18-1.02 1.54v1.28h1.66c.97-.89 1.53-2.2 1.53-3.76l.01-.24z"/>
              <path fill="#4285F4" d="M5.18 12.27c1.38 0 2.54-.46 3.39-1.23l-1.66-1.28c-.46.31-1.04.49-1.73.49-1.33 0-2.46-.9-2.86-2.1H.6v1.32c.84 1.67 2.57 2.8 4.58 2.8z"/>
              <path fill="#34A853" d="M2.32 8.15c-.1-.31-.16-.64-.16-.98 0-.34.06-.67.16-.98V4.87H.6C.22 5.62 0 6.47 0 7.37s.22 1.75.6 2.5l1.72-1.32v-.4z"/>
              <path fill="#FBBC04" d="M5.18 4.1c.75 0 1.42.26 1.95.76l1.46-1.46C7.7 2.58 6.55 2.1 5.18 2.1 3.17 2.1 1.44 3.23.6 4.9l1.72 1.33c.4-1.21 1.53-2.1 2.86-2.1v-.03z"/>
            </svg>
            <span className="text-lg font-medium">Google Pay</span>
          </Button>
          
          {/* Visa / MasterCard */}
          <Button
            variant="outline"
            className="h-14 justify-start gap-4 px-6 hover:bg-foreground hover:text-background transition-colors"
            onClick={() => handlePayment("card")}
          >
            <div className="flex items-center gap-2">
              {/* Visa */}
              <svg viewBox="0 0 48 16" className="h-4 w-auto">
                <path fill="#1A1F71" d="M19.5 1l-4.3 14h-3.5L8.4 4.4c-.2-.7-.4-1-.8-1.3-.7-.4-1.9-.8-2.9-1L4.9 1h5.6c.7 0 1.4.5 1.5 1.4l1.4 7.4L16.8 1h2.7zm3 14h-2.6l1.6-14h2.6l-1.6 14zm13.2-9.2c0-1.3-1.3-1.9-2.6-1.9-1.7 0-2.9.9-2.9.9l-.6-2s1.5-1.1 3.9-1.1c2.1 0 4.4 1.1 4.4 3.9 0 5.2-7 4.4-7 6.9 0 .8.7 1.1 1.6 1.1 1.5 0 2.9-.8 2.9-.8l.7 2.2s-1.6 1-3.9 1c-2.5 0-4.2-1.4-4.2-3.5-.1-4.9 7.6-4.4 7.6-6.7h.1zm9.8 9.2l-.4-1.7h-4.3l-.7 1.7h-3l5.2-14h3.4l3.1 14h-3.3zm-1-4.4l-.5-2.4c-.1-.5-.4-1.5-.5-2 0 0-.2.7-.8 2.1l-.7 2.3h2.5z"/>
              </svg>
              {/* MasterCard */}
              <svg viewBox="0 0 32 20" className="h-5 w-auto">
                <circle fill="#EB001B" cx="10" cy="10" r="10"/>
                <circle fill="#F79E1B" cx="22" cy="10" r="10"/>
                <path fill="#FF5F00" d="M16 2.8c2.4 1.8 4 4.6 4 7.7s-1.6 5.9-4 7.7c-2.4-1.8-4-4.6-4-7.7s1.6-5.9 4-7.7z"/>
              </svg>
            </div>
            <span className="text-lg font-medium">Visa / MasterCard</span>
          </Button>
          
          {/* PayPal */}
          <Button
            variant="outline"
            className="h-14 justify-start gap-4 px-6 hover:bg-foreground hover:text-background transition-colors"
            onClick={() => handlePayment("paypal")}
          >
            <svg viewBox="0 0 100 24" className="h-5 w-auto">
              <path fill="#003087" d="M12.5 2.7h-6c-.4 0-.7.3-.8.6L3.2 19.8c0 .3.2.5.5.5h2.9c.4 0 .7-.3.8-.6l.7-4.3c0-.4.4-.6.8-.6h1.8c3.7 0 5.8-1.8 6.4-5.3.3-1.5 0-2.7-.7-3.6-.8-.9-2.3-1.2-4-1.2h.1zm.6 5.2c-.3 2-1.8 2-3.3 2h-.8l.6-3.7c0-.2.2-.3.4-.3h.4c1 0 2 0 2.5.6.3.3.4.8.2 1.4z"/>
              <path fill="#003087" d="M35.2 7.8h-2.9c-.2 0-.4.1-.4.3l-.1.8-.2-.3c-.6-.9-2-1.2-3.4-1.2-3.2 0-5.9 2.4-6.4 5.8-.3 1.7.1 3.3 1.1 4.4.9 1 2.2 1.4 3.7 1.4 2.6 0 4.1-1.7 4.1-1.7l-.1.8c0 .3.2.5.5.5H34c.4 0 .7-.3.8-.6l1.4-9.6c0-.3-.2-.6-.5-.6h-.5zm-4.1 5.6c-.3 1.6-1.5 2.7-3.2 2.7-.8 0-1.5-.3-1.9-.7-.4-.5-.6-1.1-.5-1.9.2-1.6 1.6-2.7 3.1-2.7.8 0 1.5.3 1.9.7.5.5.6 1.2.6 1.9z"/>
              <path fill="#003087" d="M55.2 7.8h-2.9c-.2 0-.5.1-.6.3l-3.4 5-1.4-4.8c-.1-.3-.4-.5-.7-.5h-2.8c-.3 0-.5.3-.4.6l2.7 8-2.6 3.6c-.2.3 0 .7.4.7h2.9c.2 0 .5-.1.6-.3l8.2-11.9c.2-.3 0-.7-.4-.7h.4z"/>
              <path fill="#009CDE" d="M67.7 2.7h-6c-.4 0-.7.3-.8.6L58.5 20c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.4l.7-4.5c0-.4.4-.6.8-.6h1.8c3.7 0 5.8-1.8 6.4-5.3.3-1.5 0-2.7-.7-3.6-.9-1-2.3-1.4-4-1.4h.2zm.6 5.2c-.3 2-1.8 2-3.3 2H64l.6-3.7c0-.2.2-.3.4-.3h.4c1 0 2 0 2.5.6.3.3.4.8.2 1.4h.2z"/>
              <path fill="#009CDE" d="M90.4 7.8h-2.9c-.2 0-.4.1-.4.3l-.1.8-.2-.3c-.6-.9-2-1.2-3.4-1.2-3.2 0-5.9 2.4-6.4 5.8-.3 1.7.1 3.3 1.1 4.4.9 1 2.2 1.4 3.7 1.4 2.6 0 4.1-1.7 4.1-1.7l-.1.8c0 .3.2.5.5.5h2.6c.4 0 .7-.3.8-.6l1.4-9.6c.1-.3-.1-.6-.4-.6h-.3zm-4.1 5.6c-.3 1.6-1.5 2.7-3.2 2.7-.8 0-1.5-.3-1.9-.7-.4-.5-.6-1.1-.5-1.9.2-1.6 1.6-2.7 3.1-2.7.8 0 1.5.3 1.9.7.5.5.7 1.2.6 1.9z"/>
              <path fill="#009CDE" d="M93.7 3l-2.6 16.3c0 .3.2.5.5.5h2.5c.4 0 .7-.3.8-.6L97.3 3c0-.3-.2-.5-.5-.5h-2.6c-.2 0-.4.2-.5.5z"/>
            </svg>
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
