function Application() {
  return (
    <div className="p-5">
      <form className="grid w-fit grid-cols-1 items-center justify-start gap-5">
        <div className="items-center">
          <label className="me-3 font-bold" htmlFor="name">
            Name
          </label>
          <input
            className="p-2"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name..."
          />
        </div>
        <div className="items-center">
          <label className="me-3 font-bold" htmlFor="job-location">
            Job Location
          </label>
          <select className="p-3" name="job-location" id="job-location">
            <option className="bg-red-400 text-black" disabled value="">
              Select a country
            </option>
            <option value="US">United States</option>
            <option value="IND">India</option>
            <option value="CHN">China</option>
            <option value="AUS">Australia</option>
          </select>
        </div>
        <div className="items-center">
          <label className="me-3 font-bold" htmlFor="terms">
            Agree to Terms & Conditions?{" "}
            <span>
              <input type="checkbox" name="terms" id="terms" />
            </span>
          </label>
        </div>
        <button className="yellow-btn btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Application;
