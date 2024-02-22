const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const jwt = require("jsonwebtoken")
const fs = require("fs");
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer')
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();


const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

let secret = fs.readFileSync("./secretKey.txt", 'utf-8')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json());
app.use('/files', express.static('files'));





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./files`)
    },
    filename: function (req, file, cb) {
        cb(null, `${req.body.title}.pdf`)
    }
});
const upload = multer({ storage });

// Email sent after registration for placements


const sendMail = (email, StudentName) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'utkarsh.techmihirnaik@gmail.com',
            pass: 'erxi owyv rxbn aggq'
        }
    });
    let emailData = fs.readFileSync('emailResponse.html', 'utf8');
    emailData = emailData.replace("studentname", StudentName);

    var mailOptions = {
        from: 'utkarsh.techmihirnaik@gmail.com',
        to: email,
        subject: 'Registration for final placements | NMIMS PlaceComm',
        html: emailData
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};


const recoverPass = (email, name, pass) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'utkarsh.techmihirnaik@gmail.com',
            pass: 'erxi owyv rxbn aggq'
        }
    });


    let emailData = fs.readFileSync('passRecover.html', 'utf8');
    emailData = emailData.replace("studentname", name);
    emailData = emailData.replace("userPassword", pass)

    var mailOptions = {
        from: 'utkarsh.techmihirnaik@gmail.com',
        to: email,
        subject: 'Password Recovery | NMIMS PlaceComm',
        html: emailData
    }


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}
// Database: Defining Schemas

const PDFSchema = new mongoose.Schema({
    pdf: String
});

const querySchema = new mongoose.Schema({
    sapid: Number,
    query: String,
    resolved: Boolean
});


const CVSchema = new mongoose.Schema({

    Linkedin: String,
    Github: String,
    Languages: String,
    Age: Number,
})

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    sapid: Number,
    placed: Boolean
});

const TrainingSchema = new mongoose.Schema({
    title: String,
    date: String,
    venue: String,
    time: String,
    desc: String
})

const MaterialSchema = new mongoose.Schema({
    company: String,
    role: String, 
    desc: String,
    type: String,
    url: String   
})


// Database: 
const Doc = mongoose.model('PDFSchema', PDFSchema)
const Admin = mongoose.model('Admin', adminSchema);
const Student = mongoose.model('Student', studentSchema);
const Training = mongoose.model('Trainings', TrainingSchema);
const Material = mongoose.model('Material', MaterialSchema);
const Query = mongoose.model('Query', querySchema);

// Database: Connection
mongoose.connect('mongodb+srv://utkash:HNkcstfnDi9RXhH2@cluster0.0cgutry.mongodb.net/NMIMS');


//Auth Middlewares
const userAuthentication = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user
            next();
        });
    } else {
        res.sendStatus(401);
    }
};



app.get("/", (req, res) => {
    res.sendStatus(200);
})
app.get("/contact", (req, res) => {
    res.sendStatus(200);
})

app.get("/register", (req, res) => {
    res.sendStatus(200);
})
app.get("/about", userAuthentication, (req, res) => {
    res.sendStatus(200);
})

app.get("/preparation", userAuthentication, async (req, res) => {
    const materials = await Material.find();
    res.json({
        sapid: req.user.sapid,
        materials
    })
})

app.post("/register", async (req, res) => {
    const { fname, lname, email, pass, sapid } = req.body;
    let pass1 = jwt.sign(pass, secret);
    const student = await Student.findOne({ sapid });
    if (student) {
        res.status(403).send("Already registered");
    }
    else {
        const newStd = new Student({ firstName: fname, lastName: lname, email: email, password: pass1, sapid: sapid, placed: false });
        sendMail(email, fname + " " + lname);
        await newStd.save();
        res.sendStatus(200);
    }
});

app.post('/recoverPass', async (req, res) => {

    const sapid = req.body.sapid;
    const std = await Student.findOne({ sapid });
    if (std) {
        const pass = jwt.verify(std.password, secret);
        recoverPass(std.email, std.firstName + " " + std.lastName, pass);
        res.json("Pass Recovery Successfully").send();
    }
    else
        res.sendStatus(403);

})


app.patch("/changePass", userAuthentication, async (req, res) => {
    const { sapid, currPass, newPass } = req.body;
    let pass = jwt.sign(currPass, secret);
    const std = await Student.findOne({sapid, password: pass });
    if (std) {
        let password = jwt.sign(newPass, secret);
        const { firstName, lastName, email, sapid } = std;
        const updated = {firstName, lastName, email, password, sapid};
        let updatedStd = await Student.findOneAndUpdate({sapid}, {password});
        console.log(updatedStd)
        let token = jwt.sign({ sapid, currPass }, secret);
        res.json(token);
    }
});




app.get("/login", userAuthentication, (req, res) => {
    res.sendStatus(200);
})

app.get("/admin/login", (req, res) => {
    res.sendStatus(200);
})



app.post("/admin/login", async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username, password });
    if (admin) {
        const token = jwt.sign({ username, password }, secret, { expiresIn: '1h' });
        res.json(token);
    }
    else
        res.sendStatus(403);
});


app.post("/login", async (req, res) => {
    const { sapid, pass } = req.body;
    let pass1 = jwt.sign(pass, secret);
    const std = await Student.findOne({ sapid, password: pass1 });
    if (std) {
        let token = jwt.sign({ sapid, pass }, secret);
        let name = std.firstName[0] + std.lastName[0];
        res.json({ data: token, init: name });
    }
    else
        res.sendStatus(403);

});

app.get("/home", userAuthentication, async (req, res) => {
    
    const trainings = await Training.find();
    res.json({
        sapid: req.user.sapid,
        trainings
    })


})

app.get("/changePass", userAuthentication, (req, res) => {
    res.json({
        sapid: req.user.sapid
    })
})

app.get("/askAdmin", userAuthentication, async (req, res) => {
    const std = await Student.findOne({ sapid: req.user.sapid });
    res.json({
        sapid: std
    })
})

app.get("/admin/queries", async (req, res) => {
    const queries = await Query.find({resolved: false});
    if(queries){
        res.json({
            queries
        })
    }
    else{
        res.send("No Queries to be resolved")
    }
})
app.post("/admin/queries", async (req, res) => {
    console.log(req.body)
})

app.post("/askAdmin", userAuthentication, async (req, res) => {
   console.log("hello");
   const {sapid, query} = req.body;
   const q = await Query.findOne({sapid, query, resolved: false});
   console.log(req.body)
   if(q){
        res.json({"Resp":"Query Exists Already"})
   }
   else{
        const newQuery = new Query({sapid, query, resolved: false});
        await newQuery.save();
        res.json({"Resp": "Query Submitted"})
   }

})

app.get("/profile", userAuthentication, async (req, res) => {
    const std = await Student.findOne({ sapid: req.user.sapid });
    res.json({
        sapid: std
    })
})

app.get('/files/:fileName', userAuthentication, (req, res) => {
    
    const fileName = req.params.fileName;
    console.log(fileName)
    const filepath = __dirname + "/files/" + fileName + ".pdf";
    res.setHeader("Content-Type", "application/pdf")
    res.setHeader('Content-Disposition', 'inline; filename=' + fileName + '.pdf')
    res.sendFile(filepath);
})



app.get("/cvbuilder", userAuthentication, async (req, res) => {
    const std = await Student.findOne({ sapid: req.user.sapid });
    res.json({
        sapid: std
    })
})

app.get("/docs", userAuthentication, async (req, res) => {
    const std = await Student.findOne({ sapid: req.user.sapid });
    if(std){
        res.json({sapid: std.sapid})
    }
})


app.post("/docs", userAuthentication, upload.single("file"), async (req, res) => {
    const pdf = req.body.title;
    const doc = await Doc.findOne({ pdf });
    if (!doc) {
        const newDoc = new Doc({ pdf })
        await newDoc.save();
    }
    else {
        res.send("Resource Already exists")

    }


});

app.post('/admin/trainings', async (req, res)=>{
    const {title, date, venue, time, desc} = req.body;
    console.log(venue)
    const train  = await Training.findOne({title, date, venue, time, desc});
    if(train){
        res.sendStatus(403);
    }
    else{
        const newTraining = new Training({title, date, venue, time, desc});
        await newTraining.save();
        res.sendStatus(200);
    }
});

app.post('/admin/addPrep', async (req, res)=>{
    const {company, role, desc, type, url} = req.body;
    const material  = await Material.findOne({company, role, desc, type, url});
    if(material){
        res.sendStatus(403);
    }
    else{
        const newMaterial =  new Material({company, role, desc, type, url});
        await newMaterial.save();
        res.sendStatus(200);
    }
});

app.get('/admin/students', async (req,res)=>{
    const students = await Student.find();
    if(students){
        res.json({students})
    }
    else{
        res.sendStatus(404);
    }
})


app.post('/chatbot', async (req, res)=>{
    const {prompt}  = req.body;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.json({reply: text});
})



app.post("/cvbuilder", (req, res)=>{
    console.log(req.body)
})




var port = 3000;
app.listen(port, function () {
    console.log("Server started on port " + port);
});


