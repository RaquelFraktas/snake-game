import * as React from 'react'
import Auth from './auth'
import Snake from './snake'
import { connect } from 'react-redux'
import { autoLogin } from '../redux/actionCreators';



function Home({autoLogin}) {

    return <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Let's Play Snake!</h1>
        <hr className="my-4" />
        <Auth />
        {autoLogin && <Snake />}
      </div>
    </div>
  </div>
    
}

const mapStateToProps = (state)=> {
  return {user: state.user}

}

export default connect(mapStateToProps, { autoLogin })(Home);