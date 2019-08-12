import React from 'react';
import PropTypes from 'prop-types';

import HeaderBar from './HeaderBar';

export class HeaderBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onLinkClick = this.onLinkClick.bind(this);
    this.scrollToSection = this.scrollToSection.bind(this);

    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  onLinkClick(link) {
    const { id: sectionId, href } = link;

    if (sectionId) {
      this.scrollToSection(sectionId);
    } else if (href) {
      window.open(href, '_blank');
    }
  }

  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const rect = element.getBoundingClientRect();
    const { top } = rect;
    const { scrollY } = window;
    const newTop = top + scrollY - 64; // - header height

    window.scroll({
      top: newTop,
      behavior: 'smooth',
    });
  }

  render() {
    return <HeaderBar handleLinkClick={this.onLinkClick} />;
  }
}

export default HeaderBarContainer;
