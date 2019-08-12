import React from 'react';
import PropTypes from 'prop-types';

import HeaderBar from './HeaderBar';

export class HeaderBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
    this.setHasScrolled = this.setHasScrolled.bind(this);
    this.scrollToSection = this.scrollToSection.bind(this);

    this.state = {
      hasScrolled: false,
    };
  }

  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const { hasScrolled } = this.state;
    const { scrollY } = window;

    if (!hasScrolled && scrollY > 0) {
      this.setHasScrolled(true);
    } else if (hasScrolled && scrollY <= 0) {
      this.setHasScrolled(false);
    }
  }

  onLinkClick(link) {
    const { id: sectionId, href } = link;

    if (sectionId) {
      this.scrollToSection(sectionId);
    } else if (href) {
      window.open(href, '_blank');
    }
  }

  setHasScrolled(hasScrolled) {
    this.setState({
      hasScrolled,
    });
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
    const { hasScrolled } = this.state;

    return <HeaderBar hasScrolled={hasScrolled} handleLinkClick={this.onLinkClick} />;
  }
}

export default HeaderBarContainer;
