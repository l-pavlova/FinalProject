import { response, Router } from 'express';
import User from '../DAL/models/user.js'
import Repository from '../DAL/collectionRepository.js'
import cookieParser from 'cookie-parser';

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

router.get('/', (req, res) => {
    try {
        await groupRepo.find().then((result) => {
            res.send(result);
        });
    } catch (err) {
        console.log(err);
    }
})

export default router;