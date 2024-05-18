const mongoose = require('mongoose');


const messageSchema = mongoose.Schema({
    message:String,
    user:
        {type:mongoose.Schema.Types.ObjectId ,ref:"user"},
     date:{
        type:Date,
        default:Date.now
     }   
    
})


const message = mongoose.model('message',messageSchema);
module.exports= message;
