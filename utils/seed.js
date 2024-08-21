const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://localhost/your_database_name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedUsers = async () => {
    try {
        await User.deleteMany(); // Clear existing users

        const users = [];
        for (let i = 1; i <= 10; i++) {
            users.push({
                username: `user${i}`,
                email: `user${i}@example.com`,
                thoughts: [],
                friends: [],
            });
        }

        await User.insertMany(users);
        console.log('Users seeded successfully');
    } catch (error) {
        console.error('Error seeding users:', error);
    } finally {
        mongoose.disconnect();
    }
};

seedUsers();