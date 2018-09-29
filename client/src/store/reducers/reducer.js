const initialState = {
  name: "Ron Swanson",
  photoUrl: "https://en.wikipedia.org/wiki/Ron_Swanson#/media/File:RonSwanson.jpg",
  googleId: 7,
  id: 7,
  email: "rswanson@email.com",
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