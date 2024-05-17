const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    content:String,
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }]
    ,
    user:
        {type:mongoose.Schema.Types.ObjectId ,ref:"user"},
     date:{
        type:Date,
        default:Date.now
     }   
    
})


const post = mongoose.model('post',postSchema);
module.exports= post;
