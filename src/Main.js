import React from 'react';
import ImageGrid from './ImageGrid.js';
import Animations from './Animations.js';

function Main(){



  return (
    <main className="block1 lg:mr-4 lg:w-9/12 lg:flex-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 auto-rows-fr">
      <ImageGrid />
      <Animations />
    </main>
  )
}

export default Main;
