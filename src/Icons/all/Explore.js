import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Explore = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>explore</title>
      <path d='M10 0.42c-5.52 0-10 4.48-10 10s4.48 10 10 10c5.52 0 10-4.48 10-10v0c0-5.52-4.48-10-10-10v0zM10 18.98c-4.74 0-8.58-3.84-8.58-8.56s3.84-8.58 8.58-8.58c4.74 0 8.58 3.84 8.58 8.58v0c0 4.72-3.84 8.56-8.58 8.56v0zM14.28 5.84l-5.8 2.6c-0.2 0.1-0.36 0.26-0.46 0.46v0l-2.6 5.8c0 0.020 0 0.040 0 0.060 0 0.14 0.1 0.24 0.22 0.24 0.040 0 0.060 0 0.080-0.020v0l5.78-2.58c0.2-0.1 0.36-0.26 0.46-0.46v-0.020l2.62-5.8c0-0.020 0-0.040 0-0.060 0-0.12-0.1-0.22-0.22-0.22-0.020 0-0.060 0-0.080 0v0zM10 11.6c-0.66 0-1.18-0.52-1.18-1.18s0.52-1.2 1.18-1.2c0.66 0 1.2 0.54 1.2 1.2v0c0 0.66-0.54 1.18-1.2 1.18v0z'></path>
    </Icon>
  );
};

export default Explore;