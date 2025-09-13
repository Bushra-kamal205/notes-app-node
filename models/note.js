const mongoose = require('mongoose');
const notesSchema = new mongoose.Schema({
   title:{
    type:String,
     required:[true , "Please fill this field"],
   },
    note:{
        type:String,
     required:[true , "Please fill this field"],
    },
});
const notesModel = mongoose.model("generalnotes" , notesSchema);
module.exports = notesModel;