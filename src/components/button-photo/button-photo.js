import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import "./button-photo.css";
import { Link } from "react-router-dom";

const PhotoButton = () => {
  return (
    <Link
      to={{
        pathname: "/photos",
      }}
    >
      <button className="photo-button">
        <FontAwesomeIcon
          className="photo-icon"
          icon={faPhotoFilm}
          title="Eu amo você!"
        />{" "}
      </button>
    </Link>
  );
};

export default PhotoButton;
