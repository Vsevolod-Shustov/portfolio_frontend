import React from 'react';
import useImageLoader from './useImageLoader.js';
import { useSelector } from 'react-redux';
import styles from './ImageGrid.scss';

function ImageGrid(){
  useImageLoader();
  const images = useSelector((state) => state.catimages.images);


  function mapImages(images){
    //console.log("mapImages");
    if(images){
      //console.log("images:");
      //console.log(images);
      return images.map((image) =>
        <div className={styles.imagewrapper + " w-full"} key={image.id}>
          <div className={styles.image + " rounded"} style={{backgroundImage: 'url(' + image.url + ')'}}></div>
        </div>
      );
    }
  }

  return (
    <>
      {mapImages(images)}
    </>
  )
}

export default ImageGrid;
