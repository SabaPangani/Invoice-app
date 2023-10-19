import Filter from "./Filter";
import { AiFillPlusCircle } from "react-icons/ai";

interface Props {
  onShowForm: () => void;
}
export default function Header({ onShowForm }: Props) {
  const data = {
    id: 1,
    clientAddressId: 1,
    clientEmail: "spangani37@gmail.com",
    clientName: "saba",
    createdAt: new Date(2020),
    description: "wasd",
    holderId: 1,
    paymentDue: new Date(2020),
    paymentTerms: 20,
    senderAddressId: 1,
    status: "Pending",
    total: 20,
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
