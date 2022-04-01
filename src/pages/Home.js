import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>home</h1>
      <button onClick={goToHome}>Home</button>
    </div>
  );
};

export default Home;
