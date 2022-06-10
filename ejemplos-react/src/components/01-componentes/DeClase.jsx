import { Component } from "react";

class DeClase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dato1: 0,
      dato2: 'a'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this)
    this.setState({
      dato1: this.state.dato1 + 1
    })
  }

  render() {
    return (
      <div>
        <h3>Componente de clase</h3>
        <p>Nº: {this.state.dato1}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }

}

export default DeClase;