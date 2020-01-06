import React, { memo, useEffect, useState } from 'react';

import styles from './styles';
import { shuffleArray, getRandomInt } from '../../../utils';

import LIKES from '../../../static/images/likes';

const HEADER_HEIGHT = 80;
const RANDOMISED_LIKES = shuffleArray(LIKES);

/*
 * Display the images in LIKES randomly in a 4x4 grid
 * that covers the window width and height
 */
const Likes = () => {
  const [dimensions, setDimensions] = useState({ windowWidth: 0, windowHeight: 0, cellWidth: 0, cellHeight: 0 });

  useEffect(() => {
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
    const cellWidth = windowWidth / 4;
    const cellHeight = (windowHeight - HEADER_HEIGHT) / 4;

    setDimensions({ windowWidth, windowHeight, cellWidth, cellHeight });
  }, ['1']); // only run this effect once

  return (
    <div className="wrapper">
      <div className="container" style={{ height: dimensions.windowHeight - HEADER_HEIGHT }}>
        {RANDOMISED_LIKES.map((item) => {
          const { src, alt } = item;
          const scale = getRandomInt(0.9, 0.25);
          const animationDuration = getRandomInt(5, 2.5);

          return (
            <div
              key={src}
              className="cell"
              style={{
                width: dimensions.cellWidth,
                height: dimensions.cellHeight,
                transform: `scale(${scale})`,
              }}
            >
              <img
                src={`/static/images/likes/${src}`}
                alt={alt}
                className="image"
                style={{ animationDuration: `${animationDuration}s` }}
              />
            </div>
          );
        })}
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

Likes.propTypes = {};
Likes.defaultProps = {};

export default memo(Likes);
