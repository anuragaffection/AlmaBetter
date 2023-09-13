import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import MyFunComponents from './component/MyFunComponents';
import MyClassComponent from './component/MyClassComponents';
import ParentComponent from './component/ParentComponents';
import LifeCycleComponent from './component/LifeCycle';
import LearnHooks from './component/LearnHooks';

// import { store } from './redux/store';

import PContainer from './pages/PContainer';

// import LearnContextAPI from './component/LearnContextAPI';


// lazy loading of of components  
const LearnContextAPI = React.lazy( () => import('./component/LearnContextAPI'));


function App() {
  return (
    <div className="App">


      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from Anurag Affection
        </a>




        {/*  // <BrowserRouter></BrowserRouter> */}



      </header>




      <MyFunComponents />
      <MyClassComponent />
      <ParentComponent />

      <LifeCycleComponent />

      <LearnHooks />

      {/* lazy loading of LearnContextAPI */}
      <Suspense fallback={<div> Loading...</div>} >
        <LearnContextAPI />

      </Suspense>

      <PContainer/>

      







      <div className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from Anurag Affection
        </a>

      </div>




    </div>
  );
}

export default App;
