import React from 'react';
import GridItem from './gridItem';
import '../App.css';

const data = [
  {
    id: 0,
    date: 'January 12 2017',
    desc: 'Artisanal iconic cutting-edge business class.'
  },
  {
    id: 1,
    date: 'January 18 2017',
    desc: 'K-pop extraordinary.'
  },
  {
    id: 2,
    date: 'January 21 2017',
    desc: 'Esse airport veniam ryokan soft power.'
  },
  {
    id: 3,
    date: 'January 27 2017',
    desc: 'St Moritz uniforms Beams.'
  },
  {
    id: 4,
    date: 'February 2 2017',
    desc: 'Sharp bureaux sleepy K-pop carefully curated.'
  },
  {
    id: 5,
    date: 'February 10 2017',
    desc: 'Bureaux exquisite delightful carefully curated soft power.'
  }
]

const Grid = () => {
  return (
    <div className="main-grid">
      {data.map((m, idx) => {
        return <GridItem data={m} key={idx}/>
      })}
    </div>
  )
}

export default Grid;