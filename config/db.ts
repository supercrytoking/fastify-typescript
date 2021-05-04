const mongoose = require('mongoose')

export const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
        console.log(`MongoDB connected`)
    } catch (error) {
        console.log(error)
        // * Exits process with failure
        process.exit(1)
    }
}
