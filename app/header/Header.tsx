import Filter from "./Filter";
import { AiFillPlusCircle } from "react-icons/ai";

interface Props {
  onShowForm: () => void;
}
export default function Header({ onShowForm }: Props) {
  const data = {
    createdAt: "2023-10-20T08:00:00Z",
    paymentDue: "2023-10-30T08:00:00Z",
    description: "Sample invoice description",
    paymentTerms: 30,
    clientName: "Client Name",
    clientEmail: "client@example.com",
    status: "Pending",
    holderId: 1,
    senderAddress: {
      street: "123 Main St",
      city: "Sample City",
      postCode: "12345",
      country: "Sample Country",
    },
    clientAddress: {
      street: "456 Elm St",
      city: "Client City",
      postCode: "54321",
      country: "Client Country",
    },
    items: [
      {
        name: "Item 1",
        quantity: 2,
        price: 10.0,
        total: 20.0,
      },
      {
        name: "Item 2",
        quantity: 3,
        price: 15.0,
        total: 45.0,
      },
    ],
    total: 65.0,
  };
  return (
    <>
      <div className="flex flex-row gap-x-4 justify-between items-center ml-20">
        <div>
          <h1
            className="text-white text-4xl font-semibold"
            onClick={async () => {
              await fetch("/api/addInvoice", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
            }}
          >
            Invoices
          </h1>
          <span className="text-white text-sm">There are 7 total invoices</span>
        </div>
        <div className="flex flex-row gap-x-20 items-center">
          <Filter />
          <button
            onClick={onShowForm}
            className="bg-btn text-white font-semibold w-44 h-16 rounded-full flex flex-row items-center justify-center gap-x-4 px-3"
          >
            <AiFillPlusCircle size={40} /> New Invoice
          </button>
        </div>
      </div>
    </>
  );
}
