import mongoose from "mongoose";

// tornament data

const tournamentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  about:{
    type:String,
    required:true
  }
});

const Tournament = mongoose.model("Tournament", tournamentSchema);

export default Tournament;
