import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { BsArrowRightCircle } from 'react-icons/bs'
import fetchAllData from '../redux/data'
import Map from '../us-map.png'

export const Home = () => {
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
            <li className={`list-item ${index % 2=== 0 ? 'bg-1' : 'bg-2'}`}>
              
            </li>
          ))
        }

      </ul>
    </div>
  )
}
