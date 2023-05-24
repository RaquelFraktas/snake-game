export default function Form() {

  return <>
    <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          {/* <form onSubmit={this.onSubmit}> */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="name"
                id="username"
                className="form-control"
                required
                // onChange={this.onChange}
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
                // onChange={this.onChange}
              />
              
            </div>
            <button type="submit" className="btn custom-button mt-3">
              Submit
            </button>

          {/* </form> */}
        </div>
      </div>
    </>

}