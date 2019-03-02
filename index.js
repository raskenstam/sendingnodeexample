const express = require('express')
const app = express()
const port = 3000
var admin = require('firebase-admin');

var serviceAccount = require('./kevzterfinalfinal-firebase-adminsdk-5eb8y-360ced1666.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://kevzterfinalfinal.firebaseio.com/'
});







// The topic name can be optionally prefixed with "/topics/".
 


var message = {
    notification: {
        title: 'testmessagetitel',
        body: 'aaa'
      },
  topic: 'twitch'
};

// Send a message to devices subscribed to the provided topic.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });





app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))