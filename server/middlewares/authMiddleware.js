const express = require('express');
const router = express.Router();
const firebaseAdmin = require('../utils/firebaseService');

const hasToken = (req, res, next) => {
    //const token = req.headers.cookie.split('; ')[0].replace('token=', '');
    if(!req.headers.cookie || req.headers.cookie.split('=')[0] !== 'token') {
        return res.status(401).json({
            error: {
                message: 'You are not authorized!',
                details: 'Specify id token for this request!'
            }
        });
    } else {
        req.authToken = req.headers.cookie.split('=')[1];
    }

    next();
};

const verifyToken = async (req, res, next) => {
    try {
        const { authToken } = req;
        console.log(authToken);
        const userInfo = await firebaseAdmin.auth().verifyIdToken(authToken);
        req.authId = userInfo.uid;

        next();
    } catch (error) {
        console.log(error)
        res.status(401).send(error);
    }
};

router.use(hasToken);
//router.use(verifyToken);

exports.isAuthenticated = router;