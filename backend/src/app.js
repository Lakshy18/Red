const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./data");
const TableData = require("./models/dataSchema");

// initializing express
const app = express();
app.use(cors());
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/tableData", async (req, res) => {
  try {
    const data = await TableData.find();
    res.status(200).json(data);
    // console.log(data);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
});
app.delete("/delTableData/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const data = await TableData.findByIdAndDelete({ _id: id });
    res.status(200).json(data);
    // console.log("data deleted");
  } catch (error) {
    res.status(400).json({ error: "data can not be deleted" });
  }
});
app.put("/updateTableData/:id", jsonParser, async (req, res) => {
  const id = req.params.id;
  console.log(id)
  const { name, mobileNumber, email, hobbies } = req.body;
  // console.log(name + mobileNumber + email + hobbies + "updated");
  try {
    const update = await TableData.findOneAndUpdate(
      { _id: id },
      {
        name: name,
        mobileNumber: mobileNumber,
        email: email,
        hobbies: hobbies,
      }
    );
    console.log("data Updated");
    res.status(200).json(update);
  } catch (error) {
    console.log(error+ "errrrrrrrrrr")
    res.status(400).json({ error: "data can't be update" });
  }
});
app.post("/postData", jsonParser, async (req, res) => {
  const { name, mobileNumber, email, hobbies } = req.body;
  try {
    await TableData.create({
      name: name,
      mobileNumber: mobileNumber,
      email: email,
      hobbies: hobbies,
    });
    res.status(200).json({ message: "Item entered Successfully" });
  } catch (error) {
    res.status(400).json({ error: "data can't be added" });
  }
});
//
app.post("/refreshAllData", async (req, res) => {
  try {
    await TableData.deleteMany({}, { timeout: 30000 });
    await TableData.insertMany(data);
    res.status(200).json({ message: "Item refreshed Successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error while refreshing data" });
  }
});
app.delete("/deleteAlldata", async (req, res) => {
  try {
    await TableData.deleteMany({}, { timeout: 30000 });
    res.status(200).json({  message:"Data deleted successfully" });;
  } catch (error) {
    res.status(400).json({ error: "data can not be deleted" });
  }
});
module.exports = app;
