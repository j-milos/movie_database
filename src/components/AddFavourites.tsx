import React from "react";
import s from "./AddFavourites.module.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddFavourites = () => {
  return (
    <>
      <span className={s.addFavouritesText}>Add to Favourites</span>
      <FontAwesomeIcon icon={faHeart} className={s.heartIcon} />
    </>
  );
};

export default AddFavourites;
