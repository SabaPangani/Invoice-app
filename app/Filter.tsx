"use client";
import { useState } from "react";

export default function Filter() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col relative">
      <span
        onClick={() => {
          setShow(!show);
        }}
        className="text-white font-semibold cursor-pointer text-lg"
      >
        Filter by status
      </span>

      {show && (
        <ul className="flex flex-col gap-x-5 bg-primary w-40 px-5 py-4 absolute -left-5 top-10 rounded-2xl">
          <li className="text-white">
            <input type="checkbox" name="Draft" id="box" className="mr-2" />
            <label htmlFor="box">Draft</label>
          </li>
          <li className="text-white">
            <input type="checkbox" name="Paid" id="box" className="mr-2" />
            <label htmlFor="box">Paid</label>
          </li>
          <li className="text-white">
            <input type="checkbox" name="Pending" id="box" className="mr-2" />
            <label htmlFor="box">Pending</label>
          </li>
        </ul>
      )}
    </div>
  );
}
