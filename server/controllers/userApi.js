import { Router } from 'express';
import User from '../DAL/models/user.js'
import Repository from '../DAL/collectionRepository.js'
import collectionMap from '../DAL/dbSchemas/collectionMappings.js';
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
    const user = new User(
        req.body.email,
        req.body.firstName,
        req.body.lastName,
        req.body.age,
        req.body.birthDate,
        req.body.password);

    console.log(user);
    try {
        console.log('registering user in db')
        //todo: fix schema validation
        await userRepo.create(user);
        const createdUser = await userRepo.findOne({email: user.email});
        console.log(createdUser);
        res.redirect(`/user/${createdUser._id}`)
    } catch (e) {
        console.log(e);
        res.render('/');
        console.log('Failed regisetring')
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
        let located = userRepo.findOne({ email: user.email }).exec();
        //add validation middleware for password
        res.send(located);
    } catch (e) {
        console.log(e);
        res.render('/');
        console.log('Failed logging')
    }
})

router.get('/:id', async (req, res, next) => {
    console.log(`logged user with ${req.params.id}`);
    let query = { _id: req.params.id };
    
    const user = userRepo.findOne(query);
    console.log(user);
    if (user == null) res.redirect('/');
    res.send(user);
})

router.get('/friend/:id', async (req, res, next) => {
    console.log(`getting friend details for:`)
    let query = { _id: req.params.id };
    const user = userRepo.findOne(query);
   // if (user == null) res.redirect('/');
    res.send(user);
}).post('/friend/:id', async(req, res, next) =>{
    console.log(`adding a friend for user`);
    let query = { _id: req.params.id };
    let socialMediaFriends = [].push(new User());//todo map to real ones
    user.update(query,socialMediaFriends)
})

router.get('/friends/:id', async (req, res, next) => {
    console.log('list of users');
    let query = { _id: req.params.id };
    //todo: get current user from cookie not from request params 
    const currentUser = userRepo.findOne(query);

    const friends = [];
    if (currentUser.socialMediaFriends.length > 0) {
        for (let friendId of currentUser.socialMediaFriends) {
            let friend = userRepo.findOne({_id: friendId});//add all from db here
            friends.push(friend);
        }
    }
    //friends = userRepo.find();
    
    res.send(friends);
})

export default router;