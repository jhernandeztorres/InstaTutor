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
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["React", "HTML", "CSS", "Bootstrap"],
        email: "jsmith@gmail.com",
        password: "password"
    },
    {
        firstName: "Jane",
        lastName: "Gomez",
        image:   "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Javascript", "Python"],
        email: "jane123@gmail.com",
        password: "password"
    },
    {
        firstName: "Bill",
        lastName: "Jones",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Math", "Finance", "Economics"],
        email: "billJones@gmail.com",
        password: "password"
    },
    {
        firstName: "Erica",
        lastName: "Garcia",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["History", "Algebra"],
        email: "eg123@gmail.com",
        password: "password"
    },
    {
        firstName: "Matt",
        lastName: "James",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Chemistry", "Biology"],
        email: "eg12234233@gmail.com",
        password: "password"
    },
    {
        firstName: "Jennifer",
        lastName: "Simpson",
        image:  "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        subjects: ["Physics", "World History"],
        email: "eg12234234233@gmail.com",
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