import Aside from "../components/aside/Aside";
import Posts from "../components/posts/Posts";

const Home = () => {
  return (
    <section className="wrapper">
      <Aside />

      <Posts />
    </section>
  );
};

export default Home;
