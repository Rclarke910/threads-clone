import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Homepage from './Components/Homepage';
import Authentication from './Components/Authentication';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path ="/" element = {true ? <Homepage /> :<Authentication />} />

      </Routes>
    

    

    </div>
  );
}

export default App;
