const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_CONNECT_URI );
// "mongodb://127.0.0.1:27017/socialMedia"
// 
// || "mongodb+srv://esesocietyiitism:rER1nbNz3eR92Ztk@vibeshare.x5hcku3.mongodb.net/?retryWrites=true&w=majority&appName=VibeShare"
const userSchema = mongoose.Schema({
    username:String,
    name:String,
    email:String,
    password:String,
    posts:[
        {type:mongoose.Schema.Types.ObjectId ,ref:"post"}
    ]
})


const user = mongoose.model('user',userSchema);
module.exports= user;
