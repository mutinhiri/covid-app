import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const states = useSelector((state => state.data))
  return (
    <Router>
      <Routes>
        <Route path='/' element= {}>

        </Route>
      </Routes>

    </Router>
  );
}

export default App;
