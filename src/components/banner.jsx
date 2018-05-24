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
      width: window.innerWidth,
      touchStart: null,
      touchEnd: null,
    }
  }

  handleImageSlide = () => {
    this.state.index >= 2 ? 
    this.setState({ index: 0 }) :
    this.setState({
      index: this.state.index + 1
    })
  }

  handleWindowSize = () => {
    let w = window.innerWidth;
    this.setState({
      width: w
    })
  }

  handleTouch = (e) => {
    this.setState({
      touchStart: e.touches[0].clientX
    })
  }

  handleSwipe = (e) => {
    let diff = null;
    this.setState({ 
      touchEnd: e.touches[0].clientX
    })

    if ( !this.state.touchStart ) {
      return;
    }

    diff = this.state.touchStart - this.state.touchEnd;

    if (diff < 0 ) { 
      if (this.state.index === 0) {
        this.setState({ index: 0 })
      } else {
        this.setState({ index: this.state.index - 1 })
      }
    } else if (diff > 0) {
      if (this.state.index === 2) {
        this.setState({ index: 0 })
      } else {
        this.setState({ index: this.state.index + 1 })
      }
    }
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

    style = width <= 780 ? 
    { 
      width: width, 
      height: (width / 4) * 3,
    } 
    : null;

    return (
      <section>
        <div className="banner" style={style}>
          <img src={image} 
            alt="banner" 
            className="banner-img" 
            style={style} 
            onTouchStart={this.element.addEventListener('touchstart', this.handleTouch)}
            onTouchEnd={this.element.addEventListener('touchend', this.handleSwipe)}
          />
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
