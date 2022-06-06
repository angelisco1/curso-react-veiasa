import { Component } from "react";

class DeClase extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dato1: 0,
      dato2: 'a'
    }
  }

  render() {
    return (
      <h3>Componente de clase</h3>
    )
  }

}

export default DeClase;