import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Line = ({start, end}) =>
  <path d={`M ${start[0]} ${start[1]} L ${end[0]} ${end[1]}`} stroke="black"/>

class App extends Component {
  render() {
    const initial = [[0, 1]];
    const funcs = [
      (x) => x/3,
      (x) => x/3 + 2/3,
    ];

    const scale = 1000;
    const spacing = 50;
    const lines = [initial]
    const iterations = 10;
    for(let i = 0; i < iterations ; i++) {
      const prev = lines[lines.length -1];
      const current = []
      for(const prevLine of prev) {
        for(const fn of funcs) {
          current.push([fn(prevLine[0]), fn(prevLine[1])])
        }
      }
      lines.push(current)
    }

    let currentSpacing = 0;
    let displayLines = [];
    for(const line of lines) {
      displayLines = displayLines.concat(line.map(([start, end]) => ({start: [start*scale, currentSpacing], end: [end*scale, currentSpacing] })))
      currentSpacing += spacing;
    }

    return (
      <div className="App">
        <svg style={ {marginTop: 50}} width="1000" height="1000">
          { displayLines.map(({start, end}) => <Line start={start} end={end} />) }
        </svg>
      </div>
    );
  }
}

export default App;
