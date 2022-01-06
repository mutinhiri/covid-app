import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Home from './components/Home'
import Information from './components/Information';

function App() {
  const regions = useSelector((state) => state.data);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {regions.map((region) => (
          <Route
            key={region.slug}
            path={`/${region.slug}`}
            element={<Information region={region} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
