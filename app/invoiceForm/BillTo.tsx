export default function BillTo() {
  return (
    <div>
      <h2 className="text-purple-700 text-sm font-bold mb-7">Bill To</h2>

      <form className="flex flex-col text-white gap-y-5">
        <div className="form-control w-full">
          <label htmlFor="address">Client's Name</label>
          <input className="input" type="text" name="clientName" id="" />
        </div>
        <div className="form-control w-full">
          <label htmlFor="address">Client's Email</label>
          <input className="input" type="text" name="clientEmail" id="" />
        </div>
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
        <div className="form-control w-full">
          <label htmlFor="address">Project Description</label>
          <input className="input" type="text" name="projectDesc" id="" placeholder="e.g. Graphic Design Service"/>
        </div>
      </form>
    </div>
  );
}