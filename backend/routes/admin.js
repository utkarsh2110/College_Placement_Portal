const mongoose = require('mongoose');
const express = require('express')
const { Admin, Student, Training, Material, Query } = require('../db')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const secret = process.env.SECRET_KEY
const router = express.Router();

router.get("/login", (req, res) => {
    res.sendStatus(200);
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username, password });
    if (admin) {
        const token = jwt.sign({ username, password }, secret, { expiresIn: '1h' });
        res.json(token);
    }
    else
        res.sendStatus(403);
});


router.get("/queries", async (req, res) => {
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
router.patch("/queries", async (req, res) => {
    const {id, ans} = req.body;
    const query = await Query.findOne({_id: id});
    if(query){
        const ogquery = query.query + "!@#anstoYourQuery" + ans;
        const newQuery = await Query.findOneAndUpdate({_id:id}, {query: ogquery, resolved: true})
        console.log(newQuery);
        res.sendStatus(200)
}})

router.post('/trainings', async (req, res) => {
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

router.post('/addPrep', async (req, res) => {
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

router.get('/students', async (req, res) => {
    const students = await Student.find();
    if (students) {
        res.json({ students })
    }
    else {
        res.sendStatus(404);
    }
})

router.get("/studentData", async (req, res)=>{
    const students = await Student.find();
    if(students){
        res.json({students});
    }
    else{
        res.sendStatus(404);
    }
})

module.exports = router