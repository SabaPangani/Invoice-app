export default function BillFrom() {
  return (
    <div>
      <h2 className="text-purple-700 text-md font-bold mb-7">Bill From</h2>

      <div className="flex flex-col text-white gap-y-5">
        <div className="form-control w-full">
          <label htmlFor="address">Street Address</label>
          <input className="input" type="text" name="address" id="" />
        </div>
        <div className="flex flex-row justify-between">
          <div className="form-control">
            <label htmlFor="city">City</label>
            <input className="input" type="text" name="city" id="" />
          </div>
          <div className="form-control">
            <label htmlFor="postCode">Post Code</label>
            <input className="input" type="text" name="postCode" id="" />
          </div>
          <div className="form-control">
            <label htmlFor="country">Country</label>
            <input className="input" type="text" name="country" id="" />
          </div>
        </div>
      </div>
    </div>
  );
}
