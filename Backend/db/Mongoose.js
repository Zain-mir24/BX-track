const mongoose = require('mongoose')

const connect=mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
if(connect)console.log('connected db')