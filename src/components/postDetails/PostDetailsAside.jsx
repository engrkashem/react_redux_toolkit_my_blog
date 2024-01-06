import RelatedPosts from "../relatedPosts/RelatedPosts";

const PostDetailsAside = () => {
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>

      <RelatedPosts />
    </aside>
  );
};

export default PostDetailsAside;
