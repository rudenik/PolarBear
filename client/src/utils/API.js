import axios from "axios";

export default {
  //AddUserProfile
  addUserProfile: function ()
  {
    return axios.post("/api/userprofile", UserData);
  },
  //Update User Profile
  updateUserProfile: function ()
  {
    return axios.put("/api/userprofile", UserData);
  },
  // Get UserProfile with givin ID
  getUserProfile: function (id)
  {
    return axios.get("/api/userprofile/" + id);
  },
  // Deletes User Profile With given Id
  deleteUserProfile: function (id)
  {
    return axios.delete("/api/books/" + id);
  },

  //USEREVENTS
  //AddUserEvent
  addUserProfile: function ()
  {
    return axios.post("/api/userevent", UserData);
  },
  //Get All Events User Belongs to
  getUserEvents: function ()
  {
    return axios.get("/api/userevent/" + id);
  },

  //Match
  getEventMatches: function ()
  {
    return axios.get("/api/userevent/" + useroneid + "/" + eventid);
  },
  getUserMatches: function ()
  {
    return axios.get("/api/userevent/" + useroneid );
  },
  createMatch: function ()
  {
    return axios.post("/api/userevent", MatchData);
  }
};
