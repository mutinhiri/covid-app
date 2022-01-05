import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { BsArrowRightCircle } from 'react-icons/bs'
import fetchAllData from '../redux/data'
import Map from '../us-map.png'

const Home = () => {
  const states = useSelector((state) => state.data);
  const dispatch = useDispatch()

  const [searchState, setSearchState] = useState('');

  useEffect(() => {
    if(!states.length) dispatch(fetchAllData())
  }, [])
  return (
    <div className='home-page'>
      <div className='header'>
        All states
      </div>
      <div className='main-card'>
        <img src={Map} alt="map-for-state" />
        <div>
          <h1>United States</h1>
        </div>
      </div>
      <input
        type="text"
        className='search-bar'
        placeholder='Search here'
        onChange={(e) => {
          setSearchState(e.target.value);
        }}
      />
      <div className="bar">Statistics by State</div>
      <ul className="states-list">
        {states.filter((item) => item.state.toLowerCase().startsWith(searchState.toLowerCase()))
          .map((item, index) => (
            <li className={`list-item ${index % 2 === 0 ? 'bg-1' : 'bg-2'}`}
            key={item.code}>
              <Link className="state-link" to={`/${item.rpl}`}>
                <BsArrowRightCircle />
                <img src={item.map_image_url} className='state-map' alt={`${item.rpl}`} />
                <p className="state-name">{item.state}</p>
                <p className="state-today-confirmed">{ `Population: ${item.population}`}</p>
              </Link>
            </li>
          ))
        }

      </ul>
    </div>
  )
}

export default Home