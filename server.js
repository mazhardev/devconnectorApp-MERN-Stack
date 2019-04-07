const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const app = express();
//DB config
const db = require("./config/Keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("Mongo DB connected"))
  .catch(err => console.log(err));
app.get("/", (req, res) => res.send("Hello World!"));

//Use Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
