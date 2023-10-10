const commentsArr = [
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
const titleArr = {
  name:"Name: ", comment:"Comment: "
}
const comments = document.createElement("section");

const getStartedTitle = document.createElement('h1');
getStartedTitle.innerText="Join the Conversation";
document.querySelector("main").appendChild(getStartedTitle);
getStartedTitle.classList.add("getstarted-title");
const commentForm = document.createElement('form');
const userImg = document.createElement("img");
const inputName = document.createElement("input");
const inputCom= document.createElement("input");
const inputButton = document.createElement("input");
const card = document.createElement("div")
card.classList.add("card");
const titleName = document.createElement("p")
const titleComment=document.createElement("p")
titleName.innerText=titleArr.name;
titleComment.innerText= titleArr.comment;
titleName.classList.add("titles")
titleComment.classList.add("titles")

inputName.type = "text";
inputCom.type = "text";
inputName.name = "name";
inputCom.name = "comment";
userImg.setAttribute("src","../assets/Images/Mohan-muruge.jpg");

userImg.classList.add("user-image");
inputName.placeholder = "Enter your name";
inputName.classList.add("input")
inputCom.classList.add("input")
inputCom.placeholder = "Add a new comment";
inputCom.style.height="100px";
inputButton.type = "submit";
inputButton.value = "Comment";
inputButton.classList.add("input-button");
commentForm.appendChild(userImg);
card.appendChild(titleName)
card.appendChild(inputName);
card.appendChild(titleComment)
card.appendChild(inputCom);
card.appendChild(inputButton);

commentForm.appendChild(card);
document.querySelector("main").appendChild(commentForm);
commentForm.classList.add("comment-form");
const submissionsArray = [];

commentForm.addEventListener("submit", function (event) {
    
  event.preventDefault();
if(inputName.value !== ""){
  const name = inputName.value;
    const comment = inputCom.value;
    const date = new Date();
    const timeStamp = date.getDate() + "/"+(date.getMonth()+1)  + "/"+date.getFullYear();
    // + " @ "  
    // + date.getHours() + ":"  
    // + date.getMinutes() + ":" 
    // + date.getSeconds();

 console.log(timeStamp);
  const submissionData = {
    name,
    timeStamp,
    comment
    
  };

   commentsArr.splice(0,0,submissionData);
   comments.innerText = "";
  for(i=0;i<3;i++){
    displayComment(commentsArr[i]);
  }
  
  commentForm.reset();
}
});


comments.innerText = "";
for (let i=0;i<commentsArr.length;i++){
function displayComment(commentObj){
        // console.log("hi")
        const commentCard = document.createElement("article");
        const commentHeader1=document.createElement("div")
        const commentHeader2=document.createElement("div")
        const commentName = document.createElement("p");
        const commentTime = document.createElement("p");
        const commentText = document.createElement("p");
        const colorPlaceholder = document.createElement("div");
        const extraDiv=document.createElement("div");
        colorPlaceholder.style.backgroundColor = "#E1E1E1";
        
        commentCard.classList.add("comment-card");
        colorPlaceholder.classList.add("comment-image");
        
        commentName.innerText = commentObj.name;
        commentTime.innerText = commentObj.timeStamp;
        commentText.innerText = commentObj.comment;
        
        commentName.classList.add("comment-styles");
        commentText.classList.add("comment-styles")

        commentName.style.fontSize='$mobile-bodycopy--size' ;
        commentName.style.fontFamily='AvenirNextBold';
        
        commentCard.appendChild(colorPlaceholder);
        commentHeader1.appendChild(commentName);
        commentHeader1.appendChild(commentTime);
        commentHeader1.classList.add("header-style");
        
        commentCard.appendChild(commentHeader1);
        commentCard.appendChild(commentText);
        extraDiv.appendChild(colorPlaceholder);
        extraDiv.appendChild(commentCard)
        comments.appendChild(extraDiv);
        extraDiv.classList.add("extra-div")
        comments.classList.add("comments");
        document.querySelector("main").appendChild(comments);
        
    }
    
displayComment(commentsArr[i]);
}

// console.log(comments);
 