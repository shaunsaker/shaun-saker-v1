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
  screenshots: [
    {
      src:
        'https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
    },
    {
      src:
        'https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
    },
    {
      src:
        'https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
    },
    {
      src:
        'https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
    },
    {
      src:
        'https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
    },
    {
      src:
        'https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
    },
    {
      src:
        'https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
    },
    {
      src:
        'https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
    },
    {
      src:
        'https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
    },
  ],
};

storiesOf('Components|ProjectCard', module).add('default', () => <ProjectCard {...project} />);

export { project };
