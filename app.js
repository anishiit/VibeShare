const express = require('express');
const app = express();
const userModel = require('./model/user');
const postModel = require('./model/post');
const messageModel = require('./model/message');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.render('signup');
})
app.get('/home',isLoggedIn,async(req,res)=>{
    let posts = await postModel.find().populate("user");
    let user =await userModel.findOne({email: req.user.email}).populate("posts");
    res.render('home',{posts ,user});
    // console.log(req.user);have data that is stored in the cookie
})
app.get('/profile',isLoggedIn,async(req,res)=>{
    
    let user =await userModel.findOne({email: req.user.email}).populate("posts"); //ishse posts ki id se data jaega ab na ki id
    res.render('profile',{user});
   
})
app.get('/profile/:username', isLoggedIn, async (req, res) => {
// res.send(req.params.username);
let user = await userModel.findOne({username:req.params.username}).populate("posts");
res.render('profiles',{user})

});
app.get("/like/:id",isLoggedIn,async(req,res)=>{
    let post = await postModel.findOne({_id: req.params.id}).populate("user");

    if(post.likes.indexOf(req.user.userid)=== -1){
        post.likes.push(req.user.userid);
    }else{
        post.likes.splice(post.likes.indexOf(req.user.userid),1);

    }
    
    await post.save();
    res.redirect("/home");

})
app.get("/edit/:id",isLoggedIn,async(req,res)=>{
    let post = await postModel.findOne({_id: req.params.id}).populate("user");

    res.render('edit',{post});

})
app.post("/update/:id",isLoggedIn,async(req,res)=>{
    let post = await postModel.findOneAndUpdate({_id: req.params.id},{content: req.body.content});

    res.redirect("/profile");

});
app.get('/delete/:id',async(req,res)=>{
    let post =await postModel.findOneAndDelete({_id: req.params.id});
    res.redirect('/profile');
})
app.get("/chatRoom",isLoggedIn,(req,res)=>{
    res.render("chatRoom")
})
app.get("/message",isLoggedIn,(req,res)=>{

    res.render("message")
})
app.post('/message',isLoggedIn,async(req,res)=>{
    
    let user =await userModel.findOne({email: req.user.email});
let {message}= req.body;
let post= await messageModel.create({
    user: user._id,
    message
});

user.messages.push(post._id);
 await user.save();  
 res.redirect("/message");
})

app.post('/post',isLoggedIn,async(req,res)=>{
    
    let user =await userModel.findOne({email: req.user.email});
let {content}= req.body;
let post= await postModel.create({
    user: user._id,
    content
});

user.posts.push(post._id);
 await user.save();  
 res.redirect("/profile");
})
app.get('/login',(req,res)=>{
    res.render('login');
})
app.post('/login',async(req,res)=>{
    let {email,password}=req.body;
    let user =await userModel.findOne({email});
    if(!user) return res.status(500).send("Something went wrong");
    
    bcrypt.compare(password,user.password,function(err,result){
        if(result){
            
            let token=  jwt.sign({email:email , userid: user._id},"key");
            res.cookie("token" , token);
            
            res.status(200);
            res.redirect("/profile");
        } 

        
    })
    
})
app.post('/create',async(req,res)=>{
let {email , password,username,name}=req.body;
let user= await userModel.findOne({email});
if(user) return res.status(500).send("user already registered");

bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt, async(err,hash)=>{
        let user = await userModel.create({
            username,
            name,
            password:hash,
            email
        });
       let token=  jwt.sign({email:email , userid: user._id},"key");
       res.cookie("token" , token); 
       res.redirect("/profile");
    })
})

})

app.get('/logout',(req,res)=>{
    res.cookie("token","");
    res.redirect('/login');
})

function isLoggedIn(req,res,next){
    if(req.cookies.token === "")res.redirect('/login');
    else{
        let data = jwt.verify(req.cookies.token ,"key");
        req.user=data;
         next();
    }
   
}
const PORT = process.env.PORT
app.listen(PORT);