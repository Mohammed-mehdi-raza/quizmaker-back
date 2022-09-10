import passport from "passport";
import '../src/auth.cjs';
import test from '../models/test.js';

export const user=passport.authenticate('google',{scope:['email','profile']});

export const callback=passport.authenticate( 'google', {
    successRedirect: '/success',
    failureRedirect: '/failure'
});

export const success=(req,res)=>{
    res.redirect('https://cool-frangipane-8ecd98.netlify.app/user')
}

export const failure=(req,res)=>{
    res.redirect('https://cool-frangipane-8ecd98.netlify.app')
}

export const isLoggedIn=(req,res,next)=>{
    if(req.user){
        next();
    }else{
        res.sendStatus(401);
    }
}

export const logout=(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
        }else{
            req.logout((err)=>{
                console.log(err);
                res.redirect("https://cool-frangipane-8ecd98.netlify.app");
            });
        }
    })
}

export const addTest=async(req,res)=>{
    const data=req.body;
    try {
        const result = await test.create({name:data.name,Questions:data.test});
        res.status(201).json({message:"success"});
    } catch (error) {
        res.status(200).json({message:error})
    }
};
