import BigImage from "./BigImage";
import Details from "./Details";

const BreedDetail = async ({ id }) => {
  const headers = { "x-api-key": process.env.API_KEY };
  const [breedResponse, imagesResponse] = await Promise.all([fetch(`https://api.thedogapi.com/v1/breeds/${id}`, { headers }), fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${id}&limit=2`, { headers })]);

  const breed = await breedResponse.json();
  const images = await imagesResponse.json();

  const bigImage = breed.image?.url;
  const labelImage = images[1]?.url || images[0]?.url || bigImage;

  return (
    <>
      <BigImage src={bigImage} labelSrc={labelImage} name={breed.name} />
      <Details breed={breed} />
    </>
  );
};

export default BreedDetail;
