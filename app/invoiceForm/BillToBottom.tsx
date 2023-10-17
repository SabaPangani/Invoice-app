import DatePicker from "react-datepicker";
import { useState } from "react";
import {
  AiOutlineCalendar,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
export default function BillToBottom() {
  const [show, setShow] = useState(false);
  const [flipArrow, setFlipArrow] = useState(false);
  return (
    <>
      <div className="form-control w-full">
        <label htmlFor="address">Project Description</label>
        <input
          className="input"
          type="text"
          name="projectDesc"
          id=""
          placeholder="e.g. Graphic Design Service"
        />
      </div>
      <div className="relative flex flex-row gap-x-5 justify-between">
        <div className="flex flex-col">
          <span className="text-white text-sm font-bold mb-3">
            Invoice Date
          </span>
          <div className="flex flex-row items-center">
            <DatePicker
              className="input w-52"
              dateFormat={"dd MMM yyyy"}
              selected={null}
              onChange={() => {}}
              placeholderText="DD MMM YYYY"
            />
            <AiOutlineCalendar className="absolute left-44 top-12" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-white text-sm font-bold mb-3">
            Payment Terms
          </span>
          <div
            className="input w-52 flex flex-row items-center content-between px-5 relative"
            onClick={() => {
              setShow(!show);
              setFlipArrow(!flipArrow);
            }}
          >
            <span className="font-bold">Net 30 Days</span>
            {flipArrow ? (
              <AiFillCaretUp className="ml-16" color="#7C5DFA" />
            ) : (
              <AiFillCaretDown className="ml-16" color="#7C5DFA" />
            )}

            {show && (
              <ul className="flex flex-col bg-primary text-white absolute w-52 p-4 rounded-lg left-0 top-14 gap-y-6">
                <li className="before text-sm w-full font-bold">Net 1 Day</li>
                <li className="before relative text-sm w-full font-bold">
                  Net 7 Days
                </li>
                <li className="before relative text-sm w-full font-bold">
                  Net 14 Days
                </li>
                <li className="relative text-sm w-full font-bold">
                  Net 30 Days
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
