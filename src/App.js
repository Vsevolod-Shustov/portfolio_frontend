import React from 'react';
import Header from './Header';
import Main from './Main';
import Side from './Side';
import Footer from './Footer';

import styles from './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <>
      <div id={styles.bg_animation_wrapper}>
        <div id={styles.light1}></div>
      </div>
      <div id={styles.bg_animation_screen}></div>
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:flex-wrap px-2 relative z-20">
        <Header />
            <Main />
            <Side />
        <Footer />
      </div>
      </>
    )
  }
}

export default App;
