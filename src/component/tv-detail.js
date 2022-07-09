import React from "react";
import { useParams } from "react-router-dom";
import TvDetailCard from "./tv-detail-card";
function TvDetail() {
  const { id } = useParams();
  return (
    <>
      <TvDetailCard key={id} id={id} />
    </>
  );
}

export default TvDetail;
