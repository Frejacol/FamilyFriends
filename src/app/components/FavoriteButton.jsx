"use client";
import { FaRegStar, FaStar } from "react-icons/fa";
import { addFavorite } from "../actions/action.js";

const FavoriteButton = ({ id, breed, isFavorite }) => {
  return (
    <button
      className="bg-white/40 p-2 inline-block rounded-full col-start-1 row-start-1 self-start justify-self-end m-3"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addFavorite(id);
      }}
    >
      {isFavorite ? <FaStar className="text-white w-5 h-5" /> : <FaRegStar className="text-white w-5 h-5" />}
    </button>
  );
};

export default FavoriteButton;
