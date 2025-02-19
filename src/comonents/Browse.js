import { useSelector } from "react-redux";
import Header from "./Header";
import useFetchApi from "../hooks/useFetchApi";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import useFetchPopular from "../hooks/useFetchPopular";
import useFetchTopRated from "../hooks/useFetchTopRated";
import useFetchUpcoming from "../hooks/useFetchUpcoming";
import SearchPage from "./SearchPage";

const Browse = () => {
  useFetchApi();
  useFetchPopular();
  useFetchTopRated();
  useFetchUpcoming();

  const isToggled = useSelector((state) => state.toggle.toggle);

  return (
    <div>
      <Header />
      {isToggled && <SearchPage />}
      <Maincontainer />
      <Secondarycontainer />
    </div>
  );
};

export default Browse;
