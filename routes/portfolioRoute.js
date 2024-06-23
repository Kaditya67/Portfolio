const router=require('express').Router()
const {Intro,About,Project,Contact,Experience}=require("../models/portfolioModel");

router.get('/get-portfolio',async(req,res)=>{
    try{
        const intro=await Intro.find();
        const about=await About.find();
        const project=await Project.find();
        const contact=await Contact.find();
        const experience=await Experience.find();
        res.status(200).json({
            intro:intro[0],
            about:about[0],
            project,
            contact:contact[0],
            experience
        });
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router