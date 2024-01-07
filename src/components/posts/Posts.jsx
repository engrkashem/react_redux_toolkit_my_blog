import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { useEffect, useMemo } from "react";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Loading from "../shared/Loading";
import ErrorComponent from "../shared/ErrorComponent";

const Posts = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  const { saved } = useSelector((state) => state.filter);
  const { createdAt, likes } = useSelector((state) => state.sort);

  useEffect(() => {
    dispatch(fetchBlogs(saved));
  }, [dispatch, saved]);

  const editableBlogs = useMemo(() => {
    return [...blogs];
  }, [blogs]);

  useEffect(() => {
    if (createdAt) {
      editableBlogs?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (likes) {
      editableBlogs?.sort((a, b) => b.likes - a.likes);
    }
  }, [editableBlogs, createdAt, likes]);

  // decide what to render
  let content;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <ErrorComponent error={error} />;

  if (!isLoading && !isError && !blogs.length) {
    content = <div className="col-span-12">No Blogs found.</div>;
  }

  if (!isLoading && !isError && blogs?.length) {
    content = editableBlogs?.map((blog) => <Post key={blog.id} blog={blog} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {/* <!-- single post --> */}
      {content}
    </main>
  );
};

export default Posts;
