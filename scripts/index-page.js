const comments = [
    {
        name:"Connor Walton",
        timeStamp:"02/17/2021",
        comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name:"Emilie Beach",
        timeStamp:"01/09/2021",
        comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name:"Miles Acosta",
        timeStamp:"12/20/2020",
        comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
    
]
for (let i=0;i<comments.length;i++){
// const commentCard = document.createElement('div'),
function displayComment(commentObj){
    document.querySelector(".comments").innerText="";
        const commentCard = document.createElement("article");
        const commentHeader=document.createElement("div")
        const commentName = document.createElement("p");
        const commentTime = document.createElement("p");
        const commentText = document.createElement("p");
        commentName.innerText = commentObj.name;
        commentTime.innerText = commentObj.timeStamp;
        commentText.innerText = commentObj.comment;
        commentName.style.fontSize='$mobile-bodycopy--size' ;
        commentName.style.fontFamily='AvenirNextBold';
        commentName.style.color='$navbar-color';
        commentCard.style.display='inline-block';
        commentHeader.style.display='flex';
        commentHeader.style.justifyContent="space-between";
        commentHeader.appendChild(commentName);
        commentHeader.appendChild(commentTime);
        commentCard.appendChild(commentHeader);
        // commentCard.appendChild(commentTime);
        commentCard.appendChild(commentText);
        document.querySelector(".comments").appendChild(commentCard);
        //i think issue is function is inside loop
        
    }
displayComment(comments[i])
}


function addComments() {
    const loadingEl = document.querySelector(".comments__single");
    // loadingEl.style.display = "none";
    // document.querySelector(".comments").removeChild(loadingEl);
    document.querySelector(".comments").innerText = "";
    for(let i = 0; i < comments.length; i++) {
      const commentCard = document.createElement("article");
      const commentContent = document.createElement("p");
      const commentTitle = document.createElement("h2");
      const commentPic = document.createElement("img");
      commentCard.classList.add("comments__single");
      commentPic.setAttribute("src",comments[i].profile_pic);
      commentTitle.innerText = comments[i].title;
      commentContent.innerText = comments[i].content;
      commentCard.appendChild(commentPic);
      commentCard.appendChild(commentTitle);
      commentCard.appendChild(commentContent);
      document.querySelector(".comments").appendChild(commentCard);
    }
  }