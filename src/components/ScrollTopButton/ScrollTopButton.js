import React, { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { animateScroll as scroll } from 'react-scroll';

import { ReactComponent as ChevronUp } from '../../assets/chevron_up.svg';

import './ScrollTopButton.styles.less';

const ScrollTopButton = ({ offset }) => {
  const [topOffset, setTopOffset] = useState(0);
  const source = fromEvent(document, 'scroll').pipe(throttleTime(20));

  useEffect(() => {
    const subscriber = source.subscribe(() => {
      setTopOffset(window.scrollY);
    });

    return () => subscriber.unsubscribe();
  }, []);

  return topOffset > offset ? (
    <button className="scrolltop" type="button" onClick={scroll.scrollToTop}>
      <ChevronUp />
    </button>
  ) : null;
};

ScrollTopButton.defaultProps = {
  offset: 220,
};

ScrollTopButton.propTypes = {
  offset: PropTypes.number,
};

export default ScrollTopButton;
