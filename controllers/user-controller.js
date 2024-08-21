const { User } = require("../models");

const userControllers = {
// Route: Get all Users
  async getAllUsers(req, res) {
    try {
      const userData = await User.find().select("-__v");

      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Route: Find single User
  async getSingleUser(req, res) {
    try {
      const dbUserData = await User.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate("friends")
        .populate("thoughts");

      if (!dbUserData) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Route: Create User
  async createUser(req, res) {
    try {
      const userData = await User.create(req.body);
      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Route: Update a User
  async updateUser(req, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

      if (!dbUserData) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Route: Delete a User
  async deleteUser(req, res) {
    try {
      const dbUserData = await User.findOneAndDelete({
        _id: req.params.userId,
      });

      if (!dbUserData) {
        return res.status(404).json({ message: "No user with this id!" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
    // Route: Add Friend
    async addFriend(req, res) {
      try {
        const userData = await User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: req.params.friendId } },
          { new: true }
        );
  
        if (!userData) {
          return res.status(404).json({ message: "No user with this id!" });
        }
  
        res.json(userData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },
    // Route: Remove Friend
    async removeFriend(req, res) {
      try {
        const dbUserData = await User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: req.params.friendId } },
          { new: true }
        );
  
        if (!dbUserData) {
          return res.status(404).json({ message: "No user with this id!" });
        }
  
        res.json(dbUserData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },
};

module.exports = userControllers;