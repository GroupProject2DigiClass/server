const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    state: String,
    city: String,
    tool:String
})

var PostMessage = mongoose.model('PostMessage', postSchema);

module.exports=PostMessage;