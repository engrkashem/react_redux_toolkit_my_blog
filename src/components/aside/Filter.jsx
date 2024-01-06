import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { all, saved } from "../../features/filter/filterSlice";

const Filter = () => {
  const [filter, setFilter] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filter) {
      dispatch(saved(true));
    } else {
      dispatch(all(true));
    }
  }, [dispatch, filter]);

  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        {/* <!-- handle filter on button click --> */}
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            defaultChecked
            className="radio"
            onChange={() => setFilter(false)}
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-saved"
            className="radio"
            onChange={() => setFilter(true)}
          />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
