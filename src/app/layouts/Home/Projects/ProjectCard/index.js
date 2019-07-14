import React from 'react';

import ProjectCard from './ProjectCard';

export class ProjectCardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onToggleCollapse = this.onToggleCollapse.bind(this);
    this.setIsCollapsed = this.setIsCollapsed.bind(this);

    this.state = {
      isCollapsed: true,
    };
  }

  static propTypes = {};

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

    return <ProjectCard {...this.props} isCollapsed={isCollapsed} handleToggleCollapse={this.onToggleCollapse} />;
  }
}

export default ProjectCardContainer;
