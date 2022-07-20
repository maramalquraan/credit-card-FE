export interface AddCardTemplatePropsInterface {
  creditCardNumber: string;
  setCreditCardNumber: (creditCardNumber: string) => void;
  handleSubmit: () => void;
  creditCardName: string;
  setCreditCardName: (creditCardHolderName: string) => void;
  error?: string;
}
