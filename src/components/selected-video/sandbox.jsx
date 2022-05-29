const displayComment = (comment) => {
    let commentContainer = document.createElement("div");
    commentContainer.classList.add("comments__comment-container");
  
    let commentPic = document.createElement("div");
    commentPic.classList.add("comment__avi-container");
  
    let textDiv = document.createElement("div");
    textDiv.classList.add("comment__content-container");
  
    let commentDetails = document.createElement("div");
    commentDetails.classList.add("comment__details-container");
    
    let nameContainer = document.createElement("div");
    commentDetails.classList.add("comment__name-container");
    
    let dateContainer = document.createElement("div");
    commentDetails.classList.add("comment__date-container");
  
    let commentPost = document.createElement("div");
    commentPost.classList.add("comment__post-container");
    
    commentDetails.appendChild(nameContainer);
    commentDetails.appendChild(dateContainer);
    textDiv.appendChild(commentDetails)
    textDiv.appendChild(commentPost)
    commentContainer.appendChild(commentPic);
    commentContainer.appendChild(textDiv);
    
    nameContainer.innerText = "test";
    commentPost.innerText = "test";
    dateContainer.innerText = "15/04/2022";

    return (
        commentContainer
    )
  
    
  }
