import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import './App.css';
import Homepage from './Components/Homepage';
import Authentication from './Components/Authentication';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path ="/" element = {true ? <Homepage /> :<Authentication />} />
      </Routes>
    
    </Router>
    

    </div>
  );
}

export default App;
