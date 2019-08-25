const admin = require('firebase-admin');

const serviceAccount = require('../config/firebase/development/credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://shaun-saker-development.firebaseio.com',
});

module.exports = admin;
