const initialState = {
  name: "Ron Swanson",
  photoUrl: "https://upload.wikimedia.org/wikipedia/en/a/ae/RonSwanson.jpg",
  googleId: "42",
  email: "rswanson@email.com",
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