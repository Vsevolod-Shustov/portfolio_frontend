import React from 'react';
import { Switch, Route } from "react-router-dom";
import ImageGrid from './ImageGrid.js';
import Animations from './Animations.js';

function Main(){



  return (
    <main className="block1 lg:mr-4 lg:w-9/12 lg:flex-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 auto-rows-fr bg-opacity-50 mt-28 lg:mt-0">
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
