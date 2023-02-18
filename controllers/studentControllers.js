const Student = require("../models/studentModel")


exports.getStudentById = async (req, res) => {
    try {
        const studentById = await Student.findById(req.params.studentId);
        res.json({ studentById })
    } catch (err) {
        res.json({ message: err })
    }
}

exports.createStudent = async (req, res) => {
    try {
        const student = new Student({
            ...req.body
        })
        const saveStudent = await student.save();
        res.json(saveStudent);
    } catch (err) {
        res.json({ message: err })
    }
}