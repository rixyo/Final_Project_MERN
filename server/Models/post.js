const mongoose =require("mongoose")
const postSchema=mongoose.Schema({
    title:{
        type: String,
        required:[true, 'Please provide a title'],
        max: 120,
    },
    description:{
        type: String,
        required:[true, 'Please mention something about your post']
    },
    image:{
        type: String,
    },
    tags: [String],
   
    
    likeCount:{
        type: Number,
        default: 0,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
      },
     
    }
   

, { timestamps: true })

module.exports=mongoose.model('Post',postSchema)