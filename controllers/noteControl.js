const notesModel = require("../models/note");
const createNotes =  async (req,res)=>{
    const note = await new notesModel({
       
        title: req.body.title,
        note: req.body.note,
    });
   await note.save();
    res.status(201).json({note});
};
const getNotes = async (req, res) =>{
    const note =await notesModel.find({});
    res.status(200).json({
        note,
    });
};
const getsingleNotes =  async(req, res) =>{
  const id = req.params.id;
  const note = await notesModel.findById(id);
  res.status(200).json({note});
};
const deleteNotes = async (req, res) =>{
   const id = req.params.id;
   const dele =await notesModel.findByIdAndDelete(id);
   res.status(200).json({dele});
};
const updateNotes = async (req,res)=>{
     const id = req.params.id;
     const body = req.body;
     const update =await notesModel.findByIdAndUpdate(id, body ,{new: true});
     res.status(200).json({update});
};
module.exports = {createNotes,getNotes,getsingleNotes,deleteNotes,updateNotes}