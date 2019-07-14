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
const skillsProps = { items: skills };
const projects = [];
const projectsProps = {
  selectProps: {
    selectedOptionIndex: 0,
    options: [
      {
        name: 'Mobile Apps (4 / 16)',
      },
      {
        name: 'Web Apps (8 / 16)',
      },
      {
        name: 'Open Source (4 / 16)',
      },
    ],
    handleChange: console.log,
  },
  items: projects,
};

storiesOf('Layouts|Home', module)
  .add('default', () => (
    <Home skillsProps={skillsProps} projectsProps={projectsProps} contactProps={{ handleSubmit: console.log }} />
  ))
  .add('with Contact form success', () => (
    <Home
      skills={skillsProps}
      projectsProps={projectsProps}
      contactProps={{ hasSuccess: true, handleSubmit: console.log }}
    />
  ));
