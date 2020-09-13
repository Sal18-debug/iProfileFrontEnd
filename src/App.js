import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './pages/landing/landing.page';
import Register from './pages/register/register.page';
import Header from '../src/component/header/header.component';
import Bottom from '../src/component/bottom/bottom.component';
import Onboarding1 from './component/onboarding/onboarding1/onboarding1.component';
import Onboarding2 from './component/onboarding/onboarding2/onboarding2.component';
import Project from './component/project/project'
import Portfolio from './component/portfolio/portfolio.component'
import store from './redux/redux';
import { Provider } from 'react-redux';
import './App.css';
import Home from './pages/home/home'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Route exact path='/' component={Landing} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/onboarding1' component={Onboarding1} />
        <Route exact path='/onboarding2' component={Onboarding2} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path="/project" component={Project}/>
        <Route exact path="/home" component={Home}/>
        <Bottom />
      </div>
    </Provider>
  );
}

export default App;
