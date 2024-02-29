const mongoose = require('mongoose');
const express = require('express')
const {Student, Training, Material, Query, Doc } = require('../db')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const router = express.Router();
const fs = require('fs')
const multer = require('multer')

const {userAuthentication, secret} = require('../middleware/auth')

const latex = require('node-latex')
const LatexGen = require('../resume.js')
const {sendMail, recoverPass} = require('../email/email')


const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

router.use('/files', express.static('files'));

require('dotenv').config();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./files`)
    },
    filename: function (req, file, cb) {
        cb(null, `${req.body.title}.pdf`)
    }
});
const upload = multer({ storage });


router.get("/", (req, res) => {
    res.sendStatus(200);
})
router.get("/contact", (req, res) => {
    res.sendStatus(200);
})

router.get("/register", (req, res) => {
    res.sendStatus(200);
})
router.get("/about", (req, res) => {
    res.sendStatus(200);
})





router.get("/preparation", userAuthentication, async (req, res) => {
    const materials = await Material.find();
    res.json({
        sapid: req.user.sapid,
        materials
    })
})

router.post("/register", async (req, res) => {
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

router.post('/recoverPass', async (req, res) => {

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


router.patch("/changePass", userAuthentication, async (req, res) => {
    const { sapid, currPass, newPass } = req.body;
    let pass = jwt.sign(currPass, secret);
    const std = await Student.findOne({ sapid, password: pass });
    if (std) {
        let password = jwt.sign(newPass, secret);
        const {sapid } = std;
        let updatedStd = await Student.findOneAndUpdate({ sapid }, { password });
        console.log(updatedStd)
        let token = jwt.sign({ sapid, currPass }, secret);
        res.json(token);
    }
});




router.get("/login", userAuthentication, (req, res) => {
    res.sendStatus(200);
})



router.post("/login", async (req, res) => {
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

router.get("/home", userAuthentication, async (req, res) => {

    const trainings = await Training.find();
    res.json({
        sapid: req.user.sapid,
        trainings
    })


})

router.get("/changePass", userAuthentication, (req, res) => {
    res.json({
        sapid: req.user.sapid
    })
})

router.get("/askAdmin", userAuthentication, async (req, res) => {
    const std = await Student.findOne({ sapid: req.user.sapid });
    res.json({
        sapid: std
    })
})

router.post("/askAdmin", userAuthentication, async (req, res) => {
    const { sapid, query } = req.body;
    const q = await Query.findOne({ sapid, query, resolved: false });
    if (q) {
        res.json({ "Resp": "Query Exists Already" })
    }
    else {
        const newQuery = new Query({ sapid, query, resolved: false });
        await newQuery.save();
        res.json({ "Resp": "Query Submitted" })
    }
})

router.get("/userQueries", userAuthentication, async (req, res)=>{
    const {sapid} = req.user;
    const query = await Query.find({sapid: sapid})
    res.json({query});
})

router.get("/profile", userAuthentication, async (req, res) => {
    const std = await Student.findOne({ sapid: req.user.sapid });
    res.json({
        sapid: std
    })
})

router.get('/files/:fileName', userAuthentication, (req, res) => {

    const fileName = req.params.fileName;
    console.log(fileName)
    const filepath = __dirname + "/files/" + fileName + ".pdf";
    res.setHeader("Content-Type", "application/pdf")
    res.setHeader('Content-Disposition', 'inline; filename=' + fileName + '.pdf')
    res.sendFile(filepath);
})



router.get("/cvbuilder", userAuthentication, async (req, res) => {
    const std = await Student.findOne({ sapid: req.user.sapid });
    res.json({
        sapid: std
    })
})

router.get("/docs", userAuthentication, async (req, res) => {
    const std = await Student.findOne({ sapid: req.user.sapid });
    if (std) {
        res.json({ sapid: std.sapid })
    }
})


router.post("/docs", userAuthentication, upload.single("file"), async (req, res) => {
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




router.post('/chatbot', async (req, res) => {
    const { prompt } = req.body;
    const result = await model.generateContent(prompt);
    const response = await result.response;

    try {
        const text = response.text();
        res.json({ reply: text });
    }
    catch (err) {
        console.log(err)
    }


})



router.post("/cvbuilder", (req, res) => {
    console.log(req.body)
    const data = req.body;
    const resumeTex = LatexGen(data);

    const input = (resumeTex)
    const output = fs.createWriteStream('output.pdf')
    const pdf = latex(input)

    const filepath = __dirname +  "/output.pdf";


    pdf.pipe(output)
    pdf.on('error', err => console.error(err))
    pdf.on('finish', () => console.log('PDF generated!'))
    // res.setHeader("Content-Type", "application/pdf")
    // res.setHeader('Content-Disposition', 'inline; filename=output.pdf')
    // res.sendFile(filepath);

})


module.exports = router;