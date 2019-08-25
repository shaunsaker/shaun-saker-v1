import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from './ProjectCard';
import projectThumbnails from '../../../../static/images/project-thumbnails';

export class ProjectCardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onToggleCollapse = this.onToggleCollapse.bind(this);
    this.setIsCollapsed = this.setIsCollapsed.bind(this);

    this.state = {
      isCollapsed: true,
    };
  }

  static propTypes = {
    id: PropTypes.string,
  };

  static defaultProps = {};

  onToggleCollapse() {
    const { isCollapsed } = this.state;

    this.setIsCollapsed(!isCollapsed);
  }

  setIsCollapsed(isCollapsed) {
    this.setState({
      isCollapsed,
    });
  }

  render() {
    const { isCollapsed } = this.state;
    const { id } = this.props;
    const thumbnailFileName = projectThumbnails[id] || 'placeholder.png';
    const thumbnailUrl = `static/images/project-thumbnails/${thumbnailFileName}`;

    return (
      <ProjectCard
        {...this.props}
        thumbnailUrl={thumbnailUrl}
        isCollapsed={isCollapsed}
        handleToggleCollapse={this.onToggleCollapse}
      />
    );
  }
}

export default ProjectCardContainer;
