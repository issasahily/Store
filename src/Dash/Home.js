import List from "./List";
import useFetch from "../UseHook/useFetch";
import "./Home.css";
const Home = () => {
  const {
    data: lists,
    error,
    isPending,
  } = useFetch("https://fakestoreapi.com/products");
  return (
    <div>
      {" "}
      {error && <div>{error}</div>}
      {isPending && <img className="loading" src="image3.gif" alt="none" />}
      {lists && <List lists={lists} />}
    </div>
  );
};

export default Home;
