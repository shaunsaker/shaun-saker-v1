const fields = [
  {
    type: 'text',
    name: 'name',
    label: 'Name',
    required: true,
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email Address',
    required: true,
  },
  {
    type: 'textarea',
    name: 'message',
    label: 'Message',
    required: true,
    validator: (value) => value && value.split(' ').length > 2, // minimum of two words
  },
  {
    type: 'text',
    name: 'website',
    label: 'website',
    required: false,
    hidden: true, // used as honeypot for anti-spam - if it's filled in, it's a bot
    validator: (value) => !value,
  },
];

export default fields;
