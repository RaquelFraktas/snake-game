import * as React from 'react'
import Button from 'react-bootstrap/Button';


export default function home() {
    return <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Let's Play Snake!</h1>
        <p className="lead">
          Please log in 
        </p>
        <hr className="my-4" />
        <Button
          className="btn btn-lg custom-button"
          role="button"
        >
          Log in
        </Button>

        <Button
          className="btn btn-lg custom-button ms-"
          role="button"
        >
          Create a username
        </Button>
      </div>
    </div>
  </div>
    
}