// const nameInput = document.createElement('input');
// nameInput.type = 'text';
// nameInput.name = 'name';  // Name attribute for form submission
// nameInput.placeholder = 'Your Name';

// // Create an input element for the email field
// const emailInput = document.createElement('input');
// emailInput.type = 'email';
// emailInput.name = 'email';  // Name attribute for form submission
// emailInput.placeholder = 'Your Email';

// // Create a submit button
// const submitButton = document.createElement('input');
// submitButton.type = 'submit';
// submitButton.value = 'Submit';

// // Add the input elements to the form
// formElement.appendChild(nameInput);
// formElement.appendChild(emailInput);
// formElement.appendChild(submitButton);

// Append the form to the body or any other container element
// document.body.appendChild(formElement);

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


const commentForm = document.createElement('form');
const userImg = document.createElement("img");
const inputName = document.createElement("input");
const inputCom= document.createElement("input");
const inputButton = document.createElement("input");
const card = document.createElement("div")
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
// userImg.style.width = "36px";
// userImg.style.height = "36px";
// userImg.style.borderRadius = "50%";
userImg.classList.add("user-image");
inputName.placeholder = "Enter your name";
inputName.classList.add("input")
inputCom.classList.add("input")
inputCom.placeholder = "Add a new comment";
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
    
  event.preventDefault(); //prevents page from refreshing
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
  
  // console.log(commentsArr)
  commentForm.reset();
}
});

// console.log(commentsArr);

// const comments1 = document.createElement("section");


comments.innerText = "";
for (let i=0;i<commentsArr.length;i++){
function displayComment(commentObj){
        console.log("hi")
        const commentCard = document.createElement("article");
        const commentHeader1=document.createElement("div")
        const commentHeader2=document.createElement("div")
        const commentName = document.createElement("p");
        const commentTime = document.createElement("p");
        const commentText = document.createElement("p");
        const colorPlaceholder = document.createElement("div");
        const extraDiv=document.createElement("div");
        colorPlaceholder.style.backgroundColor = "#E1E1E1";
        // colorPlaceholder.style.width = "36px";
        // colorPlaceholder.style.height = "36px";
        // colorPlaceholder.style.borderRadius = "50%";
        commentCard.classList.add("comment-card");
        colorPlaceholder.classList.add("comment-image");
        // commentImg.classList.add("comment-img");
        // commentName.classList.add("comment-name");
        // commentImg.style.borderRadius='50%';
        commentName.innerText = commentObj.name;
        commentTime.innerText = commentObj.timeStamp;
        commentText.innerText = commentObj.comment;
        // commentText.style.marginLeft='36px';
        // commentText.style.padding='16px';
        // commentName.style.padding='0 16px';
        commentName.classList.add("comment-styles");
        commentText.classList.add("comment-styles")

        commentName.style.fontSize='$mobile-bodycopy--size' ;
        commentName.style.fontFamily='AvenirNextBold';
        // commentName.style.color='$navbar-color';
        // commentCard.style.display='inline-block';
        // commentCard.style.width="100%";
        // commentCard.style.height="auto";
        // commentHeader1.style.display='flex';
        // commentHeader1.style.justifyContent="flex-start";
        // commentHeader2.style.display='flex';
        // commentHeader2.style.justifyContent="space-between";
        // commentHeader1.appendChild(colorPlaceholder);
        commentCard.appendChild(colorPlaceholder);
        commentHeader1.appendChild(commentName);
        commentHeader1.appendChild(commentTime);
        commentHeader1.classList.add("header-style");
        // commentHeader2.appendChild(commentHeader1)
        // commentHeader2.appendChild(commentTime);
        // commentCard.appendChild(commentHeader2);
        commentCard.appendChild(commentHeader1);
        commentCard.appendChild(commentText);
        // comments.appendChild(commentCard);
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
 