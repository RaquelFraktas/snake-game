const api = process.env.REACT_APP_API
//the above environmental var is for development
//config an env variable to equal production endpoint when deploying

export const submitSignUp = (user) =>{
  return dispatch => fetch (api + "/users", {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res =>res.json())
  .then(response => {
    if(!response.errors){
    localStorage.token = response.token
    dispatch({type: "SET_USER", payload: response.user})
    } else {
      dispatch({type: "ERROR", payload: response.errors})
    }
  })
}



export const submitLogin = (user) =>{
  return dispatch => fetch (api + "/login", {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res =>res.json())
  .then(response => {
    if(!response.errors){
      localStorage.token = response.token
      dispatch({type: "SET_USER", payload: response.user.username})
    } else {
      dispatch({type: "ERROR", payload: response.errors})
    }
  })
}


export const clearErrors = () => ({type:"CLEAR_ERROR"})

export const autoLogin = () => {
  return dispatch => fetch (api + "/logged_in",{
    headers: {
      'Authorization' : localStorage.token
    }
  })
  .then(res => res.json())
  .then(response => {
    localStorage.token = response.token
    dispatch({type: "SET_USER", payload: response.user.username})
  })
}