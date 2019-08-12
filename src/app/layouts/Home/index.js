import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from './Home';

export class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.syncData = this.syncData.bind(this);

    this.state = {};
  }

  static propTypes = {
    /*
     * Store
     */
    dispatch: PropTypes.func,
    projects: PropTypes.arrayOf(PropTypes.shape({})),
    skills: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {};

  componentDidMount() {
    this.syncData();
  }

  syncData() {
    const { dispatch } = this.props;

    /*
     * Get the skills
     */
    dispatch({
      type: 'sync',
      payload: {
        url: 'skills',
      },
      meta: {
        nextActions: [
          {
            type: 'SET_SKILLS',
          },
        ],
      },
    });

    /*
     * Get the projects
     */
    dispatch({
      type: 'sync',
      payload: {
        url: 'projects',
      },
      meta: {
        nextActions: [
          {
            type: 'SET_PROJECTS',
          },
        ],
      },
    });
  }

  render() {
    const { projects, skills } = this.props;

    /*
     * Create the projectsProps
     */
    const projectsProps = {
      items: projects,
    };

    /*
     * Create the skillsProps
     */
    const skillsProps = {
      items: skills,
    };

    return <Home projectsProps={projectsProps} skillsProps={skillsProps} />;
  }
}

function mapStateToProps(state) {
  const { projects, skills } = state;

  return {
    projects,
    skills,
  };
}

export default connect(mapStateToProps)(HomeContainer);
