const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    })

    console.log(`MongoDB connected`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB