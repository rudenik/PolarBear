const initialState = {
  name: "Ron Swanson",
  photoUrl: "https://en.wikipedia.org/wiki/Ron_Swanson#/media/File:RonSwanson.jpg",
  googleId: "42",
  id: "42",
  email: "rswanson@email.com",
  id: "314",
  results: []
};

const reducer = (state = initialState, action) => {

  switch(action.type){
    case "SET_USER":
    return Object.assign({}, state, action.curUser);
    default:
    return state;
  }

};


export default reducer;