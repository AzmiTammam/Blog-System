/* eslint-disable no-unused-vars */
import React from "react";

function Cards(props) {
  const localData = JSON.parse(localStorage.getItem("users"));
  console.log(localData);

  for (const i in localData) {
    let username = localData[i].username;
    console.log(username);
  }

  let userClickLike = false;
  const handleLike = (e) => {
    if (userClickLike === false) {
      let likeButton = document.getElementById("likeButton");
      likeButton.classList.toggle("ClickLikeButton");
      userClickLike = true;
    } else {
      alert("You cannot do like more than once");
    }
  };

  const handleComment = (e) => {
    e.preventDefault();
    let commentArea = document.getElementById("commentArea").value;
    let submitNewComment = document.getElementById("submitNewComment");

    const submit = document.querySelector(".comment-submit");
    const commentList = document.querySelector(".comments");
    const commentInput = document.querySelector(".comment-input");

    function template(data) {
      commentList.insertAdjacentHTML(
        "beforeend",
        `
  <div class="comment flex items-start justify-start">
      <div class="flex-1">
        <h3 class="comment-author">${data.author}</h3>
        <p class="comment-body">${data.comment}</p>
      </div>
    </div>
  </div>`
      );
    }

    function appendComment(e) {
      const data = {
        avatar:
          "https://secure.gravatar.com/avatar/d1f5ca0d7e625f334c5186e112b77ebd",
        comment: commentInput.value,
        author: this.username,
      };

      e.preventDefault();

      if (commentInput.value.length < 1) return;


      template(data);


      commentInput.value = "";


      localStorage.setItem("commentListing", commentList.innerHTML);
    }

    submit.addEventListener("click", appendComment, false);

    const saved = localStorage.getItem("commentListing");


    if (saved) {
      commentList.innerHTML = saved;
    }

    console.log(commentArea);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title card-header">{props.title}</h5>
        <p className="card-text">{props.body}</p>
        <span id="likeButton" onClick={handleLike}>
          <i className="far fa-heart"></i>
        </span>
        <div className="comments">
          <h6>Comments:</h6>
          <p id="commentBody"></p>

          <form>
            <textarea
              id="commentArea"
              className="comment-input"
              cols="31"
              rows="4"
              placeholder="Add a new comment"
            ></textarea>
            <input
              type="submit"
              class="comment-submit btn btn-outline-primary"
              id="submitNewComment"
              value="Submit"
              onClick={handleComment}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cards;
