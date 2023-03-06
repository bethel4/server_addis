const express = require('express')
const router = express.Router()
const Music = require('../model/music')


router.get('/', async(req,res) => {
    try{
           const music = await Music.find()
           res.json(music)
    }catch(err){
        console.log(err)
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const music = await Music.findById(req.params.id)
           res.json(music)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
   
    const music = new Music({
        title: req.body.music.title,
        artist: req.body.music.artist,
        album: req.body.music.album,
        genre:req.body.music.genre,
    })

    try{
        const a1 =  await music.save() 
        res.json(a1)
    }catch(err){
        res.send(err)
    }
})

router.patch('/:id',async(req,res)=> {
   // console.log(req.body)
    try{
        const music = await Music.findByIdAndUpdate(req.params.id,req.body) 
        res.json(music)   
    }catch(err){
        res.send(err)
    }

})
router.delete('/:id', async  (req, res)=>{
    const movie = await Music.findByIdAndDelete(req.params.id)
   
    if(!movie){
        res.send('Movie not found')
    } else{
        
        res.send('movie deleted')
    }

})

// router.delete('/:id',async(req,res) => {
//     try{
//         id =req.params.id
//         Music.deleteOne({_id: id}) 
//        Music.save()
//      res.send('Success')
//     }catch(err){
//         res.send(err)
//     }
// })
module.exports = router