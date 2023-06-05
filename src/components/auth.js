import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { submitSignUp, submitLogin, clearErrors } from '../redux/actionCreators';



function Auth(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signUp, setSignUp] = useState(false)
  // const [logIn, setLogIn] = useState(false)
  const [invalidPassword, setInvalidPassword] = useState(false)
  const [showForm, setShowForm]= useState(false);
  const [showButton, setShowButton]= useState(true);

  const handleSubmit = (e) => {
    e.preventDefault()
    signUp ? validForSignUp() : props.submitLogin({username, password})
    setShowForm(!showForm);
  }

  const displayForm = (e) => {
    setShowForm(!showForm);
    setShowButton(!showButton)
    
    if (e.target.value === "create-username"){
      setSignUp(true)
    }
  }

  const validForSignUp =() =>!invalidPassword && props.submitSignUp({username, password})



  return <>

    { showButton && <>
        <p className="lead">
          Please log in 
        </p>
        <Button
        className="btn btn-lg custom-button"
        role="button"
        value ="log-in"
        onClick={displayForm}
        >
          Log in
        </Button>
      
        <Button
          className="btn btn-lg custom-button ms-4"
          role="button"
          value="create-username"
          onClick={displayForm}
        >
          Create a username
        </Button>
      </>
    } 
    

    { showForm && 
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <form onSubmit= {handleSubmit} >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="name"
                id="username"
                className="form-control"
                required
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                required
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
              
            </div>
            <button type="submit" className="btn custom-button mt-3">
              Submit
            </button>

          </form>
        </div>
      </div>
    }
  </>

}

const mapStateToProps= (state)=> { return state }

export default connect (mapStateToProps, { submitSignUp, submitLogin , clearErrors})(Auth)
