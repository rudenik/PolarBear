const initialState = {
  name: "Ron Swanson",
  photoUrl: "https://upload.wikimedia.org/wikipedia/en/a/ae/RonSwanson.jpg",
  googleId: 7,
  id: 7,
  email: "rswanson@email.com",
  sid:7
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