import React, { useState } from 'react';
import { connect } from 'react-redux'


function Auth({props}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signUp, setSignUp] = useState(false)
  const [invalidPassword, setInvalidPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    signUp ? validForSignUp() : props.submitLogin({username, password})
  }

  const validForSignUp =() =>!invalidPassword && props.submitSignUp({username, password})



  return <>
    <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <form onSubmit={this.onSubmit}>
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
                name="ingredients"
                id="password"
                className="form-control"
                required
                value={password} 
                onChange={(e) => setUsername(e.target.value)}
              />
              
            </div>
            <button type="submit" className="btn custom-button mt-3">
              Submit
            </button>

          </form>
        </div>
      </div>
    </>

}

const mapStateToProps= (state)=> { return state }

export default connect (mapStateToProps, { submitSignUp, submitLogin , clearErrors})(Auth)
