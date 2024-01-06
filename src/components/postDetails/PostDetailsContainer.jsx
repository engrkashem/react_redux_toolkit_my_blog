import { useParams } from "react-router-dom";
import PostDetailsMain from "./PostDetailsMain";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlog } from "../../features/blog/blogSlice";
import Loading from "../shared/Loading";
import ErrorComponent from "../shared/ErrorComponent";
import RelatedPosts from "../relatedPosts/RelatedPosts";

const PostDetailsContainer = () => {
  const { blogId: id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, isError, error, blog } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    dispatch(fetchBlog({ id }));
  }, [dispatch, id]);

  // decide what to render
  let content;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <ErrorComponent error={error} />;

  if (!isLoading && !isError && !blog?.id) {
    content = <div className="col-span-12">No Blogs found.</div>;
  }

  if (!isLoading && !isError && blog?.id) {
    content = <PostDetailsMain blog={blog} />;
  }

  return (
    <section className="post-page-container">
      {/* <!-- detailed post main  --> */}
      {content}

      {/* <!-- detailed post aside --> */}
      <RelatedPosts currentBlogId={blog?.id} tags={blog?.tags} />
    </section>
  );
};

export default PostDetailsContainer;
