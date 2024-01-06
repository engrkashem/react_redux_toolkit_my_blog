import { Link } from "react-router-dom";
import gitPic from "../../assets/git.webp";

const RelatedPost = () => {
  return (
    <div className="card">
      <Link to="/posts/1">
        <img src={gitPic} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link to="/posts/1" className="text-lg post-title lws-RelatedPostTitle">
          Top Github Alternatives
        </Link>
        <div className="mb-0 tags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        <p>2010-03-27</p>
      </div>
    </div>
  );
};

export default RelatedPost;
