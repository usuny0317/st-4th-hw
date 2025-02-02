import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/detail/id"> 링크 통해 디테일로 이동하기</Link>
    </div>
  );
};

export default Home;
