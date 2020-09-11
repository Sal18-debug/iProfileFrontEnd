import React from 'react';
import {Route} from 'react-router-dom';
import Landing from '../../teamhack/src/pages/landing/landing.component';
import Register from '../../teamhack/src/component/register/register.component.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing} />
      <Route exact path='/register' component={Register}/>
    </div>
  );
}

export default App;
