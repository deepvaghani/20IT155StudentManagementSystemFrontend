const express = require("express");
const mongoose = require("mongoose");
require("mongoose");
mongoose.connect("mongodb://localhost:27017/nodejs");

const studentSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required: true,
    },
    Name: {
        type: String,
        required: true,
        trim: true,
    },
    Address: {
        type: String,
        required: true,
        trim: true,
    },
});

studentSchema.methods.toJSON = function () {
    const student = this;
    const studentObject = student.toObject();
    return studentObject;
};

const Student = mongoose.model("Student", studentSchema);
var app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.listen(8080, () =>
    console.log("Developement server is running on port 8080"),
);

//get all students
app.get("/students", async (req, res) => {
    const student = await Student.find();
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.status(200).send(student);
});

// Get student with particular id
app.get("/student/:Id", async (req, res) => {
    try {
        const student = await Student.findOne({ Id: req.params.Id });
        if (!student) {
            res.status(404).send({ error: "Record not found" });
        } res.status(200).send(student);
    } catch (e) {
        res.status(500).send(e);
    }
});

//Insert new student
app.post("/students", (req, res) => {
    const student = new Student(req.body);
    student.save();
    res.status(200).send("Record Added");
});

//Delete student with particular id
app.delete("/student/:Id", async (req, res) => {
    try {
        const student = await Student.deleteOne({ Id: req.params.Id });
        if (student.deletedCount === 0) res.status(404).send("Record not found");
        res.status(200).send("Record Removed");
    } catch (e) {
        res.status(500).send(e);
    }
});

//Update student information
app.put("/student/:id", async (req, res) => {
    try {
        const student = await Student.updateMany(req.params, {
            $set: req.body
        });
        if (!student) res.status(404).send({ error: "Record not found" });
        res.status(200).send("Record Updated");
    } catch (e) {
        res.status(500).send(e);
    }
});