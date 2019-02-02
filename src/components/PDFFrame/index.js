import React, { Component } from 'react';


class PDFFrame extends Component {

  constructor(props){
    super(props);
    this.state = {
      width: ((window.innerWidth > 576) ? 400 : parseInt(window.innerWidth*.75, 10)),
      height: (parseInt(window.innerHeight * .80, 10)), // 10 is for radix
      mobile: (((window.innerWidth > 576) && (window.innerHeight > 576)) ? false : true)
    }
  }

  render() {
    if(this.state.mobile){
      return(
        <a href={this.props.source}>{"Click here to view " + this.props.title}</a>
      );
    }
    return(
      <object height={this.state.height} width={this.state.width} data={source}/>
      );
    }
}

PDFFrame.defaultProps = {
  source: "https://pdfobject.com/pdf/sample-3pp.pdf",
  title: "Deafult"
}

export default PDFFrame;
