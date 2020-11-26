import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About';
import Detail from './routes/Detail'
import Navigator from './Component/Navigator';

function App(){
  return (
    <HashRouter>
      <Route path="/" component={Home} exact={true} ></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie-detail" component={Detail}></Route>
      <Navigator></Navigator>
    </HashRouter>
  );
}

export default App;