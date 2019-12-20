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
  },
  {
    type: 'text',
    name: 'website',
    label: 'website',
    required: false,
    hidden: true, // used as honeypot for anti-spam - if it's filled in, it's a bot
  },
];

export default fields;
