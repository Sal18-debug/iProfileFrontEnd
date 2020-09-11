import React from 'react';
import {Route} from 'react-router-dom';
import Landing from './pages/landing/landing.page';
import Register from './pages/register/register.page';
import Header from '../src/component/header/header.component';
import Bottom from '../src/component/bottom/bottom.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={Landing} />
      <Route exact path='/register' component={Register}/>
      <Bottom/>
    </div>
  );
}

export default App;
