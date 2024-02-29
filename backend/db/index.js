const mongoose = require('mongoose');

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

module.exports={
    Doc,
    Admin,
    Student,
    Training,
    Material,
    Query,
}