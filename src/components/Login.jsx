/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";

function Login() {
  const loginUsersFN = (e) => {
    e.preventDefault();

    const loginUserName = document.getElementById("loginUserName").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const localData = JSON.parse(localStorage.getItem("users"));
    console.log(localData);

    let flag = false;
    for (const i in localData) {
      if (
        localData[i].username === loginUserName &&
        localData[i].password === loginPassword
      ) {
        flag = true;
      }
    }
    if (flag === true) {
      let navUserName = document.getElementById('navUserName').innerHTML = `Hello, ${loginUserName}`
      document.getElementById('hideAfterLogin').style.display = "none";
      document.getElementById('hideAfterLogin1').style.display = "none";
      let logged = true;



    } else {
      document.getElementById('customAlert1').style.visibility ="unset"
    }

    /*             const items = { ...localStorage };
            console.log(items); */
  };
  return (
    <div className="row customRegisterRow">
      <div className="col-6 offset-3">

      <div className="alert alert-danger alert-dismissible fade show" id="customAlert1" role="alert">
        <strong><i class="fas fa-exclamation-triangle"></i></strong> The password you’ve entered is incorrect.
        <button type="button" className="btn-close customAlertButton" data-bs-dismiss="alert" aria-label="Close" />
      </div>

        <div className="bgCustom">
          <h1 className="heading">Sign in</h1>
          <form name="login">
            <div className="input-group">
              <span className="input-group-text">
                <i className="far fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                id="loginUserName"
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
                name="password"
                id="loginPassword"
              />
            </div>
            <input
              type="submit"
              value="Sign in"
              className="btn btn-primary text-center"
              onClick={loginUsersFN}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

