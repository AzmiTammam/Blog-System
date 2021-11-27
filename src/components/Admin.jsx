import React from "react";
import CardsContainer from "./cardsContainer";
import { Link } from "react-router-dom"

function Admin () {
      const postsArray = JSON.parse(localStorage.getItem('posts'));

      const handlePosts = (e) => {
            e.preventDefault();

            let titleInput = document.getElementById('titleInput').value
            let imgInput = document.getElementById('imgInput').value
            let bodyInput = document.getElementById('bodyInput').value 

            let posts = {
                  titlePost: titleInput,
                  imgPost: imgInput,
                  bodyPost: bodyInput
            } 
            postsArray.push(posts);
            localStorage.setItem("posts", JSON.stringify(postsArray));
      }
      return(
            <div className="row" >
            <div className="col-12 text-center text-white">
                  <h1 className="mt-5">
                  Admin Panel
                  </h1>
                  <div className="AdminDashboard" >
                  <div className="title ps-3">
                  <h5>Add New Post</h5>
                  </div>
                  
                  <form>
                        <div>
                        <input type="text" placeholder="Title..." id="titleInput" />
                        </div>
                        <div>
                        <input type="text" placeholder="img" id="imgInput" />
                        </div>
                        <div>
                        <input type="text" className="bodyInput" placeholder="Body..." id="bodyInput" />
                        </div>
                        <input type="submit" className="btn text-white bg-primary" onClick={handlePosts}  />
                  </form>

                        <div className="AdminCards" >
                              <CardsContainer />
                        </div>
                  </div>
            </div>

            

            </div>
      )
}

export default Admin;