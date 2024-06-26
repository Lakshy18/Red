const express = require("express");
// const cors = require("cors");
//initializing mongoose
const mongoose = require("mongoose");

// module/file import
const data = require("./src/data");
const TableData = require("./src/models/dataSchema");
const app = require("./src/app");

//dotenv import
// const dotenv = require("dotenv").config();

// Parse JSON bodies (as sent by API clients)
mongoose.set("strictQuery", false);




// Port
const port = 4000

// Database url
const dbURL =
  "mongodb+srv://lakshyraj:lakshyraj@cluster0.kwp1tvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Listing server on port 3000
const connectionFunc = async () => {
  try {
    await mongoose
      .connect(dbURL)
      .then(() => console.log("Connected to Database"));
    // server listening
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  } catch (error) {
    console.log(error);
  }
};
connectionFunc();

// refreshing
const refresh = async () => {
  try {
    await TableData.deleteMany({}, { timeout: 30000 });
    console.log("All Subscriber are deleted successfully!");
    const newTableData = await TableData.insertMany(data);
    console.log(`${newTableData.length} New subscriber added successfully`);
  } catch (error) {
    console.log(error, "Error while refreshing data");
  }
};
refresh();
