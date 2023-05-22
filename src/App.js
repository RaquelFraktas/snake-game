import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
