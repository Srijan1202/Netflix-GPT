import React from "react";
import Videocontainer from "./Videocontainer";
import Titlecontainer from "./Titlecontainer";
import { useSelector } from "react-redux";

const Maincontainer = () => {
  const data = useSelector((state) => state?.movies?.nowmovies);

  if (!data) return <div>loading...</div>;
  

  return (
    <div>
      <Titlecontainer
        title={data[0]?.original_title}
        discription={data[0]?.overview}
      />
      <Videocontainer id={data[0]?.id} />
    </div>
  );
};

export default Maincontainer;
