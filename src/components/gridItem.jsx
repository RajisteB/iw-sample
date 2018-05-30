import React from 'react';

const GridItem = (props) => {
  return (
    <div className="grid-item">
      <img src={props.data.image} alt=""/>
      <h4>{props.data.date}</h4>
      <h2>{props.data.desc}</h2>
      <h5>Presented By <a href="#">LOREM IPSUM</a></h5>
    </div>
  )
}

export default GridItem;