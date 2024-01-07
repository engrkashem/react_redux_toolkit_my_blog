import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createdAt, likes } from "../../features/sort/sortSlice";

const Sort = () => {
  const [sortLike, setSortLikes] = useState(false);
  const [sortCreated, setSortCreated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sortLike) {
      dispatch(likes(true));
    } else if (sortCreated) {
      dispatch(createdAt(true));
    } else {
      dispatch(createdAt(false));
      dispatch(likes(false));
    }
  }, [dispatch, sortCreated, sortLike]);

  const handleSort = (e) => {
    const val = e.target.value;
    if (val === "newest") {
      setSortCreated(true);
      setSortLikes(false);
    } else if (val === "most_liked") {
      setSortCreated(false);
      setSortLikes(true);
    } else {
      setSortCreated(false);
      setSortLikes(false);
    }
    console.log(sortLike, sortCreated);
  };

  return (
    <div className="sidebar-content">
      <h4>Sort</h4>
      <select
        name="sort"
        id="lws-sort"
        className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
        onChange={handleSort}
      >
        <option value="default">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </div>
  );
};

export default Sort;
