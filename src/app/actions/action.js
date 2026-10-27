"use server";
import { revalidatePath } from "next/cache";

export const addFavorite = async (id) => {
  const response = await fetch("https://api.thedogapi.com/v1/favourites", {
    method: "POST",
    headers: {
      "x-api-key": process.env.API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      image_id: id,
    }),
  });

  revalidatePath("/");
};
