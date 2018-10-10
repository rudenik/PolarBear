const db = require("../models/ChatDB");

module.exports = {
  save: function(req, res) {
    console.log("saving", req.body);
    db.Chat.findOneAndUpdate(
      { _id: req.body.uniqueId, rroom:req.body.reverseId, room_id: req.body.uniqueRoom },
      { $push: { messages: req.body.msg } },
      { upsert: true }
    )
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => {
        res.status(422).json(err);
        console.log(err);
      });
  },
  findAll: function(req, res) {
    db.Chat.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    // console.log(req.params.id);
    db.Chat.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Chat.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Chat.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  saveOnlineUsers: function(req, res) {
    db.Online.findOneAndUpdate(
      {
        _id: req.body.googleId
      },
      {
        name: req.body.name,
        photoUrl: req.body.photoUrl,
        loggedIn: req.body.log,
        sid:req.body.sid
      },
      { upsert: true }
    )
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findUsers: function(req, res) {
    db.Online.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getTargetUser: function(req, res) {
    db.Online.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
