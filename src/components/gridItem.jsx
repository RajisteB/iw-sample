import React from 'react';
import Layer01 from '../images/Layer01.png';
import Layer02 from '../images/Layer02.png';
import Layer03 from '../images/Layer03.png';
import Layer04 from '../images/Layer04.png';
import Layer05 from '../images/Layer05.png';
import Layer06 from '../images/Layer06.png';

const GridItem = (props) => {
  let layers = null;
  layers = [Layer01, Layer02, Layer03, Layer04, Layer05, Layer06].reverse();
  return (
    <div className="grid-item">
      <img src={layers[props.data.id]} alt=""/>
      <h4>{props.data.date}</h4>
      <h2>{props.data.desc}</h2>
      <h5>Presented By <a href="#">LOREM IPSUM</a></h5>
    </div>
  )
}

export default GridItem;