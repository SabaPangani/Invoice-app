import { Item } from "@/shared/types";
import { ChangeEvent, useState } from "react";
import { FaTrash } from "react-icons/fa";
interface Props {
  item: Item;
  onItemRemove: (id: number) => void;
  onItemNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onItemQtyChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onItemPriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function Item({
  item,
  onItemRemove,
  onItemNameChange,
  onItemPriceChange,
  onItemQtyChange,
}: Props) {
  //   const [itemName, setItemName] = useState("");
  //   const [itemQty, setItemQty] = useState(0);
  //   const [itemPrice, setItemPrice] = useState(0);

  return (
    <div className="flex flex-row justify-between items-center text-white">
      <input
        className="input w-[214px] mt-3"
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onItemNameChange(e);
        }}
      />
      <input
        className="input w-[46px] mt-3 px-1 text-center"
        maxLength={2}
        type="number"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onItemQtyChange(e);
        }}
      />
      <input
        className="input w-[100px] mt-3 px-4"
        type="number"
        maxLength={2}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onItemPriceChange(e);
        }}
      />
      <span className="text-white mt-3">{item.total}</span>
      <FaTrash
        className="mt-3 text-[#888EB0] hover:text-[#EC5757] cursor-pointer"
        onClick={onItemRemove}
      />
    </div>
  );
}
