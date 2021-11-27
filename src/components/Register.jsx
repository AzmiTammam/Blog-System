import React from "react";
import { Link } from "react-router-dom";

function Register() {
  
  const registerUsersArray = JSON.parse(localStorage.getItem('users'));
  const registerUsersFN = (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    let users = {
      username: username,
      password: password1,
    };

    if (password1 !== password2) {
      document.getElementById("errMsgPsw").style.display = "block";
      document.getElementById("errMsgPsw").innerHTML =
        "The passwords doesn't match 🤣";
    } else if (password1.length < 6) {
      document.getElementById("errMsgPsw").style.display = "block";
      document.getElementById("errMsgPsw").innerHTML =
        "The passwords must be more than 6";
    } else if (username.length < 4) {
      document.getElementById("errMsgUsr").style.display = "block";
      document.getElementById("errMsgUsr").innerHTML =
        "The username must be more than 4";
    } else {
      document.getElementById("errMsgPsw").style.display = "none";
      document.getElementById("errMsgUsr").style.display = "none";
      document.getElementById('customAlert').style.visibility="unset"

      registerUsersArray.push(users);
      localStorage.setItem("users", JSON.stringify(registerUsersArray));
    }


  };
  return (
    <div className="row">
      <div className="col-6 offset-3 customRegisterRow">
      <div className="alert alert-success alert-dismissible fade show" id="customAlert" role="alert">
      <i class="far fa-check-circle"></i>  <strong> You have been successfully registered <Link to="/login" className="text-decoration-none" >, you can login now!</Link> </strong>
        <button type="button" className="btn-close customAlertButton" data-bs-dismiss="alert" aria-label="Close" />
      </div>
        <div >
        <h1 className="heading">Sign up</h1>
        <form name="register">
          <div className="input-group">
            <span className="input-group-text">
              <i className="far fa-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              id="username"
              required
            />
          </div>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password1"
              id="password1"
              required
            />
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              name="password2"
              id="password2"
              required
            />
          </div>
          <div className="text-white text-center">
          <Link to="/login" className="text-decoration-none" >Already Have Account?</Link>
          </div>
          <div>
            <p id="errMsgPsw" className="errMsg"></p>
            <p id="errMsgUsr" className="errMsg"></p>
          </div>
          <input
            type="submit"
            value="Sign up"
            className="btn btn-primary text-center"
            onClick={registerUsersFN}
          />
        </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
