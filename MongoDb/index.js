import mongoose from 'mongoose';
// Importing mongoose to connect to MongoDB
import express from 'express';

mongoose.connect('mongodb://localhost:27017/Sample',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Failed to connect to MongoDB');
});


const student = new mongoose.Schema({
    name: String,
    workout: Boolean,
    height: Number,
});

const Student = new mongoose.model('student', student);




const adder = async () => {
    const ss = new Student({
    name: 'John',
    workout: true,
    height: 5.9,
    });

    await ss.save();
}

adder();