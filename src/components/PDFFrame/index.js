import React, { Component } from 'react';
import { Button } from 'reactstrap'


class PDFFrame extends Component {

  constructor(props){
    super(props);
    this.state = {
      height: (parseInt(window.innerHeight * .80, 10)), // 10 is for radix
      mobile: (((window.innerWidth > 576) && (window.innerHeight > 576)) ? false : true)
    }
  }

  render() {
    if(this.state.mobile){
      return(
        <Button href={this.props.source}>{"Click here to view " + this.props.title}</Button>
      );
    }
    return(
      <object height={this.state.height} width="100%" data={this.props.source}/>
    );
    }
}

PDFFrame.defaultProps = {
  source: "https://pdfobject.com/pdf/sample-3pp.pdf",
  title: "Deafult"
}

export default PDFFrame;
