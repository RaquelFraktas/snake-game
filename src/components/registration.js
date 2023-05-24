// import * as React from 'react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from './form'


export default function Registration(){
  const [showForm, setShowForm]= useState(false);
  const [showButton, setShowButton]= useState(true);

  
  const displayForm = (e) => {
    setShowForm(!showForm);
    console.log(e.classList)
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
    {showForm && <Form />}
  </>
}