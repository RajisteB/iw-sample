import React from 'react';
import GridItem from './gridItem';
import '../App.css';
import Layer_01 from '../images/Layer_01.png';
import Layer_02 from '../images/Layer_02.png';
import Layer_03 from '../images/Layer_03.png';
import Layer_04 from '../images/Layer_04.png';
import Layer_05 from '../images/Layer_05.png';
import Layer_06 from '../images/Layer_06.png';

const data = [
  {
    id: 0,
    image: Layer_01,
    date: 'January 12 2017',
    desc: 'Artisanal iconic cutting-edge business class.'
  },
  {
    id: 1,
    image: Layer_02,
    date: 'January 18 2017',
    desc: 'K-pop extraordinary.'
  },
  {
    id: 2,
    image: Layer_03,
    date: 'January 21 2017',
    desc: 'Esse airport veniam ryokan soft power.'
  },
  {
    id: 3,
    image: Layer_04,
    date: 'January 27 2017',
    desc: 'St Moritz uniforms Beams.'
  },
  {
    id: 4,
    image: Layer_05,
    date: 'February 2 2017',
    desc: 'Sharp bureaux sleepy K-pop carefully curated.'
  },
  {
    id: 5,
    image: Layer_06,
    date: 'February 10 2017',
    desc: 'Bureaux exquisite delightful carefully curated soft power.'
  }
]

const Grid = () => {
  return (
    <div className="main-grid">
      {data.map((d, idx) => {
        return <GridItem data={d} key={d.id}/>
      })}
    </div>
  )
}

export default Grid;