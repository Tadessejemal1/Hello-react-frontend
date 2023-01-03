import axios from 'axios';

// constant
const DISPLAY_GREETING = 'DISPLAY_GREETING';

// Action creator for display greeting
const displayGreeting = (payload) => ({
  type: DISPLAY_GREETING,
  payload,
});

// get (load) greetings from API
export const fetchGreetingAPI = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/api/v1/greeting');
  const greeting = response.data;
  dispatch(displayGreeting(greeting));
};

// initial states
const initialState = [];

// Reducer for greeting
const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_GREETING:
      return action.payload.message;
    default:
      return state;
  }
};

export default greetingReducer;