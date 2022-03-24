const express = require("express");
const mongoose = require("mongoose");
const ATLAS_URI = require("./config");
const app = express();
const port = process.env.PORT || 3001
const config = require("./config")
const usersRoute = require("./routes/usersRoute");
const recipesRoute = require("./routes/recipesRoute");
const cartManagementRoute = require("./routes/cartManagementRoute");
app.use(express.json());

mongoose.connect(ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on("error", () => {
    console.log("Error while connecting to the database");
});

db.once('open', () => {
    console.log("Database connected");
});

app.use("/users", usersRoute);
app.use("/recipes", recipesRoute);
app.use("/cart", cartManagementRoute);

app.listen(port, () => {
    console.log("App is listening on port " + port);
});



module.exports = app;