import Layer_01 from '../images/Layer_01.png';
import Layer_02 from '../images/Layer_02.png';
import Layer_03 from '../images/Layer_03.png';
import Layer_04 from '../images/Layer_04.png';
import Layer_05 from '../images/Layer_05.png';
import Layer_06 from '../images/Layer_06.png';
import React from 'react';
import GridItem from './gridItem';
import '../App.css';

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

let col0 = [],
    col1 = [],
    col2 = [],
    count = 0,
    mobile_col0 = [],
    mobile_col1 = [];

const Grid = () => {
  let windowWidth = window.innerWidth;
  console.log(windowWidth);

  if ( windowWidth > 770 ) {

    data.map(d => {
      count === 0 ? col0.push(d) :
      count === 1 ? col1.push(d) :
      col2.push(d);
      count >= 2 ? count = 0 : count++;
    });

    return (
      <div className="col-grid-container">
        <div className="grid-col">
          {col0.map((d, idx) => {
            return <GridItem data={d} key={d.id} />
          })}
        </div>
        <div className="grid-col">
          {col1.map((d, idx) => {
            return <GridItem data={d} key={d.id} />
          })}
        </div>
        <div className="grid-col">
          {col2.map((d, idx) => {
            return <GridItem data={d} key={d.id} />
          })}
        </div>   
      </div>
    )

  } else {

    data.map(d => {
      let id = d.id;
      id === 0 || id % 2 === 0 ? mobile_col0.push(d) :
      mobile_col1.push(d);
    });

    return (
      <div className="mobile-grid">
        <div className="mobile-col">
          {mobile_col0.map((d, idx) => {
            return <GridItem data={d} key={d.id} />
          })}
        </div>
        <div className="mobile-col">
          {mobile_col1.map((d, idx) => {
            return <GridItem data={d} key={d.id} />
          })}
        </div> 
      </div>
    )
  }
}

export default Grid;