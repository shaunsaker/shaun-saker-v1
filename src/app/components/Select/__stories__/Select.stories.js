import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from '..';

const selectedOptionIndex = 0;
const options = [
  {
    name: 'Mobile Apps (4 / 16)',
  },
  {
    name: 'Web Apps (8 / 16)',
  },
  {
    name: 'Open Source (4 / 16)',
  },
];

storiesOf('Components|Select', module).add('default', () => (
  <Select selectedOptionIndex={selectedOptionIndex} options={options} />
));
