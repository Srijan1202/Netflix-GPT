import useFetchMovies from "../hooks/useFetchMovies";

const Videocontainer = ({ id }) => {
  const trailer = useFetchMovies({ id });

  return (
    <div className=" text-red-600 w-screen -z-10 pt-[25%] md:pt-0 bg-gradient-to-t from-black aspect-video">
      <iframe
        className=" left-0 top-0 w-screen aspect-video  md:pt-0 "
        src={`https://www.youtube.com/embed/${trailer}?&autoplay=1&mute=1&loop=1&playlist=${trailer}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default Videocontainer;
