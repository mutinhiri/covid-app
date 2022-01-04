const GET_COVID_DATA = 'GET_COVID_DATA'
const CLEAR_DATA = "CLEAR_DATA"

const initialState = {};

const covidReducer = (state = initialState, action)=>{
  switch (action.payload) {
    case GET_COVID_DATA: 
      return {
        ...state, [action.payload.id] : action.payload
      }
    case CLEAR_DATA: return {}
    default: return state;
  }
}

export const getCovidData = (payload) => ({
  type: GET_COVID_DATA,
  payload
});

export const clearCovidData = () => ({
  type: CLEAR_DATA
});

export const fetchCovidData = (rpl) => async (dispatch) => {
  const date = new Date();
  const dateString = date.toISOString().slice(0, 10)
  const response = await fetch(
    `https://api.covid19tracking.narrativa.com/api/${dateString}/country/us/region/${rpl.replace(
      '-',
      '_',
    )}`,
  );

  const allData = await response.json();
  const covidData = allData.dates[dateString].countries.US.regions[0];
  dispatch(
    getCovidData({
      id: covidData.id,
      confirmed: 
    })
  )

}