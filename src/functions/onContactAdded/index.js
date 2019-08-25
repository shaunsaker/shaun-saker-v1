const functions = require('firebase-functions');

const sendEmail = require('../sendEmail');

const onContactAdded = functions.firestore.document('contact/{contactId}').onCreate(async (snapshot) => {
  const values = snapshot.data();
  const { name, email, message } = values;
  const emailOptions = {
    from: 'admin@shaunsaker.com',
    to: 'sakershaun@gmail.com', // TODO: Update this
    template: 'contact',
    locals: {
      name,
      email,
      message,
    },
  };

  await sendEmail(emailOptions);

  console.log('Email sent successfully', { email });
});

module.exports = onContactAdded;
