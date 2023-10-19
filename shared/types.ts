export interface Invoice {
  id: number;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: Item[];
  total: number;
}

export interface Status {
  name: string;
  isChecked: boolean;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
