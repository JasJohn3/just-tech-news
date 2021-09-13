const route = require('express').Router();
const {Comment} = require('../../models');
const router = require('./post-routes');

router.get('/',(req,res)=>{
  console.log('======================');
  Comment.findAll({
  })
  .then(dbCommentData =>{res.json(dbCommentData)})
  .catch(err=>{
    console.log(err);
    res.status(400).json(err);
  })
})

router.post('/', (req,res)=>{
 Comment.create({
   comment_text: req.body.comment_text,
   user_id: req.body.user_id,
   post_id: req.body.post_id
 })
 .then(dbCommentData =>{res.json(dbCommentData)})
 .catch(err=>{
   console.log(err);
   res.status(400).json(err)
  });
})

router.put('/:id',(req,res)=>{
Comment.update(req.body,{
  individualHooks: true,
  where: req.params.id
})
.then(dbCommentData=>{
  if(!dbCommentData){
    res.status(404).json({message:`ID: ${req.params.id} not found!`})
  }
  res.json(dbCommentData);
})
.catch(err=>{
  console.log(err);
  res.status(500).json(err);
})
})

router.delete('/:id', (req,res)=>{
Comment.destroy({
  where:{
    id: req.params.id
  }
})
.then(dbCommentData =>{
  if(!dbCommentData){
    res.status(404).json({message:`ID: ${req.params.id} not found!`})
  }
  res.json(dbCommentData);
})
.catch(err=>{
  console.log(err);
  res.status(500).json(err);
})
})

module.exports = router;