import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPrettyDate, sortArrayOfObjectsByKey } from 'js-simple-utils';

import Home from './Home';

export class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.syncData = this.syncData.bind(this);
    this.setCategoryIndex = this.setCategoryIndex.bind(this);

    this.state = {
      categoryIndex: 0,
    };
  }

  static propTypes = {
    /*
     * Store
     */
    dispatch: PropTypes.func,
    authenticated: PropTypes.bool,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      }),
    ),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        releaseDate: PropTypes.number,
        categories: PropTypes.arrayOf(PropTypes.string),
        skills: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
    skills: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {};

  componentDidMount() {
    /*
     * If the user is authenticated, sync the data
     */
    const { authenticated } = this.props;

    if (authenticated) {
      this.syncData();
    }
  }

  componentDidUpdate(prevProps) {
    /*
     * If the user just became authenticated, sync the data
     */
    const { authenticated } = this.props;

    if (authenticated && !prevProps.authenticated) {
      this.syncData();
    }
  }

  onChangeCategory(index) {
    this.setCategoryIndex(index);
  }

  syncData() {
    const { dispatch } = this.props;

    /*
     * Get the categories
     */
    dispatch({
      type: 'sync',
      payload: {
        url: 'categories',
      },
      meta: {
        nextActions: [
          {
            type: 'SET_CATEGORIES',
          },
        ],
      },
    });

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

  setCategoryIndex(categoryIndex) {
    this.setState({
      categoryIndex,
    });
  }

  render() {
    /*
     * Create the skillsProps
     */
    const { skills } = this.props;

    /*
     * Sort the skills by order
     */
    const sortedSkills = sortArrayOfObjectsByKey(skills, 'order');

    const skillsProps = {
      items: sortedSkills,
    };

    /*
     * Create the projectsProps
     */
    const { categoryIndex } = this.state;
    const { categories, projects } = this.props;

    /*
     * Sort the categories by order
     */
    const sortedCategories = sortArrayOfObjectsByKey(categories, 'order');

    /*
     * Filter out the projects based on the categoryIndex
     */
    const { id: categoryId } = categories[categoryIndex] || {};
    const filteredProjects = projects.filter((item) => item.categories.includes(categoryId));

    /*
     * Sort the projects from latest to oldest
     */
    const sortedProjects = sortArrayOfObjectsByKey(filteredProjects, 'releaseDate', true);

    /*
     * Add in progress items to the top of the list
     */
    const inProgressProjects = sortedProjects.filter((item) => item.inProgress);
    const nonInProgressProjects = sortedProjects.filter((item) => !item.inProgress);
    const allProjects = [...inProgressProjects, ...nonInProgressProjects];

    /*
     * Map the projects to what we expect
     */
    const mappedProjects = allProjects.map((item) => {
      /*
       * Get a pretty date
       */
      const { releaseDate } = item;
      const prettyReleaseDate = releaseDate ? getPrettyDate(releaseDate, true) : 'In Progress';

      /*
       * Get the skill names
       */
      const { skills: projectSkills } = item;
      const prettySkills = projectSkills.map((skillId) => {
        const { name } = skills.filter((skill) => skill.id === skillId)[0];

        return {
          name,
        };
      });

      return {
        ...item,
        releaseDate: prettyReleaseDate,
        skills: prettySkills,
      };
    });

    const projectsProps = {
      items: mappedProjects,
      tabBarProps: {
        currentTabIndex: categoryIndex,
        tabs: sortedCategories,
        handleClick: this.onChangeCategory,
      },
    };

    return <Home projectsProps={projectsProps} skillsProps={skillsProps} />;
  }
}

function mapStateToProps(state) {
  const { user, categories, projects, skills } = state;
  const { uid } = user;
  const authenticated = uid ? true : false;

  return {
    authenticated,
    categories,
    projects,
    skills,
  };
}

export default connect(mapStateToProps)(HomeContainer);
