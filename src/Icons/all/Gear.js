import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Gear = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>gear</title>
      <path d='M20 11.1v-2.28l-2.78-0.96-0.64-1.56 1.26-2.64-1.64-1.58-2.56 1.3-1.56-0.62-0.98-2.76h-2.28l-0.9 2.78-1.6 0.64-2.62-1.26-1.62 1.64 1.3 2.58-0.64 1.56-2.74 0.96v2.28l2.78 0.96 0.64 1.56-1.26 2.6 1.66 1.62 2.58-1.32 1.56 0.64 0.94 2.76h2.28l0.88-2.78 1.6-0.64 2.62 1.26 1.62-1.66-1.32-2.58 0.68-1.56 2.74-0.96zM10 14.28c-0.006 0-0.013 0-0.020 0-2.375 0-4.3-1.925-4.3-4.3s1.925-4.3 4.3-4.3c2.375 0 4.3 1.925 4.3 4.3 0 0.007-0 0.014-0 0.021v-0.001c0 2.364-1.916 4.28-4.28 4.28v0z'></path>
    </Icon>
  );
};

export default Gear;