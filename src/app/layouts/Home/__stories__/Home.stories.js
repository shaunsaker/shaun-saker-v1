import React from 'react';
import { storiesOf } from '@storybook/react';

import Home from '../Home';

const skills = [
  {
    name: 'React',
  },
  {
    name: 'React-Native',
  },
  {
    name: 'Firebase',
  },
];

storiesOf('Layouts|Home', module).add('default', () => <Home skills={skills} />);
