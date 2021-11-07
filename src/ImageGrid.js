import React from 'react';

import { useSelector } from 'react-redux';
import styles from './ImageGrid.scss';

function ImageGrid(){

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 auto-rows-fr">
      {mapImages(images)}
    </div>
  )
}

export default ImageGrid;
