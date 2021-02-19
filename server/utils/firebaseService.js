const firebaseAdmin = require('firebase-admin');
var serviceAccount = require ('../messenger-app-test-ce448-firebase-adminsdk-3yqtw-b38a708eab.json');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.applicationDefault(serviceAccount),
    databaseURL: 'https://Messenger-App-Test.firebaseio.com',
});

module.exports = firebaseAdmin;
