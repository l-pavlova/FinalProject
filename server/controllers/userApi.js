
const { Router } = require('express');
const Repository = require('../DAL/collectionRepository.js');
const collectionMap = require('../DAL/dbSchemas/collectionMappings.js');
const bcrypt = require('bcrypt');

const User = require('../DAL/models/user.js')

const router = Router();
let adapter = {};
let userRepo = {};

function initializeRepo(adapter, collection) {
    console.log(`creating repository for ${collection}`)
    userRepo = new Repository(adapter, collection);
}

router.use((req, res, next) => {
    initializeRepo(req.adapter, "User");
    next();
})

router.get('/', (req, res) => {
    console.log(`in user home`);
    res.send('user home');
})

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new User(
            req.body.email,
            req.body.firstName,
            req.body.lastName,
            req.body.age,
            req.body.birthDate,
            hashedPassword);
        
        /*let isEmailUsed = userRepo.findOne({ email: user.email }).then(result => {
            console.log(result);
        });
        console.log( 21, isEmailUsed);*/

        console.log(await userRepo.create(user))

        /*if (console.log(await userRepo.findOne({ email: user.email }))) {
            console.log(45);

           
        }*/
        res.send( { registration: true } )
    } catch (e) {
        console.log(e);
        //res.redirect('/');
        console.log('Failed registering')
    }
})

router.post('/login', async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })
    console.log(user);
    try {
        console.log('logging user')
        let query = { email: user.email};
        const located = await userRepo.findOne(query).exec();
        //add validation middleware for password
        res.send(located);
    } catch (e) {
        console.log(e);
        //res.redirect('/');
        console.log('Failed logging')
    }
})

router.get('/all'), async(req, res, next) =>{//todo:fix
    console.log('getting all users');
    try{
        let users = await userRepo.find({});
        console.log(users);
        res.send(users);
    }
    catch(err){
        console.log(err);
    }
}

router.get('/:id', async (req, res, next) => {
    console.log(`getting user with ${req.params.id}`);
    let query = { _id: req.params.id };
    try{

        const user = await userRepo.findOne(query);
        res.send(user);
    }
    catch(err) {
        console.log(err);
        //res.redirect('/')
    }  
})

router.get('/friend/:id', async (req, res, next) => {
    console.log(`getting friend details for:`)
    let query = { _id: req.params.id };
    const user = userRepo.findOne(query);
    // if (user == null) res.redirect('/');
    res.send(user);
}).post('/friend/:id', async (req, res, next) => {
    console.log(`adding a friend for user`);
    let query = { _id: req.params.id };
    let socialMediaFriends = [].push(new User());//todo map to real ones
    user.update(query, socialMediaFriends)
})

router.get('/friends/:id', async (req, res, next) => {
    console.log('list of users');
    let query = { _id: req.params.id };
    //todo: get current user from cookie not from request params 
    const currentUser = await userRepo.findOne(query);

    const friends = [];
    if (currentUser.socialMediaFriends.length > 0) {
        for (let friendId of currentUser.socialMediaFriends) {
            let friend = userRepo.findOne({ _id: friendId });//add all from db here
            friends.push(friend);
        }
    }
    //friends = userRepo.find();

    res.send(friends);
})

module.exports = router;