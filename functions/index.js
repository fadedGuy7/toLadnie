const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase! U just sent : ", request);
});

export.countLikes = functions.firestore.document()