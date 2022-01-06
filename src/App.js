import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Home from './components/Home'
import Information from './components/Information';

function App() {
  const regions = useSelector((state => state.data))
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}>
          {regions.map((region) => (
            <Route key={region.rpl} path={`/${region.rpl}`} element={<Information region={region} />} />
          ))}

        </Route>
      </Routes>

    </Router>
  );
}

export default App;
