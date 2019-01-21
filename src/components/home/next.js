import React, { Component } from 'react'
import Next from './index.js';
export default class next extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
        };
        this.logout = this.logout.bind(this);
      }
    
    logout(){
      this.setState({showComponent: true});
  }
    render() {
    return (
      <div>
          {this.state.showComponent ?
           <Next /> :
           <div>
           hello there again
           <button onClick={this.logout}>login</button>
           </div>
        }
       
        
      </div>
    )
  }
}
