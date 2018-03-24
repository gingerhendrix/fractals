import React from 'react';
import IFSPolygon from './IFSPolygon';

const IFSPolyWithOpenSet = ({width=1000, height=1000, openSet=[], ...props}) => {
  return (
    <svg style={{marginLeft: 50, marginTop: 50}} width={width} height={height}>
      <IFSPolygon {...props} />
      <IFSPolygon {...props} initial={openSet} iterations={0} style={{ strokeDasharray: 5, stroke: 'blue' }} />
      <IFSPolygon {...props} initial={openSet} iterations={1} style={{ strokeDasharray: 2, stroke: 'red' }} />
    </svg>
  );
}

export default IFSPolyWithOpenSet;
