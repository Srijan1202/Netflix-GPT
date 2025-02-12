import useFetchMovies from "../hooks/useFetchMovies";

const Videocontainer = ({ id }) => {

  const trailer=useFetchMovies({ id });

  return (
    <div className="text-red-600">
      <iframe className="absolute left-0 top-0 h-full w-full -z-10"
        width="560"
        height="315"  
        src={`https://www.youtube.com/embed/${trailer}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default Videocontainer;
