const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title:String,
    description:String,
    user:{
        type:mongoose.Schema.Types.ObjectId, ref:"user"
    },
    
},
{      timestamps: true,
});



const Blog= mongoose.model("Blog",blogSchema);

module.exports = {Blog};
