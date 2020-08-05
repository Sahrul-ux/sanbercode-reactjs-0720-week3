import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      date: new Date()
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdateO(){
    if(this.state.time > 5){
      this.componentWillUnmount();
  }
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      date: new Date() 
    });
  }


  render(){
    return(
      <>
        {
          this.state.time > 0 && (
            <>
              <h1 style={{float: "left"}}>
                Sekarang jam - {this.state.date.toLocaleTimeString()}.
              </h1>
              <h1 style={{float: "right"}}>
                hitung Mundur: {this.state.time}
              </h1>
            </>
          )   
        }
      </>

    )
  }
}
export default Timer