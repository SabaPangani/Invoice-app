'use client'
import { Invoice } from "@/shared/types";
import { METHODS } from "http";
import { createContext, useEffect, useState } from "react";
interface Props {
  children: React.ReactNode;
}

interface InvoiceState {
  invoices: Invoice[];
  addInvoice: (newInvoice: Invoice) => void;
  editInvoice: (id: Number, edited: Invoice) => void;
  deleteInvoice: (id: Number) => void;
}
export const InvoiceContext = createContext<InvoiceState>({
  invoices: [],
  addInvoice: (newInvoice: Invoice) => {},
  editInvoice: (id: Number, edited: Invoice) => {},
  deleteInvoice: (id: Number) => {},
});

export const InvoiceProvider: any = ({ children }: Props) => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await fetch("/api/invoice");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const invoices = await res.json();
        setInvoices(invoices);
      } catch (error: any) {
        throw new Error("Failed to fetch data: " + error.message);
      }
    };
    fetchInvoices();
  }, [invoices]);

  const addInvoice = () => {};
  const editInvoice = () => {};
  const deleteInvoice = () => {};
  return (
    <InvoiceContext.Provider
      value={{ invoices, addInvoice, editInvoice, deleteInvoice }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
