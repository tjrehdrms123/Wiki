import React, { Component } from 'react'; // Component 상속받기위해

class Subject extends Component{
    render(){
      return(
        <header>
          <h1>{this.props.title}</h1>
          {this.props.subTitle}
        </header>
      )
    }
  }

  export default Subject;