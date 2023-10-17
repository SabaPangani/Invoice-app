"use client";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export default function Filter() {
  const [show, setShow] = useState(false);
  const [flipArrow, setFlipArrow] = useState(false);
  return (
    <div className="flex flex-col relative">
      <span
        onClick={() => {
          setShow(!show);
          setFlipArrow(!flipArrow);
        }}
        className="text-white font-semibold cursor-pointer text-lg flex flex-row items-center gap-x-3"
      >
        Filter by status{" "}
        {flipArrow ? (
          <AiFillCaretUp color="#7C5DFA" />
        ) : (
          <AiFillCaretDown color="#7C5DFA" />
        )}
      </span>

      {show && (
        <ul className="flex flex-col gap-x-5 bg-primary w-40 px-5 py-4 absolute -left-2 top-10 rounded-2xl">
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
