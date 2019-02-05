import React,{ Component } from "react";
import "./style.css";

class SignUp extends Component {


render() {
return (
<form  id="signup" name="signup" className="formCustom">
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card custCard">
            <div className="card-header">
              <h5 className="title">Create Profile</h5>
            </div>
            <div className="card-body">
              
                <div className="row">
                  <div className="col-md-4 pr-md-1">
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" placeholder="Username" name="username"/>
                    </div>
                  </div>
                  <div className="col-md-4 pl-md-1">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" className="form-control" placeholder="john.doe@gmail.com" name="email"/>
                    </div>
                  </div>
                  <div className="col-md-4 pl-md-1">
                    <div className="form-group">
                      <label>Password</label>
                      <input name="password" type="password" className="form-control" name="password" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pr-md-1">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" className="form-control" placeholder="First Name" name="firstname"/>
                    </div>
                  </div>
                  <div className="col-md-6 pl-md-1">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" className="form-control" placeholder="Last Name" name="lastname"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input type="text" className="form-control" placeholder="Home Address"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 pr-md-1">
                    <div className="form-group">
                      <label>City</label>
                      <input type="text" className="form-control" placeholder="City"/>
                    </div>
                  </div>
                  <div className="col-md-4 px-md-1">
                    <div className="form-group">
                      <label>Country</label>
                      <input type="text" className="form-control" placeholder="Country"/>
                    </div>
                  </div>
                  <div className="col-md-4 pl-md-1">
                    <div className="form-group">
                      <label>Postal Code</label>
                      <input type="number" className="form-control" placeholder="ZIP Code"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <div className="form-group">
                      <label>About Me</label>
                      <textarea rows="4" cols="80" className="form-control" placeholder="Tell us a bit about yourself"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            
            <div className="card-footer">
              <button type="submit" className="btn btn-fill btn-success" id="addNewUser">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  )
}

};

export default SignUp;