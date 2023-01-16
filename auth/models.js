const mongoose = require('mongoose');
const { stringify } = require('uuid');
var CryptoJS = require('crypto-js');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    name:{
        type:string,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    ency_password:String,
    salt:String,
},
{
    timestamps:true
});
userSchema.virtual('password').set(function(plainpassword){
    this.salt=uuid.v4();
    this.ency_password = this.securePassword(plainpassword);
});

userSchema.methods = {
    securePassword:function (plainpassword){
        return Crypto.JS.SHA256(plainpassword,this.salt);
     },

     isAuthenticated:function(plainpassword){
        return this.ency_password === this.securePassword(plainpassword);
     },
};
  





const User = mongoose.model("User",userSchema);
module.exports = {User};