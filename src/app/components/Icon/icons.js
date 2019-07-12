import React from 'react';
import { ExpandMore, Mail, MoreVert, Phone, PersonOutline } from '@material-ui/icons';

const icons = {
  'expand-more': (props) => <ExpandMore {...props} />,
  mail: (props) => <Mail {...props} />,
  menu: (props) => <MoreVert {...props} />,
  phone: (props) => <Phone {...props} />,
  person: (props) => <PersonOutline {...props} />,
};

export default icons;
