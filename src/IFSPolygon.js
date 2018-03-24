import React, { Fragment } from 'react';
import ifs from './ifs';

const pointsToString = points =>
  points.map(([x, y]) => `${x},${y}`).join(', ')

const Polygon = ({points, stroke='black', fill='none', ...polyProps}) =>
  <polyline points={pointsToString(points)} stroke={stroke} fill={fill} {...polyProps}/>

const IFSPoly = ({initial = [[0, 0], [1, 0]], fns, iterations=3, height=500, scale=1000, offset=[0,0], ...polyProps}) => {
  const constructions = ifs(initial, fns, iterations)
  const polygons = constructions[constructions.length -1].map(poly => poly.map(([x, y]) => [x*scale + offset[0], y*scale + offset[1]]))

  return (
    <Fragment>
      { polygons.map(points => <Polygon points={points} {...polyProps} />) }
    </Fragment>
  );
}

export default IFSPoly;
