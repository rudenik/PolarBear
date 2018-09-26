import axios from "axios";

export default {
  //AddUserProfile
  addUserProfile: function (UserData)
  {
    return axios.post("/api/userprofile", UserData);
  },
  //Update User Profile
  updateUserProfile: function (UserData)
  {
    return axios.put("/api/userprofile", UserData);
  },
  // Get UserProfile with givin ID
  getUserProfile: function (id)
  {
    console.log(id);
    return axios.get("/api/userprofile/" + id);
  },
  // Deletes User Profile With given Id
  deleteUserProfile: function (id)
  {
    return axios.delete("/api/books/" + id);
  },

  //USEREVENTS
  //AddUserEvent
  addUserEvents: function (UserData)
  {
    return axios.post("/api/userevent", UserData);
  },
  //Get All Events User Belongs to
  getUserEvents: function (id)
  {
    return axios.get("/api/userevent/" + id);
  },

  //Match
  getEventMatches: function (useroneid, eventid)
  {
    return axios.get("/api/userevent/" + useroneid + "/" + eventid);
  },
  getUserMatches: function (useroneid)
  {
    return axios.get("/api/userevent/" + useroneid );
  },
  createMatch: function (MatchData)
  {
    return axios.post("/api/userevent", MatchData);
  }
};
