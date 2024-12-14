// @ts-check
import { useState } from 'react';
import { DogImage } from './DogImage';

export const Description = () => {

  let [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/poodle-miniature/n02113712_5675.jpg");
  return (
    <>
      <div>
        <p>犬の画像サイト！</p>
        <button onClick={() => {
          fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
            setDogUrl(data.message);
          });
        }}>更新</button>
      </div>
      <div>
        <DogImage imageUrl={dogUrl}/>
      </div>
    </>
  );
};

export default Description
