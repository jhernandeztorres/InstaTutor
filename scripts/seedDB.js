const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/instaTutor"
);

const tutorSeed = [
    {
        firstName: "John",
        lastName: "Smith",
        subjects: ["React", "HTML", "css", "Bootstrap"],
        email: "jsmith@gmail.com",
        password: "password"
    },
    {
        firstName: "Jane",
        lastName: "Gomez",
        subjects: ["Javascript", "Python"],
        email: "jane123@gmail.com",
        password: "password"
    },
    {
        firstName: "Bill",
        lastName: "Jones",
        subjects: ["Math", "Finance", "Economics"],
        email: "billJones@gmail.com",
        password: "password"
    },
    {
        firstName: "Erica",
        lastName: "Garcia",
        subjects: ["Chemestry", "Biology"],
        email: "eg123@gmail.com",
        password: "password"
    }
]

db.Tutor
    .remove({})
    .then(() => db.Tutor.collection.insertMany(tutorSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });