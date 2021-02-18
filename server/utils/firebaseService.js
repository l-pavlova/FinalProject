const firebaseAdmin = require('firebase-admin');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.applicationDefault(),
    databaseURL: 'https://Messenger-App-Test.firebaseio.com',
});

module.exports = firebaseAdmin;
