import { Link } from "react-router-dom";

const Post = ({ blog = {} }) => {
  const { image, createdAt, likes, title, tags, id, isSaved } = blog;

  const tagsString = tags?.map((tag) => `#${tag}`).join(", ");

  const btnText = isSaved ? "Saved" : "Save";

  return (
    <div className="lws-card">
      <Link to={`/posts/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/posts/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">{tagsString}</div>
        {/* <!-- Show this element if post is saved --> */}
        <div className="flex gap-2 mt-4">
          <span
            className="lws-badge"
            style={isSaved ? {} : { color: "#808080" }}
          >
            {btnText}
          </span>
        </div>
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default Post;
