import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import PostDetailsPage from "./pages/PostDetailsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:blogId" element={<PostDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
