const { Router } = require('express');
const Repository = require('../DAL/collectionRepository.js');
const collectionMap = require('../DAL/dbSchemas/collectionMappings.js');
const bcrypt = require('bcrypt');
const { route } = require('./usersApi.js');
const User = require('../DAL/models/user.js')

const router = Router();
let userRepo = {};

function initializeRepo(adapter, collection) {
    console.log(`creating repository for ${collection}`)
    userRepo = new Repository(adapter, collection);
}

router.use((req, res, next) => {
    initializeRepo(req.adapter, "User");
    next();
})

router.post('/register', async (req, res) => {
    const user = new User(
        req.body.email,
        req.body.firstName,
        req.body.lastName,
        req.body.age,
        req.body.birthDate,
    );

    try {
        //todo: fix schema validation
        const userId = await userRepo.create(user)
            .then(created => {
                return created.insertedId
            });

        const createdUser = await userRepo.findById(userId);
        res.json(`Succeed`);
    } catch (e) {
        console.log(e);
        //res.redirect('/');
        console.log('Failed registering')
    }
})

module.exports = router;
