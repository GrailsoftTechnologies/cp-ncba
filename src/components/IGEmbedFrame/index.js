import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Col, Row } from 'reactstrap'

import IGFrame from '../IGFrame'
import IGSquare from '../IGSquare'

// Add real shit heres the code  e98b264cbe634b879b165f7f3f46bd15
class IGEmbedFrame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: [],
      imgs: [],
      captions: [],
      height: (parseInt(window.innerHeight * 0.80, 10) + 61), // 10 is for radix
      width: ((window.innerWidth > 576) ? 500 : parseInt(window.innerWidth * 0.75, 10))
    }
  }

  async mapSquaresToState() {
    await fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + process.env.REACT_APP_INSTAGRAM_API + '&count=6')
      .then(res =>
        res.json())
      .then(
        (result) => {
          let myMap = result.data
          myMap.forEach((data) => {
            let newurl = data.link.replace('/thunderbirdpdx', '')
            this.setState({
              urls: [
                ...this.state.urls,
                newurl
              ],
              imgs: [
                ...this.state.imgs,
                ((data.type==='video') ? data.images.standard_resolution.url : data.images.low_resolution.url)
              ],
              captions: [
                ...this.state.captions,
                data.caption.text
              ]
            })
          })
        },
        (error) => {
          if (error) {
            console.log(error)
          }
          this.setState({
            urls: ['error']
          })
        }
      )
  }

  componentWillMount() {
    if (this.props.source === '') {
      this.mapSquaresToState()
    } else {
      this.setState({
        urls: [this.props.source]
      })
    }
  }

  render() {
    let list = null
    if (this.state.urls[0] !== 'error' && !this.props.squares) {
      list = this.state.urls.map((url, index) =>
        <IGFrame
          source={this.state.urls[index]}
          key={index}
        />
      )
      return (
        <div className='IGEmbedFrame' style={{textAlign: 'center', height: this.state.height, width: this.state.width}}>
          <h4 style={{height: '41px', marginTop: '20px'}}>Instagram Posts</h4>
          <div style={{textAlign: 'center', overflow: 'scroll', height: (this.state.height - 61)}}>
            {list}
          </div>
        </div>
      )
    } else if (this.state.urls[0] !== 'error' && this.props.squares) {
      list = this.state.urls.map((url, index) =>
        <Col key={index} style={{padding: '0px'}}>
          <IGSquare
            url={this.state.urls[index]}
            img={this.state.imgs[index]}
            caption={this.state.captions[index]}
          />
        </Col>
      )
      return (
        <div className='IGEmbedFrame' style={{textAlign: 'center', backgroundColor: 'inherit'}}>
          <h4 style={{height: '41px', marginTop: '20px'}}>Instagram Posts</h4>
          <Container>
            <Row style={{margin: '0px'}}>
              {list}
            </Row>
          </Container>
        </div>
      )
    } else {
      return (
        <p>There was an error fetching the Instagram Feed</p>
      )
    }
  }
}

IGEmbedFrame.defaultProps = {
  source: '', // Should be in the form of https://www.instagram.com/p/BpnXsmIFYXu/
  // token: '',
  squares: false
}

IGEmbedFrame.propTypes = {
  source: PropTypes.string,
  // token: PropTypes.string,
  squares: PropTypes.bool
}

export default IGEmbedFrame
