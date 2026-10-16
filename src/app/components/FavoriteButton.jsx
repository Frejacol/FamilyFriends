"use client";

import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setIsFavorite(!isFavorite);
      }}
      className="bg-white/40 p-2 inline-block rounded-full col-start-1 row-start-1 self-start justify-self-end m-3"
    >
      {isFavorite ? <FaStar className="text-white w-5 h-5" /> : <FaRegStar className="text-white w-5 h-5" />}
    </button>
  );
};

export default FavoriteButton;
