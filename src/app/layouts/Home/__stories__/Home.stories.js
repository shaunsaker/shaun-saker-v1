import React from 'react';
import { storiesOf } from '@storybook/react';

import Home from '../Home';
import { project } from '../Projects/ProjectCard/__stories__/ProjectCard.stories';
import { tabs } from '../../../components/TabBar/__stories__/TabBar.stories';

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
const projects = [project];
const projectsProps = {
  tabBarProps: {
    currentTabIndex: 0,
    tabs,
    handleChange: console.log,
  },
  items: projects,
};

storiesOf('Layouts|Home', module)
  .add('default', () => (
    <Home skillsProps={skillsProps} projectsProps={projectsProps} contactProps={{ handleSubmit: console.log }} />
  ))
  .add('blank states', () => <Home />)
  .add('with contact form success', () => (
    <Home
      skills={skillsProps}
      projectsProps={projectsProps}
      contactProps={{ hasSuccess: true, handleSubmit: console.log }}
    />
  ));
