import React, { Component } from 'react';
class MyComp extends Component{
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }
  render() {
      
    const { active } = this.state;
      return (
          <div>
              Hello World!
          </div>
      )
  }

}

export default MyComp;