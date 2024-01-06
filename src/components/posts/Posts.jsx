import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { useEffect } from "react";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Loading from "../shared/Loading";
import ErrorComponent from "../shared/ErrorComponent";

const Posts = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // decide what to render
  let content;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <ErrorComponent error={error} />;

  if (!isLoading && !isError && !blogs.length) {
    content = <div className="col-span-12">No Blogs found.</div>;
  }

  if (!isLoading && !isError && blogs?.length) {
    content = blogs?.map((blog) => <Post key={blog.id} blog={blog} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {/* <!-- single post --> */}
      {content}
    </main>
  );
};

export default Posts;
