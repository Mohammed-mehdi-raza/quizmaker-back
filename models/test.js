import mongoose from 'mongoose';

const Schema=mongoose.Schema;

const tests=new Schema({
    name:{
        type:String,
    },
    Questions:[{
        Type:{
            type:String,
            required:true,
        },
        points:{
            type:Number,
            required:true,
        },
        question:{
            type:String,
            required:true,
        },
        option1:{
            type:String,
        },
        option2:{
            type:String,
        },
        option3:{
            type:String,
        },
        option4:{
            type:String,
        },
        answer:{
            type:String,
        }
    }]
});

const test = mongoose.model('test',tests);

export default test;