const express=require('express');
const MensRanking=require("../models/mens");

const router=new express.Router();

//get req

router.get("/mens",async (req,res)=>{
    try {
        const getMens= await MensRanking.find({}).sort({"ranking":1});
        res.send(getMens);
        
    } catch (error) {
        res.status(400).send(error);
        
    }

})

router.get("/mens/:id",async (req,res)=>{
    try {
        const _id=req.params.id;
        const getMen= await MensRanking.findById(_id);
        res.send(getMen);
        
    } catch (error) {
        res.status(400).send(error);
        
    }

})

//post req

router.post("/mens",async (req,res)=>{
    try {
        console.log(req.body);
        const  addingMensRecord=new MensRanking(req.body);
        const insertMens=await addingMensRecord.save();
        res.status(201).send(insertMens);
        
    } catch (error) {
        res.status(400).send(error);
        
    }

})

//patch req

router.patch("/mens/:id",async (req,res)=>{
    try {
        const _id=req.params.id;
        const updateMen= await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(updateMen);
        
    } catch (error) {
        res.status(500).send(error);
        
    }

})

//delete req

router.delete("/mens/:id",async (req,res)=>{
    try {
        const _id=req.params.id;
        const deleteMen= await MensRanking.findByIdAndDelete(_id);
        res.send(deleteMen);
        
    } catch (error) {
        res.status(500).send(error);
        
    }

})

module.exports= router;