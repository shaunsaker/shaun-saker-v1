import React from 'react';
import { storiesOf } from '@storybook/react';

import TabBar from '..';

const tabs = [
  {
    name: 'MOBILE APPS',
  },
  {
    name: 'WEB APPS',
  },
  {
    name: 'OPEN SOURCE',
  },
];

storiesOf('Components|TabBar', module).add('default', () => (
  <TabBar currentTabIndex={0} tabs={tabs} handleClick={null} />
));

export { tabs };
