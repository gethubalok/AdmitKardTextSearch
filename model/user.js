const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    query:{
        type:String,
        required:true,
    },
    topic:{
        type:String,
        required:true,
    },
    tags:{
        type:String,
        required:true,
    } 
},{
    timestamps:true
});

module.exports=mongoose.model('User',userSchema);


