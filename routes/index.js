const express=require('express');
const user=require('../model/user');
const router=express();

router.get('/insert',(req,res)=>{
    res.render('insert');
});


router.post('/insert',async (req,res)=>{
    console.log(req.body);
   try {
    const data=await user.create(req.body);
    res.render('search',{
        title:"Search here",
        data:[]
    });
   } catch (error) {
       res.status(400).json({
           message:error
       });
   }
});

router.get('/search',async (req,res)=>{
    console.log(req.query.search);
    try {
        const data1=await user.find({query : { $regex: `${req.query.search}`, $options: "i" } },'-__v -createdAt -updatedAt');
        const data2=await user.find({tags : { $regex: `${req.query.search}`, $options: "i" } },'-__v -createdAt -updatedAt');

        
        data1.map((obj1)=>{
            data2.map((obj2)=>{
                
                    if(obj2._id !== obj2._id){
                        data2.push(obj1);
                    }
                
            })
            
        });
        console.log(data2);
        return res.render('search',{
            title:"Search here..",
            data:data2
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status:"failed",
            message:error
        });
    }
});
module.exports=router;
