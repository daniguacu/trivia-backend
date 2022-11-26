const mongoose=require("mongoose")
const Schema =mongoose.Schema

const user={
    name:String,
    email:String,
    results:[{ interview:String,grade:Number }],
    interview: [{ type: Schema.Types.ObjectId, ref: "Interview" }]

}

const UserSchema=new Schema(user)
module.exports=mongoose.model("User", UserSchema);