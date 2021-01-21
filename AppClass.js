import React from 'react';
class AppClass extends React.Component {
  constructor(props){
    super(props)
      this.state ={
        count:0
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
      // Get current state 
    let currentCount = this.state.count;
      //Increase num
      currentCount +=1;
      //State state
      this.setState({
        count:currentCount
      })
    }
  render() {
    return (
      <div style ={{textAlign: "center"}}>
        <h1>You have clicked {this.state.count} times.</h1>
        <button onClick ={this.handleClick}>Increase</button>
      </div>
    )
  }
}

export default AppClass;
