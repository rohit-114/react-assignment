import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShowContext from "../ShowContext";
import "./ShowCard.css";

const ShowCard = ({ name, release, image, summary, rating }) => {
  const navigate = useNavigate();
  const { setPageData } = useContext(ShowContext);

  function handler() {
    setPageData({ name: name, image: image.medium, summary: summary });
    navigate(`/movie/${name}`);
  }

  return (
    <div className="show-card">
      <h3>{name}</h3>
      <img src={image.medium} alt="img" />
      <p>Rating: {rating.average}</p>
      <p>{release}</p>
      <div className="btn-container">
        <button className="more-btn" onClick={handler}>
          Know More
        </button>
      </div>
    </div>
  );
};

export default ShowCard;
