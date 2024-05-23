var express = require('express');
var router = express.Router();
var userData=require('../Model/data')
router.post('/',(req,res)=>{
  let newUser=new userData({
    name:req.body.name,
    email:req.body.email,
    number:req.body.number,
    place:req.body.place,
    education:req.body.education,
    skills:req.body.skills,
    project:req.body.project,
    certification:req.body.certification,
    declaration:req.body.declaration
  })
  newUser.save()
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
})
/* GET users listing. */
router.get('/',(req, res) =>{
  userData.find()
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
  // res.send('respond with a resource');
})
router.put('/:id',(req,res)=>{
  userData.findByIdAndUpdate(req.params.id,{
    name:req.body.name,
    email:req.body.email,
    number:req.body.number,
    place:req.body.place,
    education:req.body.education,
    skills:req.body.skills,
    project:req.body.project,
    certification:req.body.certification,
    declaration:req.body.declaration
  })
  newUser.save()
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })

})
router.delete('/:id',(req,res)=>{
 userData.findByIdAndDelete(req.params.id)
  
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })

})
module.exports = router;
