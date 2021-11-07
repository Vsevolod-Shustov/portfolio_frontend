import React from 'react';
import { Switch, Route } from "react-router-dom";
import useImageLoader from './useImageLoader.js';
import ImageGrid from './ImageGrid.js';
import Animations from './Animations.js';

function Main(){
  useImageLoader();


  return (
    <main className="block1 lg:mr-4 lg:w-9/12 lg:flex-auto bg-opacity-50 mt-28 lg:mt-0">
      <Switch>
        <Route exact path="/">
          <ImageGrid />
        </Route>
        <Route path="/animations">
          <Animations />
        </Route>
      </Switch>
    </main>
  )
}

export default Main;
