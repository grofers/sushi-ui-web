import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const AndroidFill = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>Android-Fill</title>
      <path d='M12.5 2.1c1.68 0.76 2.82 2.2 2.82 3.86h-11.14c0-1.66 1.14-3.1 2.84-3.86l-0.24-0.34-0.22-0.32-0.48-0.72c-0.060-0.1-0.040-0.22 0.040-0.28 0.1-0.060 0.22-0.020 0.28 0.060l0.76 1.1 0.22 0.34c0.72-0.28 1.52-0.42 2.38-0.42 0.84 0 1.64 0.14 2.36 0.42l0.22-0.34 0.76-1.1c0.060-0.080 0.18-0.12 0.28-0.060 0.080 0.060 0.12 0.18 0.060 0.28l-0.5 0.72-0.22 0.32-0.22 0.34zM7.36 4.42c0.34 0 0.6-0.26 0.6-0.58s-0.26-0.58-0.6-0.58c-0.32 0-0.6 0.26-0.6 0.58s0.28 0.58 0.6 0.58zM12.14 4.42c0.32 0 0.6-0.26 0.6-0.58s-0.28-0.58-0.6-0.58c-0.34 0-0.6 0.26-0.6 0.58s0.26 0.58 0.6 0.58zM4.26 6.74h11.060v8.52c0 0.68-0.56 1.22-1.26 1.22h-0.92c0.040 0.1 0.060 0.22 0.060 0.32v2.46c0 0.64-0.54 1.16-1.2 1.16s-1.18-0.52-1.18-1.16v-2.46c0-0.1 0-0.22 0.040-0.32h-2.22c0.040 0.1 0.060 0.22 0.060 0.32v2.46c0 0.64-0.54 1.16-1.2 1.16s-1.2-0.52-1.2-1.16v-2.46c0-0.1 0.020-0.22 0.060-0.32h-0.92c-0.7 0-1.26-0.54-1.26-1.22v-8.52h0.080zM2.2 6.74c0.66 0 1.18 0.52 1.18 1.16v4.96c0 0.64-0.52 1.16-1.18 1.16s-1.2-0.52-1.2-1.16v-4.96c0-0.64 0.54-1.16 1.2-1.16zM17.3 6.74c0.66 0 1.2 0.52 1.2 1.16v4.96c0 0.64-0.54 1.16-1.2 1.16s-1.18-0.52-1.18-1.16v-4.96c0-0.64 0.52-1.16 1.18-1.16z'></path>
    </Icon>
  );
};

export default AndroidFill;