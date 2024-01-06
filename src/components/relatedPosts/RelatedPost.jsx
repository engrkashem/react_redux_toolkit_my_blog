import { Link } from "react-router-dom";

const RelatedPost = ({ blog }) => {
  const { image, createdAt, title, tags } = blog;

  const tagsString = tags?.map((tag) => `#${tag}`).join(", ");

  return (
    <div className="card">
      <Link to="/posts/1">
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link to="/posts/1" className="text-lg post-title lws-RelatedPostTitle">
          {title}
        </Link>
        <div className="mb-0 tags">{tagsString}</div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedPost;
