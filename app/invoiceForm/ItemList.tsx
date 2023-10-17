import { ChangeEvent, useState } from "react";
import { Item as ItemType } from "@/shared/types";
import Item from "./Item";
export default function ItemList() {
  const [tmpItemsList, setTmpItems] = useState<ItemType[]>([]);

  const tmpItemsListHandler = () => {
    setTmpItems((prevItemsList: ItemType[]) => {
      const maxId = prevItemsList.reduce(
        (max, item) => (item.id > max ? item.id : max),
        0
      );

      const newItem: ItemType = {
        id: maxId + 1,
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
      };

      return [...prevItemsList, newItem];
    });
  };

  const itemRemoveHandler = (id: number) => {
    setTmpItems(tmpItemsList.filter((item) => item.id !== id));
  };

  const itemNameHandler = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    setTmpItems((prevItemsList) =>
      prevItemsList.map((item, index) => {
        if (index === i) {
          return {
            ...item,
            name: e.target.value,
          };
        }
        return item;
      })
    );
  };
  const itemQtyHandler = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    setTmpItems((prevItemsList) =>
      prevItemsList.map((item, index) => {
        if (index === i) {
          return {
            ...item,
            quantity: +e.target.value,
            total: +e.target.value * item.price,
          };
        }
        return item;
      })
    );
  };
  const itemPriceHandler = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    setTmpItems((prevItemsList) =>
      prevItemsList.map((item, index) => {
        if (index === i) {
          return {
            ...item,
            price: +e.target.value,
            total: +e.target.value * item.quantity,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <h1 className="text-gray-500 text-xl font-bold mb-7">Item List</h1>
      <div>
        <div className="flex flex-row justify-between text-[#DFE3FA]">
          <span className="text-[13px]">Item Name</span>
          <div className="flex flex-row ml-[86px] gap-x-12">
            <span className="text-[13px]">Qty.</span>
            <span className="text-[13px]">Price</span>
          </div>
          <span className="text-[13px] mr-10">Total</span>
        </div>
        <ul>
          {tmpItemsList.map((item, i) => (
            <li>
              <Item
                key={i}
                item={item}
                onItemRemove={() => {
                  itemRemoveHandler(i);
                }}
                onItemNameChange={(e) => {
                  itemNameHandler(e, i);
                }}
                onItemQtyChange={(e) => {
                  itemQtyHandler(e, i);
                }}
                onItemPriceChange={(e) => {
                  itemPriceHandler(e, i);
                }}
              />
            </li>
          ))}
        </ul>
        <button
          onClick={tmpItemsListHandler}
          className="text-center text-white font-bold text-md bg-primary w-full rounded-full py-3 mt-5"
        >
          + Add New Item
        </button>
      </div>
    </div>
  );
}

// name={item.name} quantity={item.quantity} price={item.price} total={item.total}
