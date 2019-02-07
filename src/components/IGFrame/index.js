import React, { Component } from 'react';


class IGFrame extends Component {

  constructor(props){
    super(props);
    this.state = {
      width: ((window.innerWidth > 576) ? 500 : parseInt(window.innerWidth*.75, 10)),
      height: (parseInt(window.innerHeight * .80, 10)), // 10 is for radix
      mobile: (((window.innerWidth > 576) && (window.innerHeight > 576)) ? false : true)
    }
  }

  render() {
    console.log(this.props.source)
    return(
      <div style={{textAlign: 'center'}}>
        <h4 style={{height : '41px', marginTop: '20px', visibility: (this.props.first ? 'visible' :'hidden')}}>Instagram Posts</h4>
        <iframe
          src={this.props.source + "embed/captioned"}
          title="ig-frame"
          width={this.state.width}
          height={this.state.height}
          frameBorder="0"
          scrolling="no">
        </iframe>
      </div>
      );
    }
}

IGFrame.defaultProps = {
  data: "timeline",
  source: "Bl4m0xInwQl",
  first: true
}

export default IGFrame;
