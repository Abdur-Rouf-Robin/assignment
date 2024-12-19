const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
        name: {type:String,required:true},
        email:{type:String,unique:true,required:true,lowercase:true},
        password: {type:String,required:true},
        otp:{type:String,required:true}
    },
    {timestamps:true,versionKey:false}
)
const UserModel=mongoose.model('users',DataSchema)
module.exports=UserModel