import { useDispatch, useSelector } from "react-redux";
import RelatedPost from "./RelatedPost";
import { useEffect } from "react";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import Loading from "../shared/Loading";
import ErrorComponent from "../shared/ErrorComponent";

const RelatedPosts = ({ currentBlogId, tags }) => {
  const dispatch = useDispatch();
  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  );

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, currentBlogId }));
  }, [dispatch, tags, currentBlogId]);

  // decide what to render
  let content;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <ErrorComponent error={error} />;

  if (!isLoading && !isError && !relatedBlogs?.length) {
    content = <div className="col-span-12">No Blogs found.</div>;
  }

  if (!isLoading && !isError && relatedBlogs?.length) {
    content = relatedBlogs?.map((blog) => (
      <RelatedPost key={blog.id} blog={blog} />
    ));
  }

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
};

export default RelatedPosts;
