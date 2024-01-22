import s from "./RemoveFavourites.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const RemoveFavourites = () => {
  return (
    <>
      <span className={s.removeFavouritesText}>Remove from favourites</span>
      <FontAwesomeIcon icon={faTrash} className={s.trashIcon} />
    </>
  );
};

export default RemoveFavourites;
