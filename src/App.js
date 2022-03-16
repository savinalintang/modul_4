import React, { Component } from 'react';

import Footer from './Footer';
import List from './List';

class App extends Component {
  render(){
    return(
      <div>

        <List/>
        <Footer judul='Halaman footer' nama='Savina Lintang Kinanti' />
      </div>
    );
  }
}
export default App;