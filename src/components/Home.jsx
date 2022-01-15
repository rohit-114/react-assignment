import React, { useEffect, useContext } from "react";
import ShowCard from "./ShowCard";
import ShowContext from "../ShowContext";
import "./Home.css";

const Home = () => {
  const { showData, setShowData } = useContext(ShowContext);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const data = await res.json();
        setShowData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchShow();
  }, [setShowData]);

  return (
    <div className="home-container">
      <h1 className="site-name">ShowDB</h1>
      <div className="card-container">
        {showData.map((data) => {
          return (
            <ShowCard
              key={data.show.id}
              name={data.show.name}
              release={data.show.premiered}
              summary={data.show.summary}
              image={data.show.image}
              rating={data.show.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
