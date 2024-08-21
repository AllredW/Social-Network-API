const User = require('../models/User');

module.exports = {
    // Route: Get all Users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
    //Route: Get a single User
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
    // Route: create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
    // Route: Update a User

    // Route: Delete a User
    async deleteUser(req, res){
      app.delete('/users/:username', async (req, res) => {
        try {
          const result = await Department.findOneAndDelete({ username: req.params.username });
          res.status(200).json(result);
          console.log(`Deleted: ${result}`);
        } catch (err) {
          console.log('Uh Oh, something went wrong');
          res.status(500).json({ error: 'Something went wrong' });
        }
      });
    };
