import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import ShowContext from "../ShowContext";
import "./ShowPage.css";

const ShowPage = () => {
  const { movieName } = useParams();
  const { pageData } = useContext(ShowContext);
  const navigate = useNavigate();

  function handler() {
    navigate(`/form/${movieName}`);
  }

  return (
    <div className="card-holder">
      <div className="show-page">
        <h1>{movieName}</h1>
        <img src={pageData.image} alt="img" />
        {ReactHtmlParser(pageData.summary)}
        <div className="btn-container">
          <button className="book-btn" onClick={handler}>
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
