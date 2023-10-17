import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import ItemList from "./ItemList";

interface Props {
    onShowForm: () => void
}

export default function InvoiceForm({onShowForm}: Props) {

  return (
    <>
      <div onClick={onShowForm} className="w-screen h-screen bg-black opacity-40 fixed left-0 top-0"></div>

      <div className="bg-dark h-screen w-form p fixed left-20 top-0 flex flex-col px-16 py-10 gap-y-10 overflow-y-scroll">
        <h1 className="text-white text-2xl font-bold">New Invoice</h1>

        <BillFrom />
        <BillTo />
        <ItemList />
      </div>
    </>
  );
}
