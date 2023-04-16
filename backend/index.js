import express from "express";
import connectDb from "./db.js";
import Tournament from "./model/tournamentModel.js";
import Participant from "./model/participantModel.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

connectDb();

//tournament

app.post("/tournament", (req, res) => {
  try {
    let tournamentData = new Tournament({
      title: req.body.title,
      start: req.body.start,
      end: req.body.end,
      about: req.body.about
    });
    tournamentData.save();
    res.send({
      success: true,
      message: "successfully added tournament data",
      
    });
    console.log("successfully added tournament data");
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in adding tournament data",
      
    });
  }
});

app.get("/tournament", (req, res) => {
  Tournament.find().then((data) => {
    res.send(data);
  });
});

app.get("/tournament/:id", (req, res) => {
  let id = req.params.id;
  Tournament.findOne({ _id: id }).then((data) => {
    res.send(data);
  });
});

app.delete("/tournament/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  Tournament.deleteOne({ _id: id }).then((data) => {
    console.log("deleted successfully");
    res.send(data);
  });
});

app.put("/tournament/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  Tournament.updateOne({_id:id},
    {
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
        about: req.body.about
        
    }
    ).then((data)=>{
      console.log("updated successfully");
      res.send(data)
    })
});

//paarticipants

app.post("/participants", (req, res) => {
  try {
    let participantsData = new Participant({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      phone: req.body.phone,
    });
    participantsData.save();
    res.status(200).send({
      message: "successfully added participants data",
    });
    console.log("successfully added participants data");
  } catch (error) {
    res.status(500).send({
      message: "error in adding participants data",
    });
  }
});

app.get("/participants", (req, res) => {
  Participant.find().then((data) => {
    res.send(data);
  });
});
app.get("/participants/:id", (req, res) => {
  let id = req.params.id;
  Participant.findOne({ _id: id }).then((data) => {
    res.send(data);
  });
});


app.delete("/participants/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  Participant.deleteOne({ _id: id }).then((data) => {
    console.log("deleted successfully");
    res.send(data);
  });
});

app.put("/participants/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  Participant.updateOne({_id:id},
    {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      phone: req.body.phone,
        
    }
    ).then((data)=>{
      console.log("updated successfully");
      res.send(data)
    })
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
