const GET_COVID_DATA = 'GET_COVID_DATA'

const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_DATA:
      return action.payload;
    default: return state
  } 
}

 export const getAllData = (payload) => ({
  type: GET_COVID_DATA,
  payload,
})

export const fetchAllData = () => async (dispatch) => {
  const response = await fetch('https://civilserviceusa.github.io/us-states/data/states.json');
  const states = await response.json()
}