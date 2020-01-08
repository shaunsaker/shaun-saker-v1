import { app } from '../../../config';

const contactLinks = [
  {
    name: 'Phone',
    href: `tel:${app.contactDetails.tel}`,
    iconName: 'phone',
  },
  {
    name: 'Email',
    href: `mailto:${app.contactDetails.email}`,
    iconName: 'mail',
  },
  {
    name: 'LinkedIn',
    href: `${app.contactDetails.linkedIn}`,
    iconName: 'person',
  },
  {
    name: 'Github',
    href: 'https://github.com/shaunsaker',
    iconName: 'github',
  },
];

export default contactLinks;
