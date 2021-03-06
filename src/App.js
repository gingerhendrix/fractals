import React from 'react';
import './App.css';
import IFSPoly from './IFSPoly';
import IFSWithOpenSet from './IFSWithOpenSet';

export default () =>
  <div className='App'>
    <h2>Cantor Set (1D)</h2>

    {[0, 1, 2, 3, 4, 5].map((iterations) =>
      <IFSPoly
        height={10}
        initial={[[0,0], [1,0]]}
        iterations={iterations}
        fns={[
          ([x, y]) => [x/3, y],
          ([x, y]) => [x/3 + 2/3, y],
        ]}
      />
    )}

    <h2>Cantor Dust (2D)</h2>

    <div style={{overflow: 'hidden', width: 1000, margin: '0 auto 0 auto'}} >
      {[1, 2, 3, 4].map((iterations) =>
        <div style={{float: 'left'}} key={iterations}>
          <IFSPoly
            height={200}
            width={200}
            scale={200}
            initial={[[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]}
            fill='black'
            iterations={iterations}
            fns={[
              ([x, y]) => [x/4, y/4],
              ([x, y]) => [x/4 + 1/2, y/4],
              ([x, y]) => [x/4 + 1/2, y/4 + 1/2],
              ([x, y]) => [x/4, y/4 + 1/2],
            ]}
          />
        </div>
      )}
    </div>


    <h2>Iterated Polygons</h2>

    <IFSPoly
      height={300}
      initial={[[0,0], [1,0]]}
      iterations={5}
      fns={[
        ([x, y]) => [x/2, y/2],
        ([x, y]) => [x/2 + 1/2, y/2],
        ([x, y]) => [y/4 + 1/2, x/4],
      ]}
    />

    <IFSPoly
      height={500}
      initial={[[0,0], [1,0]]}
      iterations={4}
      fns={[
        ([x, y]) => [x/3, y/3],
        ([x, y]) => [y/4 + 1/3, x/4],
        ([x, y]) => [x/3 + 1/3, y/3 + 1/4],
        ([x, y]) => [y/4 + 2/3, x/4],
        ([x, y]) => [x/3 + 2/3, y/3],
      ]}
    />

    <h2>Open Set Condition</h2>


    <IFSPoly
      height={300}
      initial={[[0,0], [1,0]]}
      offset={[0, 200]}
      iterations={1}
      fns={[
        ([x, y]) => [1 - x/3, -y/3],
        ([x, y]) => [1/3 - y/9, -x/9],
        ([x, y]) => [x/3 + 1/3, y/3 - 1/9],
        ([x, y]) => [y/9 + 2/3, x/9 - 1/9],
        ([x, y]) => [1/3 - x/3, -y/3],
      ]}
    />

    <IFSPoly
      height={300}
      initial={[[0,0], [1,0]]}
      offset={[0, 200]}
      iterations={2}
      fns={[
        ([x, y]) => [1 - x/3, -y/3],
        ([x, y]) => [1/3 - y/9, -x/9],
        ([x, y]) => [x/3 + 1/3, y/3 - 1/9],
        ([x, y]) => [y/9 + 2/3, x/9 - 1/9],
        ([x, y]) => [1/3 - x/3, -y/3],
      ]}
    />

    <IFSWithOpenSet
      height={500}
      initial={[[0,0], [1,0]]}
      openSet={[[0,0], [0.5, -1/6], [1,0], [0.5, 1/6], [0, 0]]}
      offset={[0, 200]}
      iterations={2}
      fns={[
        ([x, y]) => [1 - x/3, -y/3],
        ([x, y]) => [1/3 - y/9, -x/9],
        ([x, y]) => [x/3 + 1/3, y/3 - 1/9],
        ([x, y]) => [y/9 + 2/3, x/9 - 1/9],
        ([x, y]) => [1/3 - x/3, -y/3],
      ]}
    />


  </div>
