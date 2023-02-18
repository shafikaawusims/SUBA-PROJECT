const mongoose= require("mongoose")

const studentSchema= new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    middleName: {
        type: String,
        require: false,
    },
    lastName: {
        type: String,
        require: true,
    },
    dateOfBirth: {
        type: Date,
        require: true,
        trim: true,
    },
    gender: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        require: true,
    },
    alternativePhoneNumber: {
        type: String,
        require: false,
    },
    department: {
        type: String,
        require: true,
    },
    level: {
        type: Number,
        require: true,
    },
    hallOfResidence: {
        type: String,
        require: true,
    }
})

module.exports = Student = mongoose.model("student", studentSchema);