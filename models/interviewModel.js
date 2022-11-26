const mongoose=require("mongoose")
const Schema =mongoose.Schema



const interviewSchema=new Schema(
    {
        question: [{titulo:String,opciones:[{textorespuesta:String,iscorrect:Boolean}]}],
        category: { type: Schema.Types.ObjectId, ref: "categories" }               
    },
    {
    collection:"Interview"
    }
)
module.exports=mongoose.model("Interview", interviewSchema);