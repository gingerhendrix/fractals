import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const pointsToString = points =>
  points.map(([x, y]) => `${x},${y}`).join(', ')

const Polygon = ({points}) =>
  <polygon points={pointsToString(points)} stroke="black" fill="black"/>

class Cantor2D extends Component {
  render() {
    const initial = [[0, 0], [1, 0], [1, 1], [0, 1]];
    const funcs = [
      ([x, y]) => [x/4, y/4],
      ([x, y]) => [x/4 + 1/2, y/4],
      ([x, y]) => [x/4 + 1/2, y/4 + 1/2],
      ([x, y]) => [x/4, y/4 + 1/2],
    ];

    const scale = 1000;
    const constructions = [[initial]]
    const iterations = 3;
    for(let i = 0; i < iterations ; i++) {
      const prev = constructions[constructions.length -1];
      const current = []
      for(const prevPoly of prev) {
        for(const fn of funcs) {
          current.push(prevPoly.map(fn))
        }
      }
      constructions.push(current)
    }

    const polygons = constructions[constructions.length -1].map(poly => poly.map(([x, y]) => [x*scale, y*scale]))

    return (
      <div className="App">
        <svg style={{marginLeft: 50, marginTop: 50}} width="1000" height="1000">
          { polygons.map(points => <Polygon points={points} />) }
        </svg>
      </div>
    );
  }
}

export default Cantor2D;
