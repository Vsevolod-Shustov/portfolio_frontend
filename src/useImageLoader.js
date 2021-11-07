import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { set } from './catimagesSlice';

function useImageLoader(){
  const url = "https://api.thecatapi.com/v1/images/search?mime_types=jpg&limit=12";
  const dispatch = useDispatch();

  function getImages(url) {
    //console.log("fetching");
    fetch(url)
    .then(function(response){
      //console.log("response: " + response);
      return response.json();
    })
    .then(json => {
      //setImages(json);
      //console.log("json: " + JSON.stringify(json));
      //console.log("dispatching");
      dispatch(set(json));
    });
  }

  useEffect(() => {
    getImages(url);
  }, []);
}

export default useImageLoader;
