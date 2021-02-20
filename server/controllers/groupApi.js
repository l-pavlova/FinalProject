const { response, Router } = require('express');
const User = require('../DAL/models/user.js');
const Repository = require('../DAL/collectionRepository.js');
const cookieParser = require('cookie-parser');

const router = Router();
let adapter = {};
let groupRepo = {};

function initializeRepo(adapter, collection) {
    console.log(`creating repository for ${collection}`)
    groupRepo = new Repository(adapter, collection);
}

router.use(cookieParser());

router.use((req, res, next) => {
    initializeRepo(req.adapter, "Group");
    next();
})

router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id
        await groupRepo.find(
            {
                usersId: { $in: [userId] }
            }
        ).then((result) => {
            res.send(result);
        });
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {

    try {
        const groupInfo = req.body;
        //todo: fix schema validation
        const newGroupInfo = await groupRepo.create(groupInfo)
        res.json(`Succeed`);
    } catch (e) {
        console.log(e);
        //res.redirect('/');
        console.log('Failed registering')
    }
})

module.exports = router;