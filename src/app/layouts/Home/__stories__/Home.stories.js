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

storiesOf('Layouts|Home', module)
  .add('default', () => <Home skills={skills} contact={{ handleSubmit: console.log }} />)
  .add('with Contact form success', () => (
    <Home skills={skills} contact={{ hasSuccess: true, handleSubmit: console.log }} />
  ));
