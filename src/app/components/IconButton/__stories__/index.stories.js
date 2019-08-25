import React from 'react';
import { storiesOf } from '@storybook/react';

import IconButton from '..';

storiesOf('Components|IconButton', module).add('default', () => <IconButton iconName="mail" tooltip="Send Email" />);
