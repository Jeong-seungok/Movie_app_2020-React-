import React from 'react';
import Potato from './potato';
import propTypes from 'prop-types';



class App extends React.Component {
  constructor(props){
    super(props);
    console.log('hello')
  }
  state = {
    isLoading: true
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading: false});
    },1000)
  }
  render(){
    console.log('render');
    const { isLoading } = this.state;
    return (
      <div className="App">
        {isLoading ? 'Loadding...' : 'We are ready'}
      </div>
    );
  }
  }


export default App;
