const mongoose = require('mongoose')
const connectionDB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`MongoDB connected :${connection.connection.host} `)
        
    } catch (err) {
        console.error('could not connect to mongodb ...',err)
    }
}
module.exports=connectionDB ;