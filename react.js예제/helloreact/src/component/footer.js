import React, { Component } from 'react';

class Footer extends Component {
    render(){
      return(
        <div>
          <p>{this.props.footer}</p>
          <h1>{this.props.subFooter}</h1>
        </div>
      );
    }
  }

export default Footer;