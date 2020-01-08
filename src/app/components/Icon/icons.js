import React from 'react';
import { ExpandMore, Mail, MoreVert, Phone, PersonOutline } from '@material-ui/icons';

const GITHUB_ICON_SIZE = 24;

const icons = {
  'expand-more': (props) => <ExpandMore {...props} />,
  github: () => (
    <img src="/static/images/github.png" alt="Github" style={{ width: GITHUB_ICON_SIZE, height: GITHUB_ICON_SIZE }} />
  ),
  mail: (props) => <Mail {...props} />,
  menu: (props) => <MoreVert {...props} />,
  phone: (props) => <Phone {...props} />,
  person: (props) => <PersonOutline {...props} />,
};

export default icons;
