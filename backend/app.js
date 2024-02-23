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
const latex = require('node-latex')

function LatexGen(data) {
    const { CVdetails, intern, project, certi, acad, por } = data
    const latex = `\\documentclass[a4paper,11pt]{article}
    \\RequirePackage[T1]{fontenc}
    
    \\usepackage{times}
    \\usepackage{calc}
    \\usepackage[shortcuts]{extdash}
    \\usepackage{amsmath}
    
    \\usepackage{graphicx} 
    
    \\reversemarginpar
    
    \\usepackage[paper=letterpaper,
                marginparwidth=1.1in,     % Length of section titles
                marginparsep=.075in,       % Space between titles and text
                margin=0.5in,               % 1 inch margins
                tmargin=0.65in,
                includemp]{geometry}
    
    \\setlength{\\parindent}{0in}
    
    \\usepackage[shortlabels]{enumitem}
    
    \\makeatletter
    \\newlength{\\bibhang}
    \\setlength{\\bibhang}{0em}
    \\newlength{\\bibsep}
     {\\@listi \\global\\bibsep\\itemsep \\global\\advance\\bibsep by\\parsep}
    \\newlist{bibsection}{itemize}{3}
    \\setlist[bibsection]{label=,leftmargin=\\bibhang,%
            itemindent=-\\bibhang,
            itemsep=\\bibsep,parsep=\\z@,partopsep=0pt,
            topsep=0pt}
    \\newlist{bibenum}{enumerate}{3}
    \\setlist[bibenum]{label=[\\arabic*],resume,leftmargin={\\bibhang+\\widthof{[999]}},%
            itemindent=-\\bibhang,
            itemsep=0.05in,parsep=\\z@,partopsep=0pt,
            topsep=0pt}
    \\let\\oldendbibenum\\endbibenum
    \\def\\endbibenum{\\oldendbibenum\\vspace{-.6\\baselineskip}}
    \\let\\oldendbibsection\\endbibsection
    \\def\\endbibsection{\\oldendbibsection\\vspace{-.6\\baselineskip}}
    \\makeatother
    
    \\usepackage{fancyhdr,lastpage}
    \\pagestyle{fancy}
    \\pagestyle{empty}      % Uncomment this to get rid of page numbers
    \\fancyhf{}\\renewcommand{\\headrulewidth}{0pt}
    \\fancyfootoffset{\\marginparsep+\\marginparwidth}
    \\newlength{\\footpageshift}
    \\setlength{\\footpageshift}
              {0.5\\textwidth+0.5\\marginparsep+0.5\\marginparwidth-2in}
    \\lfoot{\\hspace{\\footpageshift}%
           \\parbox{4in}{\\, \\hfill %
                        \\arabic{page} of \\protect\\pageref*{LastPage} % +LP
    %                    \\arabic{page}                               % -LP
                        \\hfill \\,}}
    
    \\usepackage{color,hyperref}
    \\definecolor{darkblue}{rgb}{0.0,0.0,1}
    \\hypersetup{colorlinks,breaklinks,
                linkcolor=darkblue,urlcolor=darkblue,
                anchorcolor=darkblue,citecolor=darkblue}
    
    \\renewcommand{\\section}[1]{\\pagebreak[3]%
        \\vspace{1.3\\baselineskip}%
        \\phantomsection\\addcontentsline{toc}{section}{#1}%
        \\noindent\\llap{\\scshape\\smash{\\parbox[t]{\\marginparwidth}{\\hyphenpenalty=10000\\raggedright #1}}}%
        \\vspace{-\\baselineskip}\\par}
    
    \\newcommand*\\fixendlist[1]{%
        \\expandafter\\let\\csname preFixEndListend#1\\expandafter\\endcsname\\csname end#1\\endcsname
        \\expandafter\\def\\csname end#1\\endcsname{\\csname preFixEndListend#1\\endcsname\\vspace{-0.6\\baselineskip}}}
    
    \\let\\originalItem\\item
    \\newcommand*\\fixouterlist[1]{%
        \\expandafter\\let\\csname preFixOuterList#1\\expandafter\\endcsname\\csname #1\\endcsname
        \\expandafter\\def\\csname #1\\endcsname{\\let\\oldItem\\item\\def\\item{\\pagebreak[2]\\oldItem}\\csname preFixOuterList#1\\endcsname}
        \\expandafter\\let\\csname preFixOuterListend#1\\expandafter\\endcsname\\csname end#1\\endcsname
        \\expandafter\\def\\csname end#1\\endcsname{\\let\\item\\oldItem\\csname preFixOuterListend#1\\endcsname}}
    \\newcommand*\\fixinnerlist[1]{%
        \\expandafter\\let\\csname preFixInnerList#1\\expandafter\\endcsname\\csname #1\\endcsname
        \\expandafter\\def\\csname #1\\endcsname{\\let\\oldItem\\item\\let\\item\\originalItem\\csname preFixInnerList#1\\endcsname}
        \\expandafter\\let\\csname preFixInnerListend#1\\expandafter\\endcsname\\csname end#1\\endcsname
        \\expandafter\\def\\csname end#1\\endcsname{\\csname preFixInnerListend#1\\endcsname\\let\\item\\oldItem}}
    
    \\newlist{outerlist}{itemize}{3}
        \\setlist[outerlist]{label=\\enskip\\textbullet,leftmargin=*}
        \\fixendlist{outerlist}
        \\fixouterlist{outerlist}
    
    \\newlist{lonelist}{itemize}{3}
        \\setlist[lonelist]{label=\\enskip\\textbullet,leftmargin=*,partopsep=0pt,topsep=0pt}
        \\fixendlist{lonelist}
        \\fixouterlist{lonelist}
    
    \\newlist{innerlist}{itemize}{3}
        \\setlist[innerlist]{label=\\enskip\\textbullet,leftmargin=*,parsep=0pt,itemsep=0pt,topsep=0pt,partopsep=0pt}
        \\fixinnerlist{innerlist}
    
    \\newlist{loneinnerlist}{itemize}{3}
        \\setlist[loneinnerlist]{label=\\enskip\\textbullet,leftmargin=*,parsep=0pt,itemsep=0pt,topsep=0pt,partopsep=0pt}
        \\fixendlist{loneinnerlist}
        \\fixinnerlist{loneinnerlist}
    
    \\newcommand{\\blankline}{\\quad\\pagebreak[3]}
    \\newcommand{\\halfblankline}{\\quad\\vspace{-0.5\\baselineskip}\\pagebreak[3]}
    
    \\usepackage{doi}
    \\usepackage{url}
    
    
    \\urlstyle{same}
    \\providecommand*\\emaillink[1]{\\nolinkurl{#1}}
    \\providecommand*\\email[1]{\\href{mailto:#1}{\\emaillink{#1}}}
    
    \\begin{document}
    
     {\\hspace*{-\\marginparsep minus \\marginparwidth}%
    \\begin{minipage}[t]{\\textwidth+\\marginparwidth+\\marginparsep}%
    \\centering
    {\\LARGE \\bfseries {${CVdetails.name}}}\\\\ 
    \\vspace{0.5cm} 
    \\href{https://www.linkedin.com/in/${CVdetails.linkedin}}{LinkedIn}  \\hspace{1cm}
    \\href{mailto:${CVdetails.email}}{Email}\\hspace{1cm}
    \\text{+91 ${CVdetails.contact}} \\hspace{1cm}
    \\href{https://github.com/${CVdetails.github}}{GitHub}
    
    \\rule{\\columnwidth}{1.2pt}
    
    \\vspace{0.2cm}
    \\end{minipage}}
    
    
    

     \\vspace{0.2cm}
    
    \\section{Education}
    
    \\textbf{${CVdetails.specialisation}},
    \\href{https://www.nmims.edu/}{NMIMS University}
    \\hfill {${CVdetails.gradYear}}\\\\ CGPA: ${CVdetails.gpa}
    
    
    \\section{Experience}
    
    
    \\textbf{${intern[0].role}},
    {${intern[0].company}}
    \\hfill {${intern[0].duration} months}
    \\begin{innerlist}
    \\item {${intern[0].desc}}
    
    \\end{innerlist}
    
    
    
    
    
    
    \\section{Projects}
    
    {${project[0].title}}
    \\hfill {${project[0].duration} months}
    \\begin{innerlist}
    \\item {${project[0].desc}}
    \\end{innerlist}
    \\vspace{0.4cm}
    

    
    
    
    
    
    \\section{Technical Skills}
    
    \\textbf{Programming Languages:}
    {${CVdetails.lang}}
    
    \\textbf{Tools/Frameworks/Softwares:}
    {${CVdetails.tools}}
    
    \\
    
   
    

    
    \\section{Certifications}
    
    \\begin{innerlist}
    
    \\item {${certi[0].title}}
    \\hfill {${certi[0].year}}
    
    \\end{innerlist}
    
    
    \\vspace{0.1cm}
    
    \\section{Position of Responsibility}
    \\textbf{${por[0].title || ""}},
    \\hfill {${por[0].year || ""}}
    \\begin{innerlist}
    \\item {${por[0].desc || ""}}
    
    
    \\end{innerlist}
    
    \\vspace{0.2cm}
    
    
    
    
    
    
    \\end{document}`;
    return latex
}

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

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
    const queries = await Query.find({ resolved: false });
    if (queries) {
        res.json({
            queries
        })
    }
    else {
        res.send("No Queries to be resolved")
    }
})
app.patch("/admin/queries", async (req, res) => {
    const {id, ans} = req.body;
    const query = await Query.findOne({_id: id});
    if(query){
        const ogquery = query.query + "!@#anstoYourQuery" + ans;
        const newQuery = await Query.findOneAndUpdate({_id:id}, {query: ogquery, resolved: true})
        console.log(newQuery);
        res.sendStatus(200)
}})

app.post("/askAdmin", userAuthentication, async (req, res) => {
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

app.get("/userQueries", userAuthentication, async (req, res)=>{
    const {sapid} = req.user;
    const query = await Query.find({sapid: sapid})
    res.json({query});
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
    if (std) {
        res.json({ sapid: std.sapid })
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

app.post('/admin/trainings', async (req, res) => {
    const { title, date, venue, time, desc } = req.body;
    console.log(venue)
    const train = await Training.findOne({ title, date, venue, time, desc });
    if (train) {
        res.sendStatus(403);
    }
    else {
        const newTraining = new Training({ title, date, venue, time, desc });
        await newTraining.save();
        res.sendStatus(200);
    }
});

app.post('/admin/addPrep', async (req, res) => {
    const { company, role, desc, type, url } = req.body;
    const material = await Material.findOne({ company, role, desc, type, url });
    if (material) {
        res.sendStatus(403);
    }
    else {
        const newMaterial = new Material({ company, role, desc, type, url });
        await newMaterial.save();
        res.sendStatus(200);
    }
});

app.get('/admin/students', async (req, res) => {
    const students = await Student.find();
    if (students) {
        res.json({ students })
    }
    else {
        res.sendStatus(404);
    }
})


app.post('/chatbot', async (req, res) => {
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



app.post("/cvbuilder", (req, res) => {
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
    res.setHeader("Content-Type", "application/pdf")
    res.setHeader('Content-Disposition', 'inline; filename=output.pdf')
    res.sendFile(filepath);

})




var port = 3000;
app.listen(port, function () {
    console.log("Server started on port " + port);
});


