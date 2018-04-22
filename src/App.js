import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {changeUser,fetchUser} from './actions';
class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  state={
    name:'kittinut',
    surname:'pramhan'
  }
  handleChange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]:value},()=>{
      this.props.changeUser(this.state);
    });
    
  }
  render() {
    console.log(this.props);
    const {name,surname,userlist} = this.props.users;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Tester name={name} surname={surname}/>
        <input type="text" name="name" onChange={this.handleChange} value={name}/>
        <input type="text" name="surname" onChange={this.handleChange} value={surname}/>
        <br/>
        <ul>
          {
            userlist.map((data,index)=>{
              return <li key={index}>{data.name+" "+data.surname+" "+data.job}</li>
              
            })
          }
        </ul>
      </div>
    );
  }
}
const Tester = (props)=>{
  const {name,surname} = props;
  return (
    <div>
      <h1>Helloworld {name+" "+surname}</h1>
    </div>
  )
}

const mapStateToProps = ({users})=>{
  return {
    users,
  }
}
export default connect(mapStateToProps,{changeUser,fetchUser})(App);
