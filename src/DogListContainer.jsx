// @ts-check

import { useEffect, useState } from "react"
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
  let [breeds, setBreeds] = useState([]);
  let [selectedBreed, setSelectedBreed] = useState("");
  let [imageList, setImageList] = useState([]);

  // セレクトボックスの値更新時　値を状態変数に設定
  const handleChange = (e) => {
    setSelectedBreed(e.target.value);
  }

  // 初回起動時
  // 非同期処理なので、状態変数が変わるのはfetchが一通り終わった後。
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        let list = Object.keys(data.message);
        setBreeds(list);
        setSelectedBreed(list[0]);
        // console.log(breeds);
      });
  }, []);

  // 表示ボタン押下時
  const displayImageButton = () => {
    // selectedBreedが空欄であるケースを想定して、URLの初期値を別で持っておく。
    let apiUrl = "https://dog.ceo/api/breed/hound/images/random/12"
    if (selectedBreed.length > 0) {
      apiUrl = "https://dog.ceo/api/breed/" + selectedBreed + "/images/random/12"
    }
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setImageList(data.message);
      });
  }

  const breedsImage = imageList.map((url) => {
    return (
      <ul>
        <li><img src={url}></img></li>
      </ul>
    );
  });

  return <>
    <div>
      <BreedsSelect breeds={ breeds } selectedBreed={ selectedBreed } handleChange={handleChange}/>
      <button onClick={displayImageButton}>表示</button>
    </div>
    <div>
      {breedsImage}
    </div>
  </>

}
// export const DogListContainer = () => {
//   const obj = { a: "aaa", b: "bbb"}
//   const [time, setTime] = useState({});
  
//   useEffect(() => {
//     setTime(obj);

//   }, []);

//   return (
//     <>
//       <p></p>
//       <time>{time.a}</time>
//       <span>秒経過</span>
//     </>
//   );
// };

export default DogListContainer
