import React from "react";
import { useParams } from "react-router-dom";

const AnimeByEpisodePage = () => {
  const { id, episodes } = useParams();
  return (
    <div>
      AnimeByEpisodePage id: {id} || episode : {episodes}
    </div>
  );
};

export default AnimeByEpisodePage;
