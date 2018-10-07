const initialState = {
  name: "Ron Swanson",
  photoUrl: "https://upload.wikimedia.org/wikipedia/en/a/ae/RonSwanson.jpg",
  googleId: 7,
  id: 7,
  email: "rswanson@email.com",

};

const connectedUsers={
  users:[]
}

const reducer = (state = initialState, action) => {
console.log(action);

  switch(action.type){
    case "SET_USER":
    return Object.assign({}, state, action.curUser);
    default:
    return state;
  }
  
};


export default reducer;