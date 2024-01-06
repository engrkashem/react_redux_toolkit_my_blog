import PostDetailsAside from "./PostDetailsAside";
import PostDetailsMain from "./PostDetailsMain";

const PostDetailsContainer = () => {
  return (
    <section className="post-page-container">
      {/* <!-- detailed post main  --> */}
      <PostDetailsMain />

      {/* <!-- detailed post aside --> */}
      <PostDetailsAside />
    </section>
  );
};

export default PostDetailsContainer;
