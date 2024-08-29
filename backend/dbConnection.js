const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongoDb connected ${mongoose.connection.host}`)
    } catch (error) {
        console.log('mongoDb connection error')
    }
}

module.exports = connectDB;