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
      touchMove: null,
    }
    this.bannerInterval = null;
  }

  // image slider
  handleImageSlide = () => {
    this.state.index >= 2 ? 
    this.setState({ index: 0 }) :
    this.setState({
      index: this.state.index + 1
    })
  }

  // banner resize
  handleWindowSize = () => {
    let w = window.innerWidth;
    this.setState({
      width: w
    })
  }

  // swipe functionality
  handleTouchStart = (e) => {
    this.setState({ touchStart: e.touches[0].clientX})
  }

  handleTouchMove = (e) => {
    clearInterval(this.bannerInterval);
    this.setState({ 
      touchMove: e.touches[0].clientX,
     })
  }

  handleTouchEnd = (e) => {
    let { touchStart, touchMove } = this.state;
    let diff = touchMove - touchStart;
    
    if ( diff < 0 && this.state.index <= 1 ) {
      this.setState({ index: this.state.index + 1 })
    } else if ( diff > 0 && this.state.index >= 1 ){
      this.setState({ index: this.state.index - 1 })
    } else {
      this.setState({ index: 0 })
    }
  }

  componentDidMount() {
    this.bannerInterval = setInterval(this.handleImageSlide, 5000);
    window.addEventListener("resize", this.handleWindowSize);
  }

  render() {
    let { index, width } = this.state;
    let image = images[index];
    let styles = null;
    let dotStyle = null;
    const dots = [1, 2, 3];

    styles = width <= 780 ? 
    { 
      width: width, 
      height: (width / 4) * 3,
    } 
    : null;

    return (
      <section>
        <div className="banner" style={styles} id="hero-banner" 
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >
          <img id="banner-imgs" src={image} alt="banner" className="banner-img" style={styles} />
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
