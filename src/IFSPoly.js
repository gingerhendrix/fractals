import React from 'react';
import ifs from './ifs';

const pointsToString = points =>
  points.map(([x, y]) => `${x},${y}`).join(', ')

const Polygon = ({points, stroke='black', fill='none'}) =>
  <polyline points={pointsToString(points)} stroke={stroke} fill={fill}/>

const IFSPoly = ({initial = [[0, 0], [1, 0]], fns, iterations=3, width=1000, height=500, scale=1000, ...polyProps}) => {
  const constructions = ifs(initial, fns, iterations)
  const polygons = constructions[constructions.length -1].map(poly => poly.map(([x, y]) => [x*scale, y*scale]))

  return (
    <svg style={{marginLeft: 50, marginTop: 50}} width={width} height={height}>
      { polygons.map(points => <Polygon points={points} {...polyProps} />) }
    </svg>
  );
}

export default IFSPoly;
