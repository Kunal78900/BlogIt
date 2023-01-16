const express =  require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');

const app = express();

const port = 7000;



mongoose.connect('mongodb+srv://KUNAL:KUNAL9900@mernapp.oaibt56.mongodb.net/test');
mongoose.connection.on("connected",()=>{
    console.log("DB connected");
})

app.use(cors());
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.end("welcome to blogIt");
})




app.listen(port,function(err){
       if(err){
        console.log(`error ${err}`)
       }
       return console.log("server is running at port",port);
})