import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./button-heart.css";

const HeartButton = () => {
  return (
    <Link
      to={{
        pathname: "/latter",
      }}
    >
      <button className="heart-button">
        <FontAwesomeIcon
          className="heart-icon"
          icon={faHeart}
          title="Eu amo você!"
        />{" "}
      </button>
    </Link>
  );
};

export default HeartButton;
