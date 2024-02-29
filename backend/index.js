const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json());

app.use("/admin", adminRouter)
app.use(userRouter)

const mongoPass = process.env.MONGO_PASS

// Database: Connection
mongoose.connect(`mongodb+srv://utkash:${mongoPass}@cluster0.0cgutry.mongodb.net/NMIMS`);


var port = 3000;
app.listen(port, function () {
    console.log("Server started on port " + port);
});


