import React, { Component } from 'react'
import PropTypes from 'prop-types'

class IGSquare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: ((window.innerWidth > 576) ? 320 : parseInt(window.innerWidth * 0.75, 10)),
      height: (parseInt(window.innerHeight * 1.1, 10)), // 10 is for radix
      mobile: !((window.innerWidth > 576) && (window.innerHeight > 576)),
      active: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
  }

  handleMouseEnter(e) {
    this.setState({
      active: true
    })
  }

  handleMouseLeave(e) {
    this.setState({
      active: false
    })
  }

  handleTouchStart(e) {
    this.setState({
      active: (!this.state.active)
    })
  }

  render() {
    return (
      <div style={{textAlign: 'center', margin: 'auto', marginTop: '1vh', marginBottom: '1vh', width: this.state.width, height: '320px'}}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onTouchStart={this.handleTouchStart} >
        <a href={this.props.url}>
          <div className='d-flex flex-column align-items-center' style={{position: 'absolute', backgroundColor: 'black', opacity: 0.8, zIndex: 3, width: this.state.width, height: '320px', visibility: this.state.active ? 'visible' : 'hidden'}}>
            <p style={{margin: 'auto', height: '100%', overflow: 'hidden'}}>{this.props.caption}</p>
          </div>
        </a>
        <a href={this.props.url} style={{zIndex: 2}} >
          <img
            src={this.props.img}
            alt={this.props.caption}
            style={{width: this.state.width, height: '320px'}}
          />
        </a>
      </div>
    )
  }
}

IGSquare.defaultProps = {
  url: 'https://www.instagram.com/p/Bl4m0xInwQl/',
  img: '',
  caption: ''
}

IGSquare.propTypes = {
  url: PropTypes.string,
  img: PropTypes.string,
  caption: PropTypes.string
}

export default IGSquare
