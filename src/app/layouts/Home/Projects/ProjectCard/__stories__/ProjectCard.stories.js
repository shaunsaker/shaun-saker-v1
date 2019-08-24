import React from 'react';
import { storiesOf } from '@storybook/react';

import ProjectCard from '..';

const project = {
  name: 'WineMe',
  releaseDate: 'Feb 2018',
  thumbnailUrl: '/static/images/avatar.jpg',
  shortDescription: 'Keep track of the wine farms you’ve visited and find new ones that you haven’t!',
  longDescription:
    'Keep track of the wine farms you’ve visited and find new ones that you haven’t! Keep track of the wine farms you’ve visited and find new ones that you haven’t! Keep track of the wine farms you’ve visited and find new ones that you haven’t!',
  skills: [{ name: 'React-Native' }, { name: 'Firebase' }],
  links: [{ name: 'Android', href: 'https://shaunsaker.com' }, { name: 'iOS', href: 'https://shaunsaker.com' }],
};

storiesOf('Components|ProjectCard', module).add('default', () => <ProjectCard {...project} />);

export { project };
