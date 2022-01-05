import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import fetchAllData from '../redux/data'

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
      
      
    </div>
  )
}
