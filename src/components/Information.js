import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdArrowBackIosNew } from 'react-icons/md'
import { fetchCovidData } from "../redux/covid";

export const Information = (props) => {
  const { region } = props
  const rpl = region.rpl.replace('-', '_');

  const covidData = useSelector((state) => state.covid)
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (!covidData[rpl]) dispatch(fetchCovidData(rpl))
  }, []);
  return (
    <div>
      <div className="details-header">
        <Link to="/">
          <MdArrowBackIosNew />
        </Link>
        <p>state/region details</p>
      </div>
      <div className="main-card">
        <img src={region.map_image_url} alt={`${region.state}-map`} />
        <div>
          <h1>{`${region.state} (${region.code})`}</h1>
          <p>{ region.nickname}</p>
        </div>
      </div>
      <div className="bar"> General Info</div>
      <ul>
        <li className="data-item">
          <span className="tag">Population</span>
          <span>
            {region.population.toLocaleString('en-US')}
          </span>
        </li>
        <li className="data-item">
          <span className="tag">Population Rank</span>
          <span className="data">{ region.population_rank}</span>
        </li>
        <li className="data-item">
          <span className="tag">Capital city</span>
          <span className="data">{ region.capital_city}</span>
        </li>
      </ul>
      <div className="bar">Todays covid information</div>
      <ul>
        {covidData[rpl] ? (
          Object.keys(covidData[rpl])
            .filter((x) => x !== "id")
            .map((key) => (
              <li key={key} className="data-item">
                <span className="tag">
                  {`${key.charAt(0).toUpperCase()} ${key
                    .slice(1)
                    .replace(/_/g, ' ')}`}
                </span>
                <span className="data">
                  {covidData[rpl][key].toLocaleString('en-US')}
                </span>

              </li>
            ))
        ) : (
            <li className="data-item">Loading ...</li>
        )}
      </ul>
    </div>
  )
}

Information.propTypes = {
  region: PropTypes.instanceOf(Object).isRequired
}

export default Information