import React from 'react';
import { storiesOf } from '@storybook/react';

import Section from '..';

storiesOf('Components|Section', module).add('default', () => (
  <Section title="Skills">
    <div style={{ width: 100, height: 200, backgroundColor: 'red' }} />
  </Section>
));
