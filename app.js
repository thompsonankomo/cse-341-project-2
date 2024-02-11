
const express = require('express');
const app = express();
require('dotenv').config();
const dbConnect = require('./db/connection');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const URI = process.env.URI ;
const passport = require ('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const cors = require('cors');

const port = process.env.PORT || 8080;

app
.use(bodyParser.json())
.use(session(
  {
    secret:"secret",
    resave: false,
    saveUninitialized:true,
  })
)
//This is the basic express session({..})initialization.
.use(passport.initialize())
//Init passport on every route call//
.use(passport.session())
//Allow passport to use express-session//
.use((req, res, next) =>{
  res.setHeader("Access Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With,Content-Type,Accept,Z-Key,Authoorization");
  res.setHeader("Access-Control-Allow-Methods",
  "POST,GET,PUT,PATCH,OPTIONS,DELETE");
  next();
})
.use(cors({methods:['GET','POST','DELETE','UPDATE','PUT','PATCH']}))
.use(cors({origin:"*"}))
.use("/",require("./routes/index.js"));

passport.use(new GitHubStrategy({
  clientID:process.env.GITHUB_CLIENT_ID,
  clientSecret:process.env.GITHUB_CLIENT_SECRET,
  callbackURL:process.env.CALLBACK_URL
},
function(accessToken, refreshToken, profile,done){
  //User.findOrCreate({githubId:profile.id}, function(err,user){
    return done(null,profile);
  //});
}));


passport.serializeUser((user, done)=>{
  done(null,user);
});
passport.deserializeUser((user, done)=>{
  done(null,user);
});
app.get('/',(req,res)=>{res.send(req.session.user!== undefined?`Logged in as ${req.session.user.displayName}`:"Logged out")});
app.get('/github/callback',passport.authenticate('github',{
  failureRedirect:'.api-docs',session:false}),
  (req, res)=>{
    req.session.user = req.user;
    res.redirect('/');
  });

  MongoDB.initDb((err,mongoDB)=>{
    if (err){
      console.log(err);
    }else{
      app.listen(port);
      console.log('app started on Port ${port}');
    }
  })


// Connect to the database server//
dbConnect(URI);

// Boody parser, this makes the req body readable//
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Main router//
app.use('/', router);


app.listen(port, () => {
  console.log(`Connected to DB and Server listening on port: ${port}`);
})