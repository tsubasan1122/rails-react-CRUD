import React from 'react'

class MainContainer extexds React.Component {
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/products")
      .then(results() => {
        console.log(results);
        this.setState({products: results.data})
    })
    .catch((data) => {
      console.log(data);
    })
  }

  render(){
    return(
      <div nameClass="app-main">
      </div>
    );
  }
}

export default MainContainer
