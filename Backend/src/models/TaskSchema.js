const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema([{
    Task: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedTime:{
        type:String,
        required:true
    }
}], {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task