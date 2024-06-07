
import './App.css';
import Control from './Components/Control';
import Demo from './Components/Demo';
import List from './Components/List';
import Person from './Components/Person.jsx';
import GApp from './Components/GApp';
import FContainer from './Components/FContainer';

// import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>Welcome to React</h1>
      </header>



      {/* we are passing props */}
      <Demo number="1" />
      <Demo number="2" />

      <List />
      <Control />
      <GApp />

      <div style={ {backgroundColor : 'dimgray' , paddingBottom : '7px' , paddingTop : '3px'}}>
        <FContainer />

      </div>



      {/* we are passing props */}
      <Person name="John"></Person>
      {/* here we may pass any value between the tags   */}


      {/* <Person/>  */}
      {/* here we can not  pass any value - no space are available  */}






    </div>
  );
}

export default App;
