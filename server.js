const express = require("express");
const app = express();


const studentsData = [
    {
        student_id:101,
        name:"Lucky",
        course:"BCA"
    },
    {
        student_id:102,
        name:"new Lucky",
        course:"BCA2nd"
    },
    {
        student_id:103,
        name:"Lucky New",
        course:"BCA3rd"
    }
];

app.use(express.json());    
app.use(express.static("public"));

app.get("/students", (req,res) => {
    res.json(studentsData);
});

app.get("/students/:id", (req,res) => {
    const id = Number(req.params.id);
    const student = studentsData.find(s => s.student_id === id);
    res.json(student);
})

app.post("/students", (req,res) => {
    const newStudent = {
        student_id: Number(req.body.student_id),
        name: req.body.name,
        course: req.body.course
    };

    studentsData.push(newStudent);
    res.json("done");
});

app.delete("/students", (req,res) => {
    studentsData.length = 0;
    res.json("students deleted");
});

app.delete("/students/:id", (req,res) => {
    const id = Number(req.params.id);
    const index = studentsData.findIndex(s => s.student_id === id);
    studentsData.splice(index, 1);
    res.json("user deleted");
});

app.put("/students/:id", (req,res) => {
    const id = Number(req.params.id);
    const index = studentsData.findIndex(s => s.student_id === id);
    const newStudent = {
        student_id:id,
        name: req.body.name,
        course: req.body.course
    };
    studentsData[index] = newStudent;
    res.json("student updated successfully");
});

app.patch("/students/:id", (req,res) => {
    const id = Number(req.params.id);
    const index = studentsData.findIndex((s) => s.student_id === id);
    if(req.body.name){
        studentsData[index].name = req.body.name;
    }

    if(req.body.course){
        studentsData[index].course = req.body.course;
    }
    res.json("details updated");
});

app.listen(2001, () => {
    console.log("server running on 2001");
});
