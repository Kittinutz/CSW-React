import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {changeUser, fetchUser,createUser} from './actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  state = {
    name: '',
    surname: '',
    job:''
  };
  
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
    
  }
  handleSubmit = ()=>{
    this.props.createUser(this.state);
  }
  handleDelete=(e)=>{
    console.log(e.target.id);
  }
  render() {
    console.log(this.props);
    const {userlist} = this.props.users;
    const {name ,surname,job} = this.state;
    const {handleSubmit,handleChange,handleDelete} = this;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Tester name={name} surname={surname}/>
        <label htmlFor="">Name</label>
        <input type="text" name="name" onChange={handleChange} value={name}/>
        <label htmlFor="">Surname</label>
        <input type="text" name="surname" onChange={handleChange} value={surname}/>
        <label htmlFor="">Job</label>
        <input type="text" name="job" onChange={handleChange} value={job}/>
        <button onClick={handleSubmit}>Submit</button>
        <br/>
        <h1>User in system</h1>
        <ul>
          {
            userlist.map((data, index) => {
              if(data!=null) {
                return <li key={data.id} >{"ID:"+data.id+" Name:"+ data.name + " " + data.surname + " Job: " + data.job}
                <button>Edit</button> <button id={data.id} onClick={handleDelete}>DELETE</button> <button>Update</button></li>
              }
            })
          }
        </ul>
      </div>
    );
  }
}

const Tester = (props) => {
  const {name, surname} = props;
  return (
    <div>
      <h1>Helloworld {name + " " + surname}</h1>
    </div>
  )
}

const mapStateToProps = ({users}) => {
  return {
    users,
  }
}
export default connect(mapStateToProps, {changeUser, fetchUser,createUser})(App);
