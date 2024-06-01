require('dotenv').config()
const tasks = require("./routes/tasks");
//const connection = require("./db");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//connection();

app.use(express.json());
app.use(cors());

const PORT=5000;
const URI=process.env.MONGO_URI || "mongodb+srv://shubhamssc100:EbFiDLczIbS0nJVe@project0.gystw8r.mongodb.net/project0";



const DatabaseDB = async () => {
  try {
     await mongoose.connect(
     URI
    );
    app.listen(PORT , ()=>{
      console.log(`server run on localhost:${PORT}`);
    });
    console.log("MONGODB IS connected sucessfully");

  } catch (error) {
    console.log("MONGODB Connection Failed ", error);
    process.exit(1);
  }
};

DatabaseDB();//Calling Database Function

app.get('/ok', (req, res) => {
    res.status(200).send('ok')
  })

app.use("/api/tasks", tasks);
/*
const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`Listening on port ${port}...`));
*/