import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchAllData } from '../redux/data';

import Map from '../us-map.png';

const Home = () => {
  const states = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!states.length) dispatch(fetchAllData());
  }, []);

  return (
    <div className="home-page">
      <div className="header">all states</div>
      <div className="main-card-home">
        <img src={Map} alt="us-map" />
        <div>
          <h1>United States</h1>
        </div>
      </div>
      <input
        className="search-bar"
        type="text"
        placeholder="SEARCH"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="bar">Statistics By State </div>
      <ul className="states-list">
        {states
          .filter((item) => item.state.toLowerCase().startsWith(searchTerm.toLowerCase()))
          .map((item, index) => (
            <li
              className={`list-item ${index % 2 === 0 ? 'bg-1' : 'bg-2'}`}
              key={item.code}
            >
              <Link className="state-link" to={`/${item.slug}`}>
                <BsArrowRightCircle />
                <img
                  className="state-map"
                  src={item.state_flag_url}
                  alt={`${item.slug}-map`}
                />
                <p className="state-name">{item.state}</p>
                <p className="state-today-confirmed">{`Population: ${item.population}`}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
