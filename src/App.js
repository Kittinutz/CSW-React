import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {
  changeUser,
  fetchUser,
  createUser,
  deleteUser,
  updateUser
} from './actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  state = {
    name: '',
    surname: '',
    job: '',
    uid: '',
    uname: '',
    usurname: '',
    ujob: '',
  };
  
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
    
  }
  handleSubmit = () => {
    this.props.createUser(this.state);
  }
  handleDelete = (e) => {
    const {id} = e.target;
    this.props.deleteUser(id);
  }
  handletoEditform = (e) => {
    const {id} = e.target;
    var userselect = [];
    const {userlist} = this.props.users;
    userlist.map(data => {
      if (data != null)
        return userselect.push(data)
    })
    userselect = userselect.filter(data => data.id == id)
    userselect.map(data => {
      return this.setState({uid: data.id, uname: data.name, usurname: data.surname, ujob: data.job})
    });
    
  };
  handleUpdate = (e) => {
    const {uname, usurname, ujob, uid} = this.state;
    
    const user = {
      name: uname,
      surname: usurname,
      job: ujob
    };
    const id = uid
    this.props.updateUser(id, user)
  }
  
  render() {
    const {userlist} = this.props.users;
    const {name, surname, job, uname, usurname, ujob} = this.state;
    const {
      handleSubmit,
      handleChange,
      handleDelete,
      handletoEditform,
      handleUpdate
    } = this;
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
        <br/>
        <h1>User in system</h1>
        <ul>
          {
            userlist.map((data, index) => {
              if (data != null) {
                return <li
                  key={data.id}>{"ID:" + data.id + " Name:" + data.name + " " + data.surname + " Job: " + data.job}
                  <button id={data.id} onClick={handletoEditform}>Edit</button>
                  <button id={data.id} onClick={handleDelete}>Delete</button>
                </li>
              }
            })
          }
        </ul>
        <h1>ADD USER</h1>
        <label htmlFor="">Name</label>
        <input type="text" name="name" onChange={handleChange} value={name}/>
        <label htmlFor="">Surname</label>
        <input type="text" name="surname" onChange={handleChange} value={surname}/>
        <label htmlFor="">Job</label>
        <input type="text" name="job" onChange={handleChange} value={job}/>
        <button onClick={handleSubmit}>Submit</button>
        <h1>Edit USER</h1>
        <label htmlFor="">Name</label>
        <input type="text" name="uname" onChange={handleChange} value={uname}/>
        <label htmlFor="">Surname</label>
        <input type="text" name="usurname" onChange={handleChange} value={usurname}/>
        <label htmlFor="">Job</label>
        <input type="text" name="ujob" onChange={handleChange} value={ujob}/>
        <button onClick={handleUpdate}>Update</button>
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
export default connect(mapStateToProps, {changeUser, fetchUser, createUser, deleteUser, updateUser})(App);
