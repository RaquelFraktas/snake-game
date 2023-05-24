import * as React from 'react'
import Registration from './registration'


export default function home() {

    return <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Let's Play Snake!</h1>
        <p className="lead">
          Please log in 
        </p>
        <hr className="my-4" />
        <Registration />
      </div>
    </div>
  </div>
    
}