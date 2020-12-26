const { Router } = require('express');
const User = require('../DAL/models/user');
const Message = require('../DAL/models/message');
const router = Router();

//todo::
router.get('/:chatId', (req, res, next) => {
    console.log(`opening chat with id: ${req.params.id}`);
    res.send(`concrete chat for ${req.params.id}`);
})

router.post('/sendMessage', (req, res, next) =>{

})


router.get('/openMessages', (req, res, next) =>{
    
})

module.exports = router;