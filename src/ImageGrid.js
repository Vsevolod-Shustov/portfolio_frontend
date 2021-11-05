import React, {/*useState, */useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { set } from './catimagesSlice'
import styles from './ImageGrid.scss';

function ImageGrid(){
  const url = "https://api.thecatapi.com/v1/images/search?mime_types=jpg&limit=12";
  //const [images, setImages] = useState(null);

  const images = useSelector((state) => state.catimages.images);
  const dispatch = useDispatch();

  function getImages(url) {
    console.log("fetching");
    fetch(url)
    .then(function(response){
      console.log("response: " + response);
      return response.json();
    })
    .then(json => {
      //setImages(json);
      console.log("json: " + JSON.stringify(json));
      console.log("dispatching");
      dispatch(set(json));
    });
  }

  function mapImages(images){
    if(images){
      return images.map((image) =>
        <div className={styles.imagewrapper + " w-full"} key={image.id}>
          <div className={styles.image + " rounded"} style={{backgroundImage: 'url(' + image.url + ')'}}></div>
        </div>
      );
    }
  }
  useEffect(() => {
    getImages(url);
  }, []);
  console.log(images);

  return (
    <>
      {mapImages(images)}
    </>
  )
}

export default ImageGrid;
