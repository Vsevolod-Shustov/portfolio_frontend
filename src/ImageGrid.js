import React, {useState, useEffect} from 'react';
import styles from './ImageGrid.scss';

function ImageGrid(){
  const url = "https://api.thecatapi.com/v1/images/search?mime_types=jpg&limit=12";
  const [images, setImages] = useState(null);

  function getImages(url) {
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(json => {
      setImages(json);
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
