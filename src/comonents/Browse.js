// import React, { use } from "react";
import Header from "./Header";
import useFetchApi from "../hooks/useFetchApi";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import useFetchPopular from "../hooks/useFetchPopular";
import useFetchTopRated from "../hooks/useFetchTopRated";
import useFetchUpcoming from "../hooks/useFetchUpcoming";

const Browse = () => {
  useFetchApi();

  useFetchPopular();

  useFetchTopRated();

  useFetchUpcoming();

  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycontainer />
    </div>
  );
};

export default Browse;
