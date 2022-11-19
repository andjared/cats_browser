import { useEffect, useState } from "react";
import CatsInfo from "./components/CatsInfo";
import Select from "./components/Select";
import "./styles/style.css";

function App() {
  const [listOfBreeds, setListOfBreeds] = useState(null);
  const [catsInfo, setCatsInfo] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const myInit = {
    method: "GET",
    headers: {
      "x-api-key": "b186a87a-5d6f-4359-b64f-d7f99a9c8000",
    },
  };

  useEffect(() => {
    //get list of all breeds
    const breedsList = async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/breeds",
        myInit
      );

      const data = await response.json();

      return data;
    };

    breedsList().then((data) => setListOfBreeds(data));
  }, []);

  const searchByName = async (breedsName) => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds/search?q=${breedsName}`,
      myInit
    );

    const data = await response.json();

    if (breedsName) {
      const imageData = getCatsImg(data[0].reference_image_id);
      imageData.then((data) => setImgUrl(data.url));
      setCatsInfo(data[0]);
    }
  };

  const getCatsImg = async (breedsId) => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/${breedsId}`,
      myInit
    );

    const data = await response.json();

    return data;
  };

  return (
    <main className="container">
      <Select list={listOfBreeds} handleClick={searchByName} />
      {catsInfo && imgUrl && <CatsInfo info={catsInfo} imgUrl={imgUrl} />}
    </main>
  );
}

export default App;
