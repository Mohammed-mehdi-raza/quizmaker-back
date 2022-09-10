import express from 'express';
import Routes from '../Routes/routes.js';
import passport from 'passport';
import session from 'express-session'; 
import cors from 'cors';
import './db/conn.js';
import './auth.cjs';
import 'dotenv/config';

const app=express();
const PORT=process.env.PORT||5000;

app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended:false,limit:'50mb'}));

app.use(session({
    secret:"secret",
    resave:false,
    saveUninitialized:true,
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/',Routes);

app.get('/',(req,res)=>{
    res.send("dd");
})

app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`);
})