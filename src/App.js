import logo from './logo.svg';
import './App.css';
import Counter from './Component/counter';
import Func from './Component/func';
import ClassComponent from './Component/class';
import FunctionalCounter from './Component/functionalCounter';
import ConditionalRendering from './Component/conditionalRendering';
import Map from './Component/map';
// import Message from './Component/message.js';
// import Sample from './Component/sample.js';


function App() {
  return (
    <div className="App">
      <h1>Welcome to react</h1>

      {/* <Message/>
      <Sample name = 'John'/>
      <Sample name = 'Mercy'/>
      <Sample name = 'Jake'/>
      <Sample name = 'Mike'/> */}
      {/* <Counter/>
      <Func/>
      <ClassComponent/> */}
      <FunctionalCounter/>
      <ConditionalRendering/>
      <Map/>
    </div>
  );
}

export default App;

