import React from 'react';
import { storiesOf } from '@storybook/react';

import Label from '..';

storiesOf('Components|Label', module)
  .add('default', () => <Label>React</Label>)
  .add('small', () => <Label small>React</Label>);
