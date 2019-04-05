import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../../Store/Actions/authActions'
import Footer from '../Layout/Footer'
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      gender: '',
      username: '',
      age: null,
      astro: '',
      religion: '',
      region: '',
      job:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // state = {
  //   email: '',
  //   password: '',
  //   firstName: '',
  //   lastName: '',
  //   gender: '',
  //   username: '',
  //   age: null,
  //   astro: '',
  //   religion: '',
  //   region: '',
  //   job: ''

  // }
  handleChange = (e) => {
    
    this.setState({
      [e.target.id]: e.target.value
    })
    const gender = document.getElementById('gender').options[document.getElementById('gender').selectedIndex].text;
    const religion = document.getElementById('religion').options[document.getElementById('religion').selectedIndex].text;
    const job = document.getElementById('job').options[document.getElementById('job').selectedIndex].text;
    const region = document.getElementById('region').options[document.getElementById('region').selectedIndex].text;
    const astro = document.getElementById('astro').options[document.getElementById('astro').selectedIndex].text;

    this.setState({
        'gender' : gender,
        'region' : region,
        'job' : job,
        'religion' : religion,
        'astro' : astro,

    })
  }
 
  handleSubmit = (e) => {
    e.preventDefault();

    //console.log(this.state)
    this.props.signUp(this.state);
    // this.props.history.push('/')
  }
  render() {

    return (
      <React.Fragment>
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id='lastName' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="username">Choose A Username</label>
              <input type="text" id='username' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Choose a Password</label>
              <input type="password" id='password' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="Age">Age</label>
              <input type="number" id='age' onChange={this.handleChange} />
            </div>
            <div class="row">
              <label>Gender </label>
              <select id="gender" value={this.state.gender} >
                <option value="" disabled selected>Male</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div class="row">
              <label>Religion</label>
              <select id="religion" onChange={this.handleChange}>
                <option value="" disabled selected>Hindu</option>
                <option value="1">Hindu</option>
                <option value="2">Muslim</option>
                <option value="3">Christian</option>
                <option value="4">Sikh</option>
              </select>
            </div>
            <div class="row">
              <label>Profession : </label>
              <select id="job" onChange={this.handleChange}>
                <option value="" disabled selected>Doctor</option>
                <option value="1">Engineer</option>
                <option value="2">Doctor</option>
                <option value="3">Teacher</option>
                <option value="4">Business Owner</option>
              </select>
            </div>
            <div class="row">
              <label>Region :</label>
              <select id="region" onChange={this.handleChange}>
                <option value="" disabled selected>Delhi</option>
                <option value="1">Delhi</option>
                <option value="2">Mumbai</option>
                <option value="3">Chennai</option>
                <option value="4">Kolkata</option>
              </select>
            </div>
            <div class="row">
              <label>Astrological Sign</label>
              <select id="astro" onChange={this.handleChange}>
                <option value="" disabled selected>Gemini</option>
                <option value="1">Aries</option>
                <option value="2">Gemini</option>
                <option value="3">Capricorn</option>
                <option value="4">Libra</option>
              </select>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Sign Up
            <i class="material-icons right">add_circle</i>
              </button>
              {/* <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div> */}
            </div>
          </form>
        </div>
        <br /><br /><br /><br />
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signup(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);