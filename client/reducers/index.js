import axios from 'axios';
import { combineReducers } from 'redux';

const initialState = {
  grooms: {},
  styles: {},
};

//action types
const GOT_ALL_GROOMS = 'GOT_ALL_GROOMS';
const GOT_SINGLE_GROOM = 'GOT_SINGLE_GRROM';
const GOT_ALL_STYLES = 'GOT_ALL_STYLES';
const GOT_SINGLE_STYLE = 'GOT_SINGLE_STYLE';

//action creators
const gotAllGrooms = grooms => ({
  type: GOT_ALL_GROOMS,
  grooms,
});
const gotSingleGroom = grooms => ({
  type: GOT_SINGLE_GROOM,
  grooms,
});
const gotAllStyles = styles => ({
  type: GOT_ALL_STYLES,
  styles,
});
const gotSingleStyle = styles => ({
  type: GOT_SINGLE_STYLE,
  styles,
});

//thunks
export const getAllGrooms = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/grooms');
    dispatch(gotAllGrooms(data));
  };
};
export const getAllStyles = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/styles');
  };
};

//reducers
function groomsReducer(grooms = [], action) {
  switch (action.type) {
    case GOT_ALL_GROOMS:
      return action.grooms;
    default:
      return grooms;
  }
}

function singleGroomReducer(groom = {}, action) {
  switch (action.type) {
    case GOT_SINGLE_GROOM:
      return action.groom;
    default:
      return groom;
  }
}

function stylesReducer(styles = [], action) {
  switch (action.type) {
    case GOT_ALL_STYLES:
      return action.styles;
    default:
      return styles;
  }
}

function singleStyleReducer(style = {}, action) {
  switch (action.type) {
    case GOT_SINGLE_STYLE:
      return action.style;
    default:
      return style;
  }
}

const rootReducer = combineReducers({
  allGrooms: groomsReducer,
  allStyles: stylesReducer,
  singleGroom: singleGroomReducer,
  singleStyle: singleStyleReducer,
});
export default rootReducer;
