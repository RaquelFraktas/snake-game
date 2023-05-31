import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Auth from './auth'


export default function LogIn(){
  const [showForm, setShowForm]= useState(false);
  const [showButton, setShowButton]= useState(true);

  
  const displayForm = (e) => {
    setShowForm(!showForm);
    setShowButton(!showButton)
  }


  return <>
      { showButton && <>
        <Button
        className="btn btn-lg custom-button"
        role="button"
        onClick={displayForm}
        >
          Log in
        </Button>
      
        <Button
          className="btn btn-lg custom-button ms-4"
          role="button"
          onClick={displayForm}
        >
          Create a username
        </Button>
      </>
    }
    {showForm && <Auth />}
  </>
}