import Filter from "./Filter";
import { AiFillPlusCircle } from "react-icons/ai";
export default function Header() {
  return (
    <div>
      <div className="flex flex-row gap-x-4 justify-between items-center">
        <div>
          <h1 className="text-white text-4xl font-semibold">Invoices</h1>
          <span className="text-white text-sm">There are 7 total invoices</span>
        </div>
        <div className="flex flex-row gap-x-20 items-center">
          <Filter />
          <button className="bg-btn text-white font-semibold w-44 h-16 rounded-full flex flex-row items-center justify-center gap-x-4 px-3">
            <AiFillPlusCircle size={40}/> New Invoice
          </button>
        </div>
      </div>
    </div>
  );
}
