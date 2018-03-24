import React from 'react';
import IFSPolygon from './IFSPolygon';

const IFSPoly = ({width=1000, height=1000, ...props}) => {
  return (
    <svg style={{marginLeft: 50, marginTop: 50}} width={width} height={height}>
      <IFSPolygon {...props} />
    </svg>
  );
}

export default IFSPoly;
