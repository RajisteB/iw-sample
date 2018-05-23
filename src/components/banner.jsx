import React, { Component } from 'react';
import '../App.css';
import Landing from '../images/Landing.png';
import Landing1 from '../images/Landing1.png';
import Landing2 from '../images/Landing2.png';
const images = [Landing, Landing1, Landing2];

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      width: window.innerWidth
    }
  }

  handleImageSlide = () => {
    this.state.index >= 2 ? 
    this.setState({ index: 0 }) :
    this.setState({
      index: this.state.index + 1
    })
    console.log("index:" + this.state.index);
  }

  handleWindowSize = () => {
    let w = window.innerWidth;
    this.setState({
      width: w
    })
  }

  componentDidMount() {
    setInterval(() => {
      this.handleImageSlide();
    }, 5000);
    window.addEventListener("resize", this.handleWindowSize)
  }

  render() {
    let { index, width } = this.state;
    let image = images[index];
    let style = null;
    let dotStyle = null;
    const dots = [1, 2, 3];

    style = width <= 800 ? 
    { 
      width: width, 
      height: (width / 4) * 3,
    } 
    : null;

    return (
      <section>
        <div className="banner" style={style}>
          <img src={image} alt="banner" className="banner-img" style={style}/>
          <div className="overlay">
            <div className="headline">
              <h1>
                Screening <br />
                DVF Secret Agent Part 2
              </h1>
              <h3>October 15, 2017</h3>
              <br />
              <h6>
                Join us for a private screeing of DVF Secret Agent Part 2 <br/>
                with our special guest, director Peter Lindberg.
              </h6> 
            </div>
          </div>
        </div>
        <div className="dots-container">
          {dots.map((dot, idx) => {
            index === idx ? dotStyle = { opacity: 1 } : dotStyle = { opacity: 0.4 } 
            return (
              <div className="dots" style={dotStyle} key={idx}></div>
            )
          })}
        </div>
      </section>
    )
  }

}

export default Banner;
