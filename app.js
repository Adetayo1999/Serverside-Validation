const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine' , 'ejs');
app.use('/assets' , express.static('assets'));
app.use('/scripts' , express.static('scripts'));

const urlencoded = bodyParser.urlencoded({extended:true});
    //  app.use(express.urlencoded({extended:true}))     
     app.use(express.json())

  const adminDetails = {
      username:"omotomiwa",
      password:"panasonic99"
  }

app.get('/' ,  (req , res) => {
  
    res.render('login')
 
})


app.post('/authorize' , urlencoded ,  (req , res) => {       
      
    if(req.body.username === adminDetails.username && req.body.password === adminDetails.password ){
        res.end(JSON.stringify({status:200 , message:"Successful Logged in as "+req.body.username}))

        
    }
    else{
        res.end(JSON.stringify({status:400 , message:"Incorrect Username Or Password"}));
    }
  
    // res.render('profile');
    console.log(req.body);
})


app.listen(4000);

console.log("App started on port 4000")