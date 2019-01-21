import React, { Component } from 'react'
import Next from './next.js';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
        };
        this.login = this.login.bind(this);
      }
    
    login(){
      this.setState({showComponent: true});
  }
  render() {
    return (
      <div>
        
        {this.state.showComponent ?
           <Next /> :
           <div>
                welcome Abhishek lal 
                <button onClick={this.login}>log out</button>
            </div>
        }
      </div>
    );
  }
}
