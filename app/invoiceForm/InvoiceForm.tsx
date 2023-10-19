import { useState, useContext, useEffect } from "react";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import ItemList from "./ItemList";
import { Invoice, Item } from "@/shared/types";
import { InvoiceContext } from "@/lib/store/invoice-context";
import { emptyInvoice } from "@/lib/utils/EmptyInvoice";

interface Props {
  onShowForm: () => void;
}

export default function InvoiceForm({ onShowForm }: Props) {
  const ctx = useContext(InvoiceContext);
  const [items, setItems] = useState<Item[]>([]);
  const [data, setData] = useState<Invoice>(ctx.invoices[0] || emptyInvoice());

  const handleBillToData = (billToData: any) => {
    setData((prevData) => ({
      ...prevData,
      clientName: billToData.clientName,
      clientAddress: billToData.clientAddress,
      streedAdress: billToData.streedAdress,
      city: billToData.city,
      postCode: billToData.postCode,
      country: billToData.country,
    }));
  };

  useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        items,
      };
    });
  }, [data]);

  console.log(items);
  return (
    <>
      <div
        onClick={onShowForm}
        className="w-screen h-screen bg-black opacity-40 fixed left-0 top-0"
      ></div>

      <form className="bg-dark h-screen w-form p fixed left-20 top-0 flex flex-col px-16 py-10 gap-y-10 overflow-y-scroll">
        <h1 className="text-white text-2xl font-bold">New Invoice</h1>

        <BillTo onBillToData={handleBillToData} />
        <BillFrom />
        <ItemList setItems={setItems} items={items} />
      </form>
    </>
  );
}
